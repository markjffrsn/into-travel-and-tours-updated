import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Brunei() {
	const location = useLocation();

	// Animate on scroll
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	// Auto scroll
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

	// Lightgallery
	useEffect(() => {
		lightGallery(document.querySelector('.lightbox'));
	}, []);

	// Mobile Lightbox
	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile'));
	}, []);

	return (
		<>
			<main>
				<section
					className="country-section"
					style={{
						background:
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/brunie.jpg)',
					}}
				>
					<div className="container">
						<h1>Brunei</h1>
						<p>
							Experience the opulent royal heritage, explore the magnificent
							Sultan Omar Ali Saifuddien Mosque, and enjoy the serenity of the
							Kampong Ayer water village.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Brunei
						</h2>

						{/* Brunei */}
						<div className="row mt-lg-5 mt-4" id="brunei" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.brunie3} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.brunie3} alt="Brunei" loading="lazy" />
											</a>
											<a href={Images.brunie1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.brunie1} alt="Brunei" loading="lazy" />
											</a>

											<a href={Images.brunie2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.brunie2} alt="Brunei" loading="lazy" />
											</a>
										</div>
									</div>

									{/* Mobile Image Gallery */}
									<div className="gallery-mobile-container col d-lg-none d-md-block">
										<div
											id="mobile-1-carousel"
											className="carousel slide"
											data-bs-ride="carousel"
										>
											<div className="carousel-indicators">
												<button
													type="button"
													data-bs-target="#mobile-1-carousel"
													className="active"
													aria-current="true"
													data-bs-slide-to="0"
													aria-label="Slide 1"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-1-carousel"
													data-bs-slide-to="1"
													aria-label="Slide 2"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-1-carousel"
													data-bs-slide-to="2"
													aria-label="Slide 3"
												></button>
											</div>
											<div className="carousel-inner lightbox-mobile">
												<a
													href={Images.brunie3}
													className="carousel-item active"
												>
													<img
														src={Images.brunie3}
														alt="Brunei"
														loading="lazy"
													/>
												</a>

												<a href={Images.brunie1} className="carousel-item">
													<img
														src={Images.brunie1}
														alt="Brunei"
														loading="lazy"
													/>
												</a>

												<a href={Images.brunie2} className="carousel-item">
													<img
														src={Images.brunie2}
														alt="Brunei"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Brunei</h1>
										<p>
											Brunei, a small sovereign state located on the island of
											Borneo in Southeast Asia, offers visitors a unique blend
											of rich Islamic culture, natural beauty, and architectural
											marvels. Despite its small size, Brunei boasts a range of
											attractions that showcase its cultural heritage, pristine
											rainforests, and ornate Islamic architecture.{' '}
											<i>
												Here's a description of Brunei as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Sultan Omar Ali Saifuddien Mosque:
											</h4>
											<p>
												One of Brunei's most iconic landmarks, the Sultan Omar
												Ali Saifuddien Mosque is a magnificent architectural
												masterpiece. Its golden dome, intricate carvings, and
												serene surroundings make it a must-visit attraction.
												Visitors can explore the mosque's interior, admire the
												lush gardens, and enjoy panoramic views from the
												mosque's viewing gallery.
											</p>
											<h4 className="mt-lg-5 mt-4">Kampong Ayer:</h4>
											<p>
												Known as the "Venice of the East," Kampong Ayer is a
												traditional water village built on stilts along the
												Brunei River. Visitors can take a boat tour through the
												network of wooden houses, visit local homes, and
												experience the unique way of life in this floating
												village.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Ulu Temburong National Park:
											</h4>
											<p>
												Located in the Temburong District, Ulu Temburong
												National Park is a vast protected rainforest that offers
												incredible biodiversity and stunning natural beauty.
												Visitors can go on guided canopy walks, trek through the
												lush jungle trails, witness breathtaking waterfalls, and
												experience longboat rides along pristine rivers.
											</p>
											<h4 className="mt-lg-5 mt-4">Istana Nurul Iman:</h4>
											<p>
												As the official residence of the Sultan of Brunei,
												Istana Nurul Iman is one of the world's largest
												residential palaces. While not open to the public,
												visitors can admire the palace's grandeur from the
												outside and marvel at its opulent architecture and vast
												complex.
											</p>
											<h4 className="mt-lg-5 mt-4">Royal Regalia Museum:</h4>
											<p>
												The Royal Regalia Museum in Bandar Seri Begawan
												showcases the royal collection of Brunei's Sultan. It
												houses a fascinating display of royal regalia, including
												crowns, ceremonial attire, and gifts received from
												various countries. Visitors can learn about Brunei's
												monarchy and its cultural significance.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Tasek Lama Recreational Park:
											</h4>
											<p>
												Situated close to Bandar Seri Begawan, Tasek Lama
												Recreational Park offers a serene retreat within the
												city. Visitors can stroll through lush greenery, enjoy
												scenic views of the surrounding hills, and spot wildlife
												such as monkeys and birds. The park also features
												jogging tracks, picnic areas, and a man-made lake.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Jame'Asr Hassanil Bolkiah Mosque:
											</h4>
											<p>
												This stunning mosque is one of the largest in Southeast
												Asia, known for its exquisite architecture and beautiful
												golden domes. Visitors can explore the mosque's grounds,
												admire its intricate details, and experience the
												peaceful atmosphere.
											</p>
											<h4 className="mt-lg-5 mt-4">Brunei Museum:</h4>
											<p>
												The Brunei Museum provides insights into the history,
												culture, and traditions of Brunei. Visitors can explore
												various exhibits that showcase the country's
												archaeological artifacts, Islamic art, traditional
												costumes, and exhibits on the Sultanate's heritage.
											</p>
											<h4 className="mt-lg-5 mt-4">Seria Oil Field:</h4>
											<p>
												As Brunei is known for its oil reserves, a visit to
												Seria provides a unique opportunity to witness the
												country's oil industry. Visitors can see the oil wells
												and learn about Brunei's significant contribution to the
												petroleum industry.
											</p>
											<h4 className="mt-lg-5 mt-4">Gadong Night Market:</h4>
											<p>
												For a taste of local flavors, visitors can explore the
												Gadong Night Market in Bandar Seri Begawan. This vibrant
												market offers a wide array of street food, local snacks,
												fresh fruits, and handicrafts. It's an excellent place
												to immerse oneself in Brunei's culinary delights and
												experience the bustling evening atmosphere.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									Brunei's blend of cultural treasures, natural wonders, and
									warm hospitality makes it an intriguing destination. Whether
									you're exploring grand mosques, venturing into lush
									rainforests, or immersing yourself in the unique heritage of
									the water village, Brunei offers a distinctive and enriching
									travel experience.
								</h2>
							</div>
						</div>
					</div>
				</section>

				<Booking />
			</main>
			<Footer marginTop="mt-5" />
		</>
	);
}
