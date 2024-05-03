import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Malaysia() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/malaysia.jpg)',
					}}
				>
					<div className="container">
						<h1>Malaysia</h1>
						<p>
							Enjoy the fusion of Malay, Chinese, and Indian cultures, visit the
							iconic Petronas Twin Towers in Kuala Lumpur, and explore lush
							rainforests.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Malaysia
						</h2>

						{/* Malaysia */}
						<div className="row mt-lg-5 mt-4" id="malaysia" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.malaysia2} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.malaysia2}
													alt="Malaysia"
													loading="lazy"
												/>
											</a>
											<a href={Images.malaysia1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.malaysia1}
													alt="Malaysia"
													loading="lazy"
												/>
											</a>

											<a href={Images.malaysia3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.malaysia3}
													alt="Malaysia"
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
													href={Images.malaysia2}
													className="carousel-item active"
												>
													<img
														src={Images.malaysia2}
														alt="Malaysia"
														loading="lazy"
													/>
												</a>

												<a href={Images.malaysia1} className="carousel-item">
													<img
														src={Images.malaysia1}
														alt="Malaysia"
														loading="lazy"
													/>
												</a>

												<a href={Images.malaysia3} className="carousel-item">
													<img
														src={Images.malaysia3}
														alt="Malaysia"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Malaysia</h1>
										<p>
											Malaysia, located in Southeast Asia, is a diverse and
											vibrant tourist destination that offers a blend of natural
											beauty, cultural diversity, and modern attractions. From
											the bustling cityscape of Kuala Lumpur to the pristine
											rainforests of Borneo and the idyllic islands of Langkawi,
											Malaysia offers visitors a wide array of experiences.{' '}
											<i>
												Here's a description of Malaysia as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Kuala Lumpur:</h4>
											<p>
												The capital city of Malaysia, Kuala Lumpur, is a
												bustling metropolis known for its impressive skyline,
												modern architecture, and vibrant street life. Visitors
												can explore iconic landmarks such as the Petronas Twin
												Towers, visit the Batu Caves, wander through colorful
												markets like Central Market, and savor the diverse
												culinary delights of the city.
											</p>
											<h4 className="mt-lg-5 mt-4">Penang:</h4>
											<p>
												Located on the northwest coast of Malaysia, Penang is a
												UNESCO World Heritage site renowned for its rich
												cultural heritage, historic architecture, and vibrant
												street art scene. Visitors can explore the charming
												streets of George Town, sample delicious street food at
												hawker stalls, visit ornate temples and clan houses, and
												relax on beautiful beaches like Batu Ferringhi.
											</p>
											<h4 className="mt-lg-5 mt-4">Langkawi:</h4>
											<p>
												Situated in the Andaman Sea, Langkawi is an archipelago
												of 99 islands known for its pristine beaches, clear
												turquoise waters, and lush rainforests. Visitors can
												relax on stunning beaches like Pantai Cenang, take a
												cable car ride to the top of Mount Mat Cincang for
												panoramic views, and explore the mangrove forests and
												waterfalls.
											</p>
											<h4 className="mt-lg-5 mt-4">Borneo:</h4>
											<p>
												The island of Borneo, shared by Malaysia, Indonesia, and
												Brunei, offers visitors a chance to experience untouched
												rainforests, diverse wildlife, and fascinating
												indigenous cultures. In Malaysian Borneo, visitors can
												explore the Kinabalu National Park, home to Mount
												Kinabalu, go on wildlife safaris in the Sepilok
												Orangutan Rehabilitation Centre, and cruise along the
												Kinabatangan River to spot proboscis monkeys and rare
												bird species.
											</p>
											<h4 className="mt-lg-5 mt-4">Malacca:</h4>
											<p>
												Known for its rich historical and cultural heritage,
												Malacca (Melaka) is a UNESCO World Heritage site that
												showcases a unique blend of Portuguese, Dutch, and
												British influences. Visitors can explore the
												well-preserved colonial buildings of Jonker Street,
												visit historic landmarks like St. Paul's Church and A
												Famosa Fort, and indulge in the city's famous Nyonya
												cuisine.
											</p>
											<h4 className="mt-lg-5 mt-4">Cameron Highlands:</h4>
											<p>
												Located in the Titiwangsa Mountains, the Cameron
												Highlands is a cool and refreshing retreat known for its
												tea plantations, strawberry farms, and lush landscapes.
												Visitors can take scenic walks through the rolling
												hills, visit tea estates like Boh Tea Plantation, and
												immerse themselves in the region's stunning natural
												beauty.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Taman Negara National Park:
											</h4>
											<p>
												Taman Negara is one of the oldest rainforests in the
												world, offering visitors a chance to experience pristine
												wilderness and abundant biodiversity. Visitors can go on
												jungle treks, spot wildlife like monkeys and birds, take
												canopy walks, and experience the local Orang Asli
												culture.
											</p>
											<h4 className="mt-lg-5 mt-4">Perhentian Islands:</h4>
											<p>
												Located on the east coast of Malaysia, the Perhentian
												Islands are a paradise for beach lovers and snorkelers.
												Visitors can relax on white sandy beaches, swim in
												crystal-clear waters, explore vibrant coral reefs
												teeming with marine life, and enjoy the laid-back island
												atmosphere.
											</p>
											<h4 className="mt-lg-5 mt-4">Kota Kinabalu:</h4>
											<p>
												Situated in Sabah, on the island of Borneo, Kota
												Kinabalu is a gateway to the natural wonders of the
												region. Visitors can explore the vibrant waterfront
												area, visit the Kota Kinabalu City Mosque, enjoy fresh
												seafood at the night markets, and embark on adventures
												to Mount Kinabalu or the nearby islands for diving and
												snorkeling.
											</p>
											<h4 className="mt-lg-5 mt-4">Genting Highlands:</h4>
											<p>
												Perched on a mountain peak, Genting Highlands offers a
												unique resort experience with its cool climate,
												entertainment options, and indoor and outdoor theme
												parks. Visitors can enjoy casino gaming, take thrilling
												rides at the theme parks, and admire the panoramic views
												of the surrounding mountains.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									Malaysia's blend of cultural diversity, natural beauty, and
									modern attractions make it an enticing tourist destination.
									Whether you're exploring vibrant cities, immersing yourself in
									nature, indulging in delicious cuisine, or relaxing on
									pristine beaches, Malaysia offers a rich and diverse
									experience for travelers from around the world.
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
