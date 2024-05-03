import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Taiwan() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/taiwan.jpg)',
					}}
				>
					<div className="container">
						<h1>Taiwan</h1>
						<p>
							Explore the bustling night markets of Taipei, admire the natural
							beauty of Taroko Gorge, and savor the delectable street food
							offerings.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Taiwan
						</h2>

						{/* Taiwan */}
						<div className="row mt-lg-5 mt-4" id="taiwan" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.taiwan1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.taiwan1} alt="Taiwan" loading="lazy" />
											</a>
											<a href={Images.taiwan2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.taiwan2} alt="Taiwan" loading="lazy" />
											</a>

											<a href={Images.taiwan3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.taiwan3} alt="Taiwan" loading="lazy" />
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
													href={Images.taiwan1}
													className="carousel-item active"
												>
													<img
														src={Images.taiwan1}
														alt="Taiwan"
														loading="lazy"
													/>
												</a>

												<a href={Images.taiwan2} className="carousel-item">
													<img
														src={Images.taiwan2}
														alt="Taiwan"
														loading="lazy"
													/>
												</a>

												<a href={Images.taiwan3} className="carousel-item">
													<img
														src={Images.taiwan3}
														alt="Taiwan"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Taiwan</h1>
										<p>
											Taiwan, an island nation located off the southeastern
											coast of China, is a captivating tourist destination that
											offers a vibrant mix of natural wonders, rich cultural
											heritage, and modern cityscapes. From towering mountains
											and stunning coastlines to bustling night markets and
											historic temples, Taiwan provides visitors with a diverse
											range of attractions and experiences.{' '}
											<i>
												Here's a description of Taiwan as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Taipei:</h4>
											<p>
												Taiwan's capital city, Taipei, is a bustling metropolis
												that blends traditional and modern elements. Visitors
												can explore iconic landmarks such as Taipei 101, once
												the tallest building in the world, visit historic sites
												like Longshan Temple and Chiang Kai-shek Memorial Hall,
												and immerse themselves in the vibrant atmosphere of
												night markets like Shilin and Raohe.
											</p>
											<h4 className="mt-lg-5 mt-4">Taroko Gorge:</h4>
											<p>
												Taroko Gorge is a breathtaking natural wonder located in
												Taroko National Park. Visitors can marvel at the
												towering marble cliffs, hike through picturesque trails,
												and cross stunning suspension bridges. Highlights
												include the Eternal Spring Shrine, Swallow Grotto, and
												Baiyang Waterfall.
											</p>
											<h4 className="mt-lg-5 mt-4">Sun Moon Lake:</h4>
											<p>
												Sun Moon Lake is a serene alpine lake nestled in the
												central part of Taiwan. Visitors can take boat tours to
												enjoy the picturesque views, cycle around the lake on
												dedicated paths, visit the iconic Wenwu Temple, and
												experience the local indigenous culture.
											</p>
											<h4 className="mt-lg-5 mt-4">Alishan:</h4>
											<p>
												Alishan is a mountainous region known for its scenic
												beauty, ancient forests, and sunrise views. Visitors can
												take the Alishan Forest Railway, go on hiking trails
												through lush landscapes, visit tea plantations, and
												witness the mesmerizing sea of clouds at sunrise.
											</p>
											<h4 className="mt-lg-5 mt-4">Jiufen:</h4>
											<p>
												Jiufen is a charming town that evokes nostalgia with its
												narrow streets, old tea houses, and stunning hillside
												views. Visitors can explore the lively market, try
												traditional snacks, and soak in the atmosphere that
												inspired the famous animated film "Spirited Away."
											</p>
											<h4 className="mt-lg-5 mt-4">Kenting National Park:</h4>
											<p>
												Located in the southernmost part of Taiwan, Kenting
												National Park offers stunning beaches, rugged cliffs,
												and diverse marine life. Visitors can relax on the
												pristine white sands, go snorkeling or scuba diving,
												hike through scenic trails, and visit the lively night
												market in Kenting town.
											</p>
											<h4 className="mt-lg-5 mt-4">Tainan:</h4>
											<p>
												Tainan, Taiwan's oldest city, is a cultural hub with a
												wealth of historical sites and temples. Visitors can
												explore attractions like Anping Fort, Chihkan Tower, and
												the Confucius Temple, and indulge in the city's renowned
												street food.
											</p>
											<h4 className="mt-lg-5 mt-4">Yushan National Park:</h4>
											<p>
												Yushan National Park is home to Yushan, Taiwan's highest
												peak, offering breathtaking mountain vistas, alpine
												landscapes, and challenging hiking trails. Visitors can
												embark on multi-day treks, soak in hot springs, and
												enjoy the serene beauty of Taiwan's highest mountain.
											</p>
											<h4 className="mt-lg-5 mt-4">Penghu Islands:</h4>
											<p>
												The Penghu Islands, an archipelago in the Taiwan Strait,
												boast stunning beaches, coral reefs, and picturesque
												fishing villages. Visitors can enjoy water activities
												like swimming and snorkeling, explore historical sites
												such as the Penghu Great Bridge, and savor fresh seafood
												delicacies.
											</p>
											<h4 className="mt-lg-5 mt-4">Beitou Hot Springs:</h4>
											<p>
												Located just outside Taipei, Beitou is a popular hot
												spring area known for its therapeutic and relaxing
												waters. Visitors can soak in natural hot springs, visit
												the Beitou Hot Spring Museum, and explore the beautiful
												Beitou Thermal Valley.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									Taiwan's combination of natural landscapes, vibrant cities,
									and cultural heritage makes it an enticing tourist
									destination. Whether you're exploring bustling night markets,
									immersing yourself in tranquil natural wonders, or discovering
									centuries-old temples, Taiwan offers a unique and diverse
									travel experience that will captivate and leave lasting
									memories.
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
