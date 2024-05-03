import { Link } from 'react-router-dom';
import Images from './Images';
import Card from './Card';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Aos from 'aos';

export default function CountryList({ id, animationOnScroll }) {
	// Animate on scroll
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const CountryPages = {
		firstPage: (
			<div className="container page-container" id={id}>
				<h2
					className="text-center mt-5 mb-5 fw-light"
					data-aos={animationOnScroll.fadeUp}
				>
					Discover Inclusive City Attractions and Tours
				</h2>
				<div className="row justify-content-center g-lg-5 g-4">
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/philippines" data-aos={animationOnScroll.fadeRight}>
							<Card
								imgSrc={Images.philippines}
								imgAlt="Philippines"
								cardCaption={{
									title: 'Philippines',
									text: 'Beautiful and relaxing nature.',
								}}
								LinkTo="/philippines"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/india" data-aos={animationOnScroll.fadeRight}>
							<Card
								imgSrc={Images.india}
								imgAlt="India"
								cardCaption={{
									title: 'India',
									text: 'Vibrant Cultures and Ancient Mystique.',
								}}
								LinkTo="/india"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/japan" data-aos={animationOnScroll.fadeRight}>
							<Card
								imgSrc={Images.japan}
								imgAlt="Japan"
								cardCaption={{
									title: 'Japan',
									text: 'Traditional Elegance, Modern Marvels.',
								}}
								LinkTo="/japan"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/uae" data-aos={animationOnScroll.fadeRight}>
							<Card
								imgSrc={Images.uae}
								imgAlt="UAE"
								cardCaption={{
									title: 'UAE',
									text: 'Fusion of Opulence and Innovation.',
								}}
								LinkTo="/uae"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/singapore" data-aos={animationOnScroll.fadeRight}>
							<Card
								imgSrc={Images.singapore}
								imgAlt="Singapore"
								cardCaption={{
									title: 'Singapore',
									text: 'Dynamic City-State of Innovation.',
								}}
								LinkTo="/singapore"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/thailand" data-aos={animationOnScroll.fadeRight}>
							<Card
								imgSrc={Images.thailand}
								imgAlt="Thailand"
								cardCaption={{
									title: 'Thailand',
									text: 'Land of Smiles and Serenity.',
								}}
								LinkTo="/thailand"
							/>
						</Link>
					</div>
				</div>
			</div>
		),

		secondPage: (
			<div className="container page-container" id={id}>
				<h2 className="text-center mt-5 mb-5 fw-light">
					Discover Inclusive City Attractions and Tours
				</h2>
				<div className="row justify-content-center g-lg-5 g-4">
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/korea">
							<Card
								imgSrc={Images.korea}
								imgAlt="South Korea"
								cardCaption={{
									title: 'South Korea',
									text: 'Dynamic, Cultural Fusion, Captivating.',
								}}
								LinkTo="/korea"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/australia">
							<Card
								imgSrc={Images.australia}
								imgAlt="Australia"
								cardCaption={{
									title: 'Australia',
									text: "Nature's Playground Down Under.",
								}}
								LinkTo="/australia"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/hongkong">
							<Card
								imgSrc={Images.hongkong}
								imgAlt="Hongkong"
								cardCaption={{
									title: 'Hongkong',
									text: 'Sensational fusion of East meets West.',
								}}
								LinkTo="/hongkong"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/cambodia">
							<Card
								imgSrc={Images.cambodia}
								imgAlt="Cambodia"
								cardCaption={{
									title: 'Cambodia',
									text: 'Temples and cultural wonders.',
								}}
								LinkTo="/cambodia"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/vietnam">
							<Card
								imgSrc={Images.vietnam}
								imgAlt="Vietnam"
								cardCaption={{
									title: 'Vietnam',
									text: 'Charm in every corner.',
								}}
								LinkTo="/vietnam"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/malaysia">
							<Card
								imgSrc={Images.malaysia}
								imgAlt="Malaysia"
								cardCaption={{
									title: 'Malaysia',
									text: 'Cultural fusion, natural beauty.',
								}}
								LinkTo="/malaysia"
							/>
						</Link>
					</div>
				</div>
			</div>
		),

		thirdPage: (
			<div className="container page-container" id={id}>
				<h2 className="text-center mt-5 mb-5 fw-light">
					Discover Inclusive City Attractions and Tours
				</h2>
				<div className="row justify-content-center g-lg-5 g-4">
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/indonesia">
							<Card
								imgSrc={Images.indo}
								imgAlt="Indonesia"
								cardCaption={{
									title: 'Indonesia',
									text: 'Tropical paradise, diverse wonders.',
								}}
								LinkTo="/indonesia"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/china">
							<Card
								imgSrc={Images.china}
								imgAlt="China"
								cardCaption={{
									title: 'China',
									text: 'Ancient traditions, modern marvels.',
								}}
								LinkTo="/china"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/macau">
							<Card
								imgSrc={Images.macau}
								imgAlt="Macau"
								cardCaption={{
									title: 'Macau',
									text: 'Fusion of cultures, dazzling allure.',
								}}
								LinkTo="/macau"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/maldives">
							<Card
								imgSrc={Images.maldives}
								imgAlt="Maldives"
								cardCaption={{
									title: 'Maldives',
									text: 'Paradise islands, crystal-clear waters.',
								}}
								LinkTo="/maldives"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/newzealand">
							<Card
								imgSrc={Images.newzealand}
								imgAlt="Newzealand"
								cardCaption={{
									title: 'Newzealand',
									text: 'Adventure in breathtaking landscapes.',
								}}
								LinkTo="/newzealand"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/laos">
							<Card
								imgSrc={Images.laos}
								imgAlt="Laos"
								cardCaption={{
									title: 'Laos',
									text: 'Serenity, spirituality, hidden natural gems.',
								}}
								LinkTo="/laos"
							/>
						</Link>
					</div>
				</div>
			</div>
		),

		fourthPage: (
			<div className="container page-container" id={id}>
				<h2 className="text-center mt-5 mb-5 fw-light">
					Discover Inclusive City Attractions and Tours
				</h2>
				<div className="row justify-content-center g-lg-5 g-4">
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/iceland">
							<Card
								imgSrc={Images.iceland}
								imgAlt="Iceland"
								cardCaption={{
									title: 'Iceland',
									text: "Nature's masterpiece, fire and ice.",
								}}
								LinkTo="/iceland"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/myanmar">
							<Card
								imgSrc={Images.myanmmar}
								imgAlt="Myanmmar"
								cardCaption={{
									title: 'Myanmar',
									text: 'Golden pagodas, rich heritage.',
								}}
								LinkTo="/myanmar"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
						<Link to="/brunei">
							<Card
								imgSrc={Images.brunie}
								imgAlt="Brunei"
								cardCaption={{
									title: 'Brunei',
									text: 'Majestic kingdom, natural splendor.',
								}}
								LinkTo="/brunei"
							/>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center order-md-1 ">
						<Link to="/taiwan">
							<Card
								imgSrc={Images.taiwan}
								imgAlt="Taiwan"
								cardCaption={{
									title: 'Taiwan',
									text: 'Tradition and innovation harmonize.',
								}}
								LinkTo="/taiwan"
							/>
						</Link>
					</div>
				</div>
			</div>
		),
	};

	let content;
	if (currentPage === 1) {
		content = <>{CountryPages.firstPage}</>;
	} else if (currentPage === 2) {
		content = <>{CountryPages.secondPage}</>;
	} else if (currentPage === 3) {
		content = <>{CountryPages.thirdPage}</>;
	} else if (currentPage === 4) {
		content = <>{CountryPages.fourthPage}</>;
	}

	return (
		<>
			<section className="card-lists pt-4 pb-5">
				{content}
				<Pagination currentPage={currentPage} onPageChange={handlePageChange} />
			</section>
		</>
	);
}
