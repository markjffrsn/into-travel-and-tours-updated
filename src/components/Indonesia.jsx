import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Indonesia() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/indonesia.jpg)',
					}}
				>
					<div className="container">
						<h1>Indonesia</h1>
						<p>
							Dive into pristine waters for exceptional snorkeling and diving,
							visit ancient temples like Borobudur, and savor the diverse
							culinary delights.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Indonesia
						</h2>

						{/* Indonesia */}
						<div className="row mt-lg-5 mt-4" id="indonesia" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.indonesia1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.indonesia1}
													alt="Indonesia"
													loading="lazy"
												/>
											</a>
											<a href={Images.indonesia3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.indonesia3}
													alt="Indonesia"
													loading="lazy"
												/>
											</a>

											<a href={Images.indonesia2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.indonesia2}
													alt="Indonesia"
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
													href={Images.indonesia1}
													className="carousel-item active"
												>
													<img
														src={Images.indonesia1}
														alt="Indonesia"
														loading="lazy"
													/>
												</a>

												<a href={Images.indonesia3} className="carousel-item">
													<img
														src={Images.indonesia3}
														alt="Indonesia"
														loading="lazy"
													/>
												</a>

												<a href={Images.indonesia2} className="carousel-item">
													<img
														src={Images.indonesia2}
														alt="Indonesia"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Indonesia</h1>
										<p>
											Indonesia, a vast archipelago in Southeast Asia, is a
											diverse and enchanting tourist destination that offers a
											wealth of natural beauty, cultural heritage, and
											adventure. With its stunning beaches, lush rainforests,
											vibrant cities, and rich cultural traditions, Indonesia
											offers visitors a wide range of experiences.{' '}
											<i>
												Here's a description of Indonesia as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Bali:</h4>
											<p>
												Known as the "Island of the Gods," Bali is one of
												Indonesia's most popular destinations. It offers
												beautiful beaches, lush rice terraces, ancient temples,
												vibrant arts scene, and a rich spiritual and cultural
												heritage. Visitors can relax on stunning beaches like
												Kuta or Seminyak, explore the ancient temples of Uluwatu
												or Tanah Lot, immerse themselves in the traditional arts
												of Ubud, or enjoy water sports and diving in Nusa Dua or
												Amed.
											</p>
											<h4 className="mt-lg-5 mt-4">Jakarta:</h4>
											<p>
												As the capital city of Indonesia, Jakarta is a bustling
												metropolis that offers a mix of modernity and cultural
												heritage. Visitors can explore historic sites like Kota
												Tua (Old Town) with its colonial buildings, visit the
												National Museum to learn about Indonesian history and
												culture, and experience vibrant street food and shopping
												in areas like Jalan Sabang and Jalan Jaksa. The city
												also boasts modern shopping malls, art galleries, and a
												vibrant nightlife.
											</p>
											<h4 className="mt-lg-5 mt-4">Yogyakarta:</h4>
											<p>
												Yogyakarta, often called Jogja, is a cultural hub on the
												island of Java. It is known for its rich Javanese
												traditions, including batik textiles, gamelan music, and
												traditional puppet shows. Visitors can explore the
												UNESCO-listed Borobudur and Prambanan temples, visit the
												Kraton (Sultan's Palace), and browse through the vibrant
												markets for traditional crafts and local delicacies.
											</p>
											<h4 className="mt-lg-5 mt-4">Komodo National Park:</h4>
											<p>
												Located in the eastern part of Indonesia, Komodo
												National Park is a UNESCO World Heritage site and home
												to the famous Komodo dragons, the largest lizards on
												Earth. Visitors can take guided tours to see these
												incredible creatures up close, hike through scenic
												landscapes, and enjoy world-class snorkeling and diving
												in the crystal-clear waters surrounding the islands.
											</p>
											<h4 className="mt-lg-5 mt-4">Raja Ampat Islands:</h4>
											<p>
												Situated in West Papua, the Raja Ampat Islands are a
												paradise for nature lovers and diving enthusiasts. The
												region boasts pristine coral reefs, turquoise waters,
												and a stunning array of marine life. Visitors can
												explore the vibrant underwater world, go island hopping,
												or relax on secluded beaches.
											</p>
											<h4 className="mt-lg-5 mt-4">Tana Toraja:</h4>
											<p>
												Located in the highlands of Sulawesi, Tana Toraja is
												known for its unique cultural practices and elaborate
												funeral ceremonies. Visitors can witness traditional
												village life, visit intricately carved ancestral houses,
												and explore stunning landscapes with terraced rice
												fields and lush hillsides.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Bromo-Tengger-Semeru National Park:{' '}
											</h4>
											<p>
												This national park in East Java is famous for its
												otherworldly landscapes, including the smoking Mount
												Bromo volcano and the vast Tengger Caldera. Visitors can
												hike to Mount Bromo's crater for sunrise views, take a
												jeep tour through the volcanic landscape, and witness
												the annual Kasada festival held by the Tenggerese
												people.
											</p>
											<h4 className="mt-lg-5 mt-4">Ubud:</h4>
											<p>
												Nestled in the heart of Bali, Ubud is a cultural and
												artistic center. It offers a tranquil escape with lush
												greenery, traditional arts and crafts, and a thriving
												yoga and wellness scene. Visitors can explore art
												galleries, visit traditional craft villages like Celuk
												and Mas, and enjoy the serene beauty of the Tegalalang
												Rice Terraces.
											</p>
											<h4 className="mt-lg-5 mt-4">Gili Islands:</h4>
											<p>
												Located off the coast of Lombok, the Gili Islands are a
												popular destination for beach lovers and divers. These
												idyllic islands offer white sandy beaches, crystal-clear
												waters, and vibrant coral reefs teeming with marine
												life. Visitors can relax on the beaches, snorkel or
												dive, and enjoy the laid-back island vibes.
											</p>
											<h4 className="mt-lg-5 mt-4">Lake Toba:</h4>
											<p>
												Situated in North Sumatra, Lake Toba is the largest
												volcanic lake in the world and a popular tourist
												destination. The lake is surrounded by scenic
												landscapes, traditional Batak villages, and hot springs.
												Visitors can relax by the lake, explore Samosir Island,
												and experience the unique Batak culture and cuisine.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									Indonesia's combination of stunning natural landscapes,
									vibrant cultural heritage, and warm hospitality make it a
									captivating tourist destination. Whether you're interested in
									relaxing on beautiful beaches, immersing yourself in local
									traditions, or exploring diverse natural wonders, Indonesia
									offers a rich and diverse experience for travelers from around
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
