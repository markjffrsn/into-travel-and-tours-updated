import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Hongkong() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/hongkong.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="container">
						<h1>Hongkong</h1>
						<p>
							A captivating blend of Eastern heritage and Western influences,
							creating an exhilarating and culturally rich metropolis.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Hongkong
						</h2>

						{/* Hongkong */}
						<div className="row mt-lg-5 mt-4" id="hongkong" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.hongkong1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.hongkong1}
													alt="Disneyland"
													loading="lazy"
												/>
											</a>
											<a href={Images.hongkong2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.hongkong2}
													alt="Hongkong Street"
													loading="lazy"
												/>
											</a>

											<a href={Images.hongkong3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.hongkong3}
													alt="Disneyland"
													loading="lazy"
												/>
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
													href={Images.hongkong1}
													className="carousel-item active"
												>
													<img
														src={Images.hongkong1}
														alt="Disneyland"
														loading="lazy"
													/>
												</a>

												<a href={Images.hongkong2} className="carousel-item">
													<img
														src={Images.hongkong2}
														alt="Hongkong Street"
														loading="lazy"
													/>
												</a>

												<a href={Images.hongkong3} className="carousel-item">
													<img
														src={Images.hongkong3}
														alt="Disneyland"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Hongkong</h1>
										<p>
											Hong Kong, a bustling metropolis on the southern coast of
											China, is a dynamic and vibrant tourist destination known
											for its stunning skyline, rich cultural heritage, and
											fusion of Eastern and Western influences. With its
											towering skyscrapers, bustling street markets, and
											culinary delights, Hong Kong offers visitors a unique
											blend of modernity and tradition.{' '}
											<i>
												Here's a description of Hong Kong as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Victoria Harbour:</h4>
											<p>
												{' '}
												One of the world's most iconic harbors, Victoria Harbour
												offers breathtaking panoramic views of Hong Kong's
												skyline. Visitors can take a leisurely stroll along the
												Tsim Sha Tsui Promenade, ride the historic Star Ferry,
												or enjoy the Symphony of Lights, a spectacular
												multimedia light and sound show.
											</p>
											<h4 className="mt-lg-5 mt-4">Victoria Peak:</h4>
											<p>
												Offering a bird's-eye view of the city, Victoria Peak is
												Hong Kong's highest point. Visitors can take the Peak
												Tram, an iconic funicular railway, to the summit and
												enjoy stunning vistas of the city, harbor, and
												surrounding mountains. The Peak also offers dining
												options and hiking trails.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Big Buddha and Po Lin Monastery:
											</h4>
											<p>
												Located on Lantau Island, the Big Buddha (Tian Tan
												Buddha) is a colossal statue that stands as a symbol of
												peace and harmony. Visitors can climb the 268 steps to
												reach the statue and explore the serene Po Lin
												Monastery, known for its exquisite Buddhist
												architecture.
											</p>
											<h4 className="mt-lg-5 mt-4">Central District:</h4>
											<p>
												The bustling Central District is Hong Kong's financial
												and commercial hub. Visitors can experience the energy
												of the city as they explore the vibrant streets, visit
												luxury shopping malls, and dine at world-class
												restaurants. Highlights include the lively Lan Kwai Fong
												nightlife district and the historic Man Mo Temple.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Temple Street Night Market:
											</h4>
											<p>
												A visit to Temple Street Night Market in Kowloon offers
												an authentic Hong Kong shopping experience. Visitors can
												browse through stalls selling everything from clothing
												and accessories to electronics and traditional Chinese
												goods. The market also offers street food stalls and
												fortune tellers.
											</p>
											<h4 className="mt-lg-5 mt-4">Avenue of Stars:</h4>
											<p>
												Located along the Tsim Sha Tsui waterfront, the Avenue
												of Stars pays tribute to Hong Kong's vibrant film
												industry. Visitors can find handprints of local
												celebrities, enjoy stunning views of Victoria Harbour,
												and take photos with the iconic statue of Bruce Lee.
											</p>
											<h4 className="mt-lg-5 mt-4">Wong Tai Sin Temple:</h4>
											<p>
												Known for its richly ornamented architecture, Wong Tai
												Sin Temple is a popular destination for locals and
												tourists seeking good fortune and blessings. Visitors
												can witness traditional rituals, burn incense, and make
												offerings at this colorful and bustling Taoist temple.
											</p>
											<h4 className="mt-lg-5 mt-4"> Ocean Park:</h4>
											<p>
												A world-class marine-themed park, Ocean Park offers a
												mix of thrilling rides, animal exhibits, and live shows.
												Visitors can enjoy roller coasters, visit giant pandas,
												experience interactive marine exhibits, and witness
												stunning dolphin and sea lion performances.
											</p>
											<h4 className="mt-lg-5 mt-4">Hong Kong Disneyland:</h4>
											<p>
												A magical destination for families, Hong Kong Disneyland
												features classic Disney characters, enchanting
												attractions, and captivating live entertainment.
												Visitors can explore themed lands, enjoy thrilling
												rides, meet beloved Disney characters, and watch
												spectacular parades and fireworks.
											</p>
											<h4 className="mt-lg-5 mt-4">Stanley Market:</h4>
											<p>
												Located in the charming seaside town of Stanley, Stanley
												Market is a popular spot for shopping and dining.
												Visitors can browse through stalls selling clothing,
												accessories, souvenirs, and Chinese artwork. The area
												also offers a beautiful beach, waterfront cafes, and
												historical sites.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									Hong Kong's combination of dazzling cityscapes, cultural
									treasures, and world-class attractions make it an exciting and
									diverse tourist destination. Whether you're interested in
									exploring traditional markets, savoring culinary delights, or
									immersing yourself in the city's dynamic atmosphere, Hong Kong
									offers an unforgettable experience for visitors from around
									the world.
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
