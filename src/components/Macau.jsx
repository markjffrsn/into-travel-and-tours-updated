import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Macau() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/macau.jpg)',
					}}
				>
					<div className="container">
						<h1>Macau</h1>
						<p>
							Try your luck at world-class casinos, experience the blend of
							Chinese and Portuguese cultures, and indulge in delicious Macanese
							cuisine.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Macau
						</h2>

						{/* Macau */}
						<div className="row mt-lg-5 mt-4" id="macau" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.macau1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.macau1} alt="Macau" loading="lazy" />
											</a>
											<a href={Images.macau2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.macau2} alt="Macau" loading="lazy" />
											</a>

											<a href={Images.macau3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.macau3} alt="Macau" loading="lazy" />
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
													href={Images.macau1}
													className="carousel-item active"
												>
													<img src={Images.macau1} alt="Macau" loading="lazy" />
												</a>

												<a href={Images.macau2} className="carousel-item">
													<img src={Images.macau2} alt="Macau" loading="lazy" />
												</a>

												<a href={Images.macau3} className="carousel-item">
													<img src={Images.macau3} alt="Macau" loading="lazy" />
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Macau</h1>
										<p>
											Macau, a special administrative region of China, is a
											unique tourist destination renowned for its vibrant blend
											of Chinese and Portuguese cultures, extravagant resorts,
											and world-class entertainment. From its iconic casinos to
											its rich history and fascinating fusion of East and West,
											Macau offers visitors an exciting and diverse range of
											experiences.{' '}
											<i>
												Here's a description of Macau as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												The Historic Center of Macau:
											</h4>
											<p>
												A UNESCO World Heritage site, the Historic Center of
												Macau is a captivating blend of Chinese and Portuguese
												influences. Visitors can explore the winding streets of
												the old town, visit iconic landmarks such as the Ruins
												of St. Paul's, the Senado Square, and the A-Ma Temple,
												and admire the unique blend of architectural styles.
											</p>
											<h4 className="mt-lg-5 mt-4">The Macau Tower:</h4>
											<p>
												Standing at an impressive height of 338 meters, the
												Macau Tower is a must-visit attraction for panoramic
												views of the city and thrilling activities. Visitors can
												enjoy breathtaking views from the observation decks,
												experience the adrenaline-pumping Skywalk or Skyjump, or
												dine in the revolving restaurant with stunning
												cityscapes.
											</p>
											<h4 className="mt-lg-5 mt-4">The Cotai Strip:</h4>
											<p>
												Known as the "Las Vegas of the East," the Cotai Strip is
												home to extravagant resort complexes, luxury hotels, and
												world-class casinos. Visitors can try their luck at the
												gaming tables, watch breathtaking shows and
												performances, indulge in fine dining experiences, and
												enjoy the vibrant nightlife.
											</p>
											<h4 className="mt-lg-5 mt-4">The Venetian Macao:</h4>
											<p>
												One of the most iconic resorts on the Cotai Strip, The
												Venetian Macao is a sprawling complex that replicates
												the charm of Venice, Italy. Visitors can take a gondola
												ride along the canals, shop at the Grand Canal Shoppes,
												admire the stunning architecture, and enjoy various
												entertainment options.
											</p>
											<h4 className="mt-lg-5 mt-4">Macau's Casinos:</h4>
											<p>
												Macau is renowned for its glamorous casinos that rival
												those of Las Vegas. Visitors can try their luck at
												famous establishments such as the MGM Macau, Wynn Macau,
												Galaxy Macau, and Sands Macao. The casinos offer a wide
												range of gaming options, entertainment shows, and
												luxurious amenities.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Coloane Village and Hac Sa Beach:
											</h4>
											<p>
												Located on the southern part of Macau, Coloane Village
												offers a charming and laid-back atmosphere with its
												traditional houses, winding streets, and peaceful
												ambiance. Visitors can explore the village's temples,
												enjoy authentic Portuguese cuisine, and relax on Hac Sa
												Beach, known for its black sand.
											</p>
											<h4 className="mt-lg-5 mt-4">Macau Museum:</h4>
											<p>
												Housed in the historic Mount Fortress, the Macau Museum
												offers a comprehensive insight into the region's
												history, culture, and traditions. Visitors can explore
												the informative exhibits, learn about Macau's colonial
												past, and discover artifacts that showcase the unique
												blend of Chinese and Portuguese heritage.
											</p>
											<h4 className="mt-lg-5 mt-4">Taipa Village:</h4>
											<p>
												Taipa Village is a charming neighborhood that provides a
												glimpse into Macau's past. Visitors can stroll through
												its narrow streets lined with colonial buildings, sample
												traditional Macanese cuisine, and visit heritage sites
												like the Taipa Houses Museum and the Tin Hau Temple.
											</p>
											<h4 className="mt-lg-5 mt-4">Macau Grand Prix:</h4>
											<p>
												For motorsport enthusiasts, the Macau Grand Prix is a
												thrilling event that takes place annually on the streets
												of Macau. Visitors can witness high-speed races
												featuring Formula 3 cars, superbikes, and touring cars,
												attracting top drivers and teams from around the world.
											</p>
											<h4 className="mt-lg-5 mt-4">Macanese Cuisine:</h4>
											<p>
												Macau is known for its delectable culinary scene,
												blending Chinese and Portuguese flavors. Visitors can
												indulge in iconic dishes such as Portuguese egg tarts,
												African chicken, Macanese-style codfish, and enjoy a
												wide range of dining options from street food stalls to
												Michelin-starred restaurants.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									Macau's blend of vibrant entertainment, rich history, and
									unique cultural fusion make it an enticing tourist
									destination. Whether you're exploring the historic streets,
									trying your luck at the casinos, enjoying world-class
									entertainment, or savoring the diverse culinary delights,
									Macau offers a captivating and unforgettable experience for
									visitors seeking excitement and cultural immersion.
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
