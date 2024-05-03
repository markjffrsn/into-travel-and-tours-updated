import emailjs from '@emailjs/browser';
import { useRef, useEffect, useState } from 'react';
import Accounts from './SocialLinks';
import Select, { createFilter } from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Country, City } from 'country-state-city';
import CustomOption from './CustomOption';

export default function Booking({ margin }) {
	const [selectedStartDate, setSelectedStartDate] = useState(null);
	const [selectedEndDate, setSelectedEndDate] = useState(null);

	const [selectedTravelPreference, setSelectedTravelPreference] =
		useState(null);
	const [selectedDestination, setSelectedDestination] = useState(null);

	const countryData = Country.getAllCountries().sort();

	const [selectedCountry, setSelectedCountry] = useState(null);
	const [selectedCity, setSelectedCity] = useState(null);

	let countryInput = document.getElementById('otherCountry');

	// Email js
	const form = useRef();
	const sendBooking = (e) => {
		e.preventDefault();

		setSelectedStartDate(null);
		setSelectedEndDate(null);

		setSelectedTravelPreference(null);
		setSelectedDestination(null);

		setSelectedCountry(null);
		setSelectedCity(null);

		emailjs
			.sendForm(
				'gmail', // service_8mohi3c
				'template_52uo7mo', // template_tho88mc
				form.current,
				'QGhl9lahCI89zs2KX' // IWs0Xo_Ax-XkU0mGo
			)
			.then(
				(result) => {
					console.log(result.text);
					alert('We have now received your inquiry!');
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	// Smooth transition
	useEffect(() => {
		const scrollToSection = () => {
			const hash = location.hash;
			if (hash) {
				const section = document.querySelector(hash);
				if (section) {
					section.scrollIntoView({ behavior: 'smooth' });
				}
			}
		};

		scrollToSection();
	}, [location]);

	// List of destinations
	const philippines = [
		'Bohol',
		'El Nido',
		'Batangas',
		'Palawan',
		'Zambales',
		'Cebu',
		'Manila',
		'Batanes',
		'Boracay',
	];

	const india = [
		'Agra',
		'Rajasthan',
		'Jammu and Kashmir',
		'Kerala',
		'Himalayas',
		'South India',
		'Goa',
		'Anadaman and Nicobar Islands',
	];

	const japan = ['Tokyo', 'Osaka', 'Narita'];

	const uae = ['Dubai', 'Abu Dhabi'];

	const thailand = ['Pattaya', 'Bangkok'];

	const korea = ['Jeju', 'Seoul'];

	const australia = ['Sydney', 'Adelaide', 'Perth', 'Melbourne'];

	const otherDestination = [
		'Singapore',
		'Hongkong',
		'Cambodia',
		'Vietnam',
		'Malaysia',
		'Indonesia',
		'China',
		'Macau',
		'Maldives',
		'Newzealand',
		'Laos',
		'Iceland',
		'Myanmar',
		'Brunie',
		'Taiwan',
	];

	// Options for travel preference
	const travelPreferenceOptions = [
		{ value: 'Business Travel', label: 'Business Travel' },
		{ value: 'Leisure Travel', label: 'Leisure Travel' },
		{ value: 'Special Interest Travel', label: 'Special Interest Travel' },
	];

	const handleStartDateChange = (date) => {
		setSelectedStartDate(date);
	};

	const handleEndDateChange = (date) => {
		setSelectedEndDate(date);
	};

	const getCountryNameFromIsoCode = (isoCode) => {
		const country = countryData.find((c) => c.isoCode === isoCode);
		return country ? country.name : 'Country not found';
	};

	const countryOptions = countryData.map((country) => ({
		value: country.isoCode,
		label: country.name,
	}));

	const cityOptions =
		selectedCountry !== null
			? Array.from(
				new Set(
					City.getCitiesOfCountry(selectedCountry.value).map(
						(city) => city.name
					)
				)
			).map((cityName) => ({
				value: cityName,
				label: cityName,
			}))
			: [];

	const handleOtherCountryChange = (event) => {
		setSelectedCountry(event.target.value); // Update the selected country state based on the input value
		const countrySelect = document.getElementById('country');
		const citySelect = document.getElementById('city');
		const otherCityInput = document.getElementById('otherCity');

		countrySelect.required = false; // Add 'required' if "Other Country" is filled
		citySelect.required = false;

		otherCityInput.disabled = false;
		setSelectedCity(null);
		citySelect.disabled = true;
	};

	const handleOtherCityChange = (event) => {
		setSelectedCity(event.target.value); // Update the selected city state based on the input value
		const countrySelect = document.getElementById('country');
		const citySelect = document.getElementById('city');
		countrySelect.required = event.target.value === '';
		citySelect.required = event.target.value === ''; // Add 'required' if "Other City" is filled

		setSelectedCountry(null);
	};

	const handleCountryChange = (selectedOption) => {
		setSelectedCountry(selectedOption);
		setSelectedCity(null); // Reset selected city when country changes

		const otherCountryInput = document.getElementById('otherCountry');
		const otherCityInput = document.getElementById('otherCity');
		otherCountryInput.required = selectedOption.value === ''; // Remove 'required' if country is selected from the options

		// Clear the value of the other country input field
		if (selectedOption.value !== '') {
			otherCountryInput.value = '';
			otherCityInput.value = '';
			otherCityInput.disabled = true;
		}
	};

	const handleCityChange = (selectedOption) => {
		setSelectedCity(selectedOption);

		const otherCityInput = document.getElementById('otherCity');
		otherCityInput.required = selectedOption.value === ''; // Remove 'required' if city is selected from the options
	};

	const customStyles = {
		control: (provided) => ({
			...provided,
			width: '100%',
		}),
	};

	return (
		<form
			ref={form}
			onSubmit={sendBooking}
			id="getMyFirstTour"
			className={margin}
		>
			<div className="container py-md-5 pt-5 pb-3 form-container-main">
				<h2 className="form-title">Get in touch with us!</h2>
				<p className="mt-2 form-reminder">*all fields are required</p>
				<div
					className="row gx-5"
					style={{
						width: '100%',
					}}
				>
					<div className="col-lg-8 form-container mt-3">
						<div className="row mb-4">
							<div className="form-group col-md-6">
								<label htmlFor="firstName" className="mb-2">
									First name
								</label>
								<input
									type="text"
									className="form-control"
									id="firstName"
									name="firstName"
									placeholder="First name"
									required
								/>
							</div>

							<div className="form-group col-md-6">
								<label htmlFor="lastName" className="mb-2 mt-md-0 mt-4">
									Last name
								</label>
								<input
									type="text"
									className="form-control"
									id="lastName"
									name="lastName"
									placeholder="Last name"
									required
								/>
							</div>
						</div>
						<div className="row mb-4">
							<div className="form-group col-md-8 col-12">
								<label htmlFor="email" className="mb-2">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="email"
									name="email"
									placeholder="example@gmail.com"
									required
								/>
							</div>
							<div className="form-group col-md-4 col-12">
								<label htmlFor="phone" className="mb-2 mt-md-0 mt-4">
									Phone number
								</label>
								<input
									type="tel"
									className="form-control"
									id="phone"
									name="phone"
									placeholder="Phone number"
									required
								/>
							</div>
						</div>
						<div className="row mb-4">
							<div className="form-group col">
								<div className="row">
									<div className="col-12">
										<label htmlFor="origin" className="mb-2  ">
											Origin
										</label>
										<div className="row">
											<div className="col-sm-6 col-12">
												<Select
													name="country"
													id="country"
													aria-label="Country"
													value={selectedCountry}
													onChange={handleCountryChange}
													options={countryOptions}
													getOptionValue={(option) => option.label}
													getOptionLabel={(option) =>
														getCountryNameFromIsoCode(option.value)
													}
													className="select-component"
													placeholder="Select Country"
													filterOption={createFilter({ ignoreAccents: false })}
													components={{ Option: CustomOption }}
													isSearchable
													styles={customStyles}
													required={!selectedCity}
												/>

												<Select
													name="city"
													id="city"
													aria-label="City"
													value={selectedCity}
													onChange={handleCityChange}
													options={cityOptions}
													className="select-component mt-2 "
													placeholder="Select City"
													filterOption={createFilter({ ignoreAccents: false })}
													components={{ Option: CustomOption }}
													isSearchable
													styles={customStyles}
													isDisabled={!selectedCountry} // Disable city select when no country is selected
													required={selectedCountry}
												/>
											</div>
											<div className="col-sm-6 col-12 mt-sm-0 mt-2">
												<input
													type="text"
													className="form-control mt-3 mt-sm-0"
													id="otherCountry"
													name="country"
													placeholder="Other Country"
													onChange={handleOtherCountryChange}
													value={selectedCountry === '' ? '' : undefined}
													required={!selectedCountry}
												/>
												<input
													type="text"
													className="form-control  mt-2"
													id="otherCity"
													name="city"
													placeholder="Other City"
													onChange={handleOtherCityChange}
													value={selectedCity === '' ? '' : undefined}
													required={!selectedCity}
													disabled={!countryInput}
												/>
											</div>
										</div>
									</div>
									<div className="col-12">
										<label htmlFor="destination" className="mb-2 mt-4">
											Destination
										</label>
										<Select
											name="destination"
											id="destination"
											options={[
												{
													label: 'Philippines',
													options: philippines.map((dest) => ({
														value: `${dest}, Philippines`,
														label: dest,
													})),
												},

												{
													label: 'India',
													options: india.map((dest) => ({
														value: `${dest}, India`,
														label: dest,
													})),
												},

												{
													label: 'Japan',
													options: japan.map((dest) => ({
														value: `${dest}, Japan`,
														label: dest,
													})),
												},

												{
													label: 'UAE',
													options: uae.map((dest) => ({
														value: `${dest}, UAE`,
														label: dest,
													})),
												},

												{
													label: 'Thailand',
													options: thailand.map((dest) => ({
														value: `${dest}, Thailand`,
														label: dest,
													})),
												},

												{
													label: 'South Korea',
													options: korea.map((dest) => ({
														value: `${dest}, South Korea`,
														label: dest,
													})),
												},

												{
													label: 'Australia',
													options: australia.map((dest) => ({
														value: `${dest}, Australia`,
														label: dest,
													})),
												},
												// Add more options for other countries here...
												{
													label: 'Other Destinations',
													options: otherDestination.map((dest) => ({
														value: dest,
														label: dest,
													})),
												},
											]}
											value={selectedDestination}
											onChange={(selectedOption) =>
												setSelectedDestination(selectedOption)
											}
											className="select-component"
											placeholder="Select Destination"
											isSearchable
											required
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="row mb-4">
							<p className="mb-2">Date of travel</p>
							<div className="form-group col-6">
								<label htmlFor="startDate" className="mb-2 date">
									<i>From</i>
								</label>
								<br />

								<DatePicker
									name="startDate"
									className="form-control"
									selected={selectedStartDate}
									onChange={handleStartDateChange}
									minDate={new Date()}
									placeholderText="Start"
									onKeyDown={(e) => {
										e.preventDefault();
									}}
									required
								/>
							</div>
							<div className="form-group col-6">
								<label htmlFor="endDate" className="mb-2 date">
									<i>To</i>
								</label>
								<br />

								<DatePicker
									name="endDate"
									className="form-control"
									selected={selectedEndDate}
									onChange={handleEndDateChange}
									minDate={selectedStartDate ? selectedStartDate : new Date()}
									placeholderText="End"
									onKeyDown={(e) => {
										e.preventDefault();
									}}
									required
								/>
							</div>
						</div>
						<div className="row mb-4">
							<div className="form-group col-md-6">
								<label htmlFor="peopleNumber" className="mb-2">
									Number of people traveling
								</label>
								<input
									type="number"
									className="form-control"
									id="peopleNumber"
									name="peopleNumber"
									placeholder="Number of people traveling"
									required
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="travelPreference" className="mb-2 mt-md-0 mt-4">
									Travel preference
								</label>

								<Select
									name="travelPreference"
									id="travelPreference"
									className="select-component"
									aria-label="Travel Preference"
									options={travelPreferenceOptions}
									value={selectedTravelPreference}
									onChange={(selectedOption) =>
										setSelectedTravelPreference(selectedOption)
									}
									placeholder="Select Travel Preference"
									required
								/>
							</div>
						</div>
						<div className="row mb-4">
							<p>Group or private travel experience?</p>
							<div className="form-group col-sm-4 col-12 fw-light">
								<div className="custom-control custom-radio">
									<input
										type="radio"
										id="group"
										name="members"
										value="Group"
										className="custom-control-input"
										required
									/>
									<label className="custom-control-label mx-2" htmlFor="group">
										Group
									</label>
								</div>
							</div>
							<div className="form-group col-sm-4 col-12 fw-light">
								<div className="custom-control custom-radio">
									<input
										type="radio"
										id="private"
										name="members"
										value="Private"
										className="custom-control-input"
										required
									/>
									<label
										className="custom-control-label mx-2"
										htmlFor="private"
									>
										Private
									</label>
								</div>
							</div>
							<div className="form-group col-sm-4 col-12 fw-light">
								<div className="custom-control custom-radio">
									<input
										type="radio"
										id="joiner"
										name="members"
										value="Joiner"
										className="custom-control-input"
										required
									/>
									<label className="custom-control-label mx-2" htmlFor="joiner">
										Joiner
									</label>
								</div>
							</div>
						</div>
						<div className="row mb-4">
							<div className="form-group col">
								<label htmlFor="message" className="mb-2">
									Message
								</label>
								<textarea
									className="form-control"
									id="message"
									name="message"
									rows="5"
									placeholder="Your message (Optional)"
								></textarea>
							</div>
						</div>

						<button
							className="btn text-white btn-styled fw-medium"
							type="submit"
						>
							Send Inquiry
						</button>
					</div>

					<div className="col-lg-4 mt-lg-0 mt-4 quick-links p-4 ">
						<h6>Quick Links</h6>
						<a href={Accounts.email} target="_blank">
							Email us directly
						</a>
						<a href={Accounts.whatsapp} target="_blank">
							Send a message via Whatsapp
						</a>
						<a href="tel: +639426526092" className="contact-number-booking">
							+63 942 652 6092
						</a>
					</div>
				</div>
			</div>
		</form>
	);
}
