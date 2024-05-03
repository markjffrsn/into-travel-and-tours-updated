import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Singapore() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/singapore.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="container">
						<h1>Singapore</h1>
						<p>
							Delight in the clean and efficient city, indulge in world-class
							dining experiences, and stroll through the picturesque Gardens by
							the Bay.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Singapore
						</h2>

						{/* Singapore */}
						<div className="row mt-lg-5 mt-4" id="singapore" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.singapore3} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.singapore3}
													alt="Singapore"
													loading="lazy"
												/>
											</a>
											<a href={Images.singapore2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.singapore2}
													alt="Singapore"
													loading="lazy"
												/>
											</a>

											<a href={Images.singapore1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.singapore1}
													alt="Singapore"
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
													href={Images.singapore3}
													className="carousel-item active"
												>
													<img
														src={Images.singapore3}
														alt="Singapore"
														loading="lazy"
													/>
												</a>

												<a href={Images.singapore2} className="carousel-item">
													<img
														src={Images.singapore2}
														alt="Singapore"
														loading="lazy"
													/>
												</a>

												<a href={Images.singapore1} className="carousel-item">
													<img
														src={Images.singapore1}
														alt="Singapore"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Singapore</h1>
										<p>
											Singapore, a captivating city-state in Southeast Asia, is
											an extraordinary tourist destination that offers a
											plethora of major attractions to explore and enjoy. From
											awe-inspiring modern marvels to cultural enclaves and
											natural wonders, Singapore has something for everyone.{' '}
											<i>
												Here's a description of Singapore's major tourist
												attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Marina Bay Sands:</h4>
											<p>
												This iconic integrated resort is a symbol of Singapore's
												modernity. Its unique architecture, featuring three
												towering hotel towers connected by a massive sky park,
												offers breathtaking views of the city. Visitors can
												enjoy the world's largest rooftop infinity pool, luxury
												shopping, a vibrant casino, and exquisite dining
												options.
											</p>
											<h4 className="mt-lg-5 mt-4">Gardens by the Bay:</h4>
											<p>
												A must-visit attraction, Gardens by the Bay is a
												dazzling horticultural wonderland. The Supertrees,
												vertical gardens measuring up to 50 meters, are a
												highlight, especially during the Garden Rhapsody light
												and sound show. The Flower Dome and Cloud Forest, two
												giant conservatories, showcase a remarkable collection
												of plants and provide immersive experiences.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Universal Studios Singapore:
											</h4>
											<p>
												Located on Sentosa Island, Universal Studios Singapore
												is a thrilling theme park that offers entertainment for
												all ages. With a range of exciting rides, shows, and
												attractions inspired by popular movies and TV shows,
												such as Jurassic Park, Transformers, and Shrek, visitors
												can immerse themselves in a world of fun and adventure.
											</p>
											<h4 className="mt-lg-5 mt-4">Chinatown:</h4>
											<p>
												Singapore's vibrant Chinatown is a bustling neighborhood
												where visitors can soak in the rich Chinese heritage.
												Explore colorful streets lined with traditional
												shophouses, visit the Buddha Tooth Relic Temple and
												Museum, and savor delectable Chinese cuisine at hawker
												stalls and renowned restaurants.
											</p>
											<h4 className="mt-lg-5 mt-4">Little India:</h4>
											<p>
												Step into the lively enclave of Little India, where the
												vibrant sights, sounds, and aromas create a captivating
												atmosphere. Admire the intricate designs of Sri
												Veeramakaliamman Temple, shop for traditional Indian
												clothing and spices, and indulge in authentic Indian
												cuisine at the local eateries.
											</p>
											<h4 className="mt-lg-5 mt-4">Sentosa Island:</h4>
											<p>
												A resort island located just off the coast of Singapore,
												Sentosa offers a wide range of attractions and
												activities. From beautiful beaches like Siloso Beach to
												adventure parks like Adventure Cove Waterpark and Mega
												Adventure Park, visitors can enjoy thrilling
												experiences, cable car rides, nature walks, and exciting
												entertainment options.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Singapore Zoo and Night Safari:
											</h4>
											<p>
												Located in the lush Mandai Rainforest, the Singapore Zoo
												is renowned for its immersive and ethical animal
												habitats. Visitors can get up close to a diverse range
												of wildlife. The adjacent Night Safari offers a unique
												experience to explore the nocturnal animal kingdom with
												guided tram rides and walking trails.
											</p>
											<h4 className="mt-lg-5 mt-4">Orchard Road:</h4>
											<p>
												For shopping enthusiasts, Orchard Road is a paradise.
												This bustling street is lined with numerous shopping
												malls, high-end boutiques, and flagship stores, offering
												a wide range of fashion, electronics, and luxury brands.
												It's a shopper's haven with something for every taste
												and budget.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									These major attractions are just a glimpse of what Singapore
									has to offer. From cultural neighborhoods to futuristic
									landmarks, nature reserves to culinary delights, Singapore is
									a dynamic and captivating destination that never fails to
									mesmerize visitors with its blend of modernity, heritage, and
									natural beauty.
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
