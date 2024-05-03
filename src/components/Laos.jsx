import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Laos() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/laos.jpg)',
					}}
				>
					<div className="container">
						<h1>Laos</h1>
						<p>
							Experience the tranquil beauty of Luang Prabang, explore ancient
							temples, and embark on a leisurely boat journey along the Mekong
							River.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Laos
						</h2>

						{/* Laos */}
						<div className="row mt-lg-5 mt-4" id="laos" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.laos1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.laos1} alt="Laos" loading="lazy" />
											</a>
											<a href={Images.laos2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.laos2} alt="Laos" loading="lazy" />
											</a>

											<a href={Images.laos3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.laos3} alt="Laos" loading="lazy" />
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
												<a href={Images.laos1} className="carousel-item active">
													<img src={Images.laos1} alt="Laos" loading="lazy" />
												</a>

												<a href={Images.laos2} className="carousel-item">
													<img src={Images.laos2} alt="Laos" loading="lazy" />
												</a>

												<a href={Images.laos3} className="carousel-item">
													<img src={Images.laos3} alt="Laos" loading="lazy" />
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Laos</h1>
										<p>
											Laos, a landlocked country in Southeast Asia, is a hidden
											gem that offers travelers a serene and authentic
											experience. With its lush landscapes, rich cultural
											heritage, and welcoming locals, Laos has become an
											increasingly popular tourist destination. From ancient
											temples and colonial architecture to stunning waterfalls
											and tranquil rivers, Laos offers a peaceful and immersive
											journey for those seeking a slower pace and a glimpse into
											traditional Southeast Asian culture.{' '}
											<i>
												Here's a description of Laos as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Luang Prabang:</h4>
											<p>
												Luang Prabang, a UNESCO World Heritage site, is the
												cultural and spiritual capital of Laos. This charming
												city is known for its well-preserved traditional
												architecture, glistening temples, and a tranquil
												atmosphere. Visitors can witness the morning alms-giving
												ceremony, explore the Royal Palace Museum, visit revered
												temples such as Wat Xieng Thong and Wat Mai, and immerse
												themselves in the city's vibrant night market.
											</p>
											<h4 className="mt-lg-5 mt-4">Kuang Si Falls:</h4>
											<p>
												Located near Luang Prabang, Kuang Si Falls is a stunning
												three-tiered waterfall that cascades into turquoise
												pools. Visitors can swim in the refreshing waters, hike
												along nature trails, and even visit the nearby Tat Kuang
												Si Bear Rescue Centre, where endangered Asiatic black
												bears are rehabilitated.
											</p>
											<h4 className="mt-lg-5 mt-4">Vientiane:</h4>
											<p>
												The capital city of Laos, Vientiane, offers a mix of
												French colonial architecture, temples, and vibrant
												markets. Visitors can explore landmarks such as That
												Luang, the country's most sacred stupa, and Wat Si
												Saket, which houses thousands of Buddha images. They can
												also visit the Patuxai Victory Monument, stroll along
												the Mekong River promenade, and sample delicious Lao
												cuisine.
											</p>
											<h4 className="mt-lg-5 mt-4">Plain of Jars:</h4>
											<p>
												Located in the Xieng Khouang Province, the Plain of Jars
												is an archaeological site shrouded in mystery. It
												features hundreds of enormous stone jars scattered
												across the plains. Visitors can explore the different
												jar sites, learn about their historical and cultural
												significance, and delve into the intriguing legends
												surrounding their origin.
											</p>
											<h4 className="mt-lg-5 mt-4">Vang Vieng:</h4>
											<p>
												Nestled amid stunning limestone karst mountains, Vang
												Vieng offers breathtaking natural scenery and outdoor
												adventures. Visitors can go tubing or kayaking along the
												Nam Song River, explore limestone caves like Tham Chang,
												hike to viewpoints for panoramic vistas, and enjoy hot
												air balloon rides for a unique perspective of the
												landscape.
											</p>
											<h4 className="mt-lg-5 mt-4">Bolaven Plateau:</h4>
											<p>
												The Bolaven Plateau, located in southern Laos, is a
												highland region known for its lush coffee plantations,
												picturesque waterfalls, and ethnic minority villages.
												Visitors can explore the fertile landscapes, visit Tad
												Fane and Tad Yuang waterfalls, experience traditional
												coffee production, and witness the traditional way of
												life of the local communities.
											</p>
											<h4 className="mt-lg-5 mt-4">Mekong River:</h4>
											<p>
												The Mekong River, one of Southeast Asia's major
												waterways, flows through Laos, offering scenic views and
												opportunities for river cruises. Visitors can take boat
												trips along the Mekong, passing by rural villages,
												observing daily life along the riverbanks, and visiting
												the famous Pak Ou Caves, known for housing thousands of
												Buddha statues.
											</p>
											<h4 className="mt-lg-5 mt-4">Champasak and Wat Phou:</h4>
											<p>
												In southern Laos, Champasak is a province known for its
												ancient temples and the UNESCO World Heritage site of
												Wat Phou. This archaeological complex features ruins of
												a Khmer Hindu temple dating back to the 11th century.
												Visitors can explore the temple complex, hike to the
												nearby Phou Asa hill for panoramic views, and experience
												the laid-back riverside atmosphere of Champasak town.
											</p>
											<h4 className="mt-lg-5 mt-4">Nam Ou River:</h4>
											<p>
												The Nam Ou River offers a scenic journey through rural
												landscapes and remote villages. Visitors can take a boat
												trip along the river, passing by dramatic karst cliffs,
												terraced fields, and traditional wooden houses. This
												tranquil journey provides an authentic glimpse into
												local life and the natural beauty of Laos.
											</p>
											<h4 className="mt-lg-5 mt-4">The Bolaven Loop:</h4>
											<p>
												The Bolaven Loop is a popular motorbike route that takes
												travelers through the Bolaven Plateau, offering
												breathtaking scenery, coffee plantations, waterfalls,
												and encounters with ethnic minority villages. Exploring
												this loop allows visitors to experience the charm of
												rural Laos and witness the country's natural and
												cultural diversity.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									Laos' tranquil beauty, rich cultural heritage, and friendly
									atmosphere make it an enchanting destination for travelers
									seeking an authentic Southeast Asian experience. Whether
									you're exploring ancient temples, immersing yourself in the
									lush landscapes, or embarking on adventurous journeys along
									rivers and mountainous terrains, Laos offers a serene and
									unforgettable travel experience.
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
