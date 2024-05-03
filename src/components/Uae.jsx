import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Icons from './Icons';
import Aos from 'aos';
import Footer from './Footer';

export default function Uae() {
	const location = useLocation();

	// Animate on scroll
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

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

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-2'));
	}, []);

	// Mobile Lightbox
	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile'));
	}, []);

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile-2'));
	}, []);

	return (
		<>
			<main>
				<section
					className="country-section"
					style={{
						background:
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/uae.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="container">
						<h1>UAE</h1>
						<p>
							Be amazed by the futuristic skyline of Dubai, visit iconic
							landmarks like the Burj Khalifa, and enjoy luxurious shopping
							experiences in glamorous malls.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in UAE
						</h2>

						{/* Dubai */}
						<div className="row mt-lg-5 mt-4" id="dubai" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.dubai3} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.dubai3} alt="Dubai" loading="lazy" />
											</a>
											<a href={Images.dubai2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.dubai2} alt="Dubai" loading="lazy" />
											</a>
											<a href={Images.dubai1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.dubai1} alt="Dubai" loading="lazy" />
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
													href={Images.dubai3}
													className="carousel-item active"
												>
													<img src={Images.dubai3} alt="Dubai" loading="lazy" />
												</a>

												<a href={Images.dubai2} className="carousel-item">
													<img src={Images.dubai2} alt="Dubai" loading="lazy" />
												</a>

												<a href={Images.dubai1} className="carousel-item">
													<img src={Images.dubai1} alt="Dubai" loading="lazy" />
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Dubai</h1>
										<p>
											Dubai, a city in the United Arab Emirates, is a dazzling
											and cosmopolitan tourist destination known for its
											futuristic architecture, luxurious shopping, and vibrant
											cultural experiences. The city seamlessly blends
											traditional Middle Eastern charm with modern extravagance,
											offering visitors a wide range of attractions to explore.{' '}
											<i>
												Here's a description of Dubai as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Burj Khalifa:</h4>
											<p>
												Standing tall at 828 meters, the Burj Khalifa is the
												world's tallest building and an iconic symbol of Dubai's
												skyline. Visitors can ascend to the observation deck on
												the 148th floor for breathtaking panoramic views of the
												city, the surrounding desert, and the Arabian Gulf.
											</p>
											<h4 className="mt-lg-5 mt-4">The Dubai Mall:</h4>
											<p>
												Adjacent to the Burj Khalifa, The Dubai Mall is one of
												the world's largest shopping malls, offering a vast
												array of high-end boutiques, luxury brands, and
												entertainment options. It is also home to attractions
												like the Dubai Aquarium & Underwater Zoo and the Dubai
												Fountain, which presents captivating water and light
												shows.
											</p>
											<h4 className="mt-lg-5 mt-4">Palm Jumeirah:</h4>
											<p>
												A man-made island shaped like a palm tree, Palm Jumeirah
												is an engineering marvel and a luxurious residential and
												resort area. Visitors can relax on pristine beaches,
												enjoy water sports, dine in world-class restaurants, or
												explore the Atlantis, The Palm resort and its water
												park, Aquaventure.
											</p>
											<h4 className="mt-lg-5 mt-4">Dubai Marina:</h4>
											<p>
												A waterfront district, Dubai Marina is a vibrant hub of
												modern skyscrapers, luxurious yachts, and stylish
												restaurants and cafes. The Marina Walk offers a scenic
												promenade along the waterfront, perfect for leisurely
												strolls or enjoying al fresco dining with stunning
												views.
											</p>
											<h4 className="mt-lg-5 mt-4">Jumeirah Beach:</h4>
											<p>
												With its golden sands and crystal-clear waters, Jumeirah
												Beach is a popular spot for sunbathing, swimming, and
												water sports. The area also features numerous beachfront
												resorts, beach clubs, and beachfront dining options.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Dubai Creek and Abra Ride:
											</h4>
											<p>
												The historic Dubai Creek divides the city into two
												sections, Deira and Bur Dubai. Visitors can take an abra
												(traditional wooden boat) ride along the creek to
												experience the city's rich heritage, explore the
												bustling souks (markets), and catch glimpses of
												traditional architecture.
											</p>
											<h4 className="mt-lg-5 mt-4">Dubai Desert Safari:</h4>
											<p>
												Experience the Arabian desert by embarking on a
												thrilling desert safari adventure. Visitors can enjoy
												dune bashing in 4x4 vehicles, ride camels, witness
												mesmerizing sunset views, indulge in traditional
												Bedouin-style barbecues, and be entertained by belly
												dancers and other cultural performances.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Dubai Museum and Al Fahidi Fort:
											</h4>
											<p>
												Housed in the Al Fahidi Fort, Dubai Museum offers
												insights into the city's past, showcasing exhibits on
												traditional Bedouin life, pearl diving, and the
												development of Dubai. The fort itself is a historic
												landmark and provides a glimpse into Dubai's early
												defensive structures.
											</p>
											<h4 className="mt-lg-5 mt-4">The Dubai Frame:</h4>
											<p>
												Located in Zabeel Park, the Dubai Frame is a modern
												architectural marvel that offers stunning views of the
												city. Visitors can ascend to the observation deck and
												enjoy panoramic vistas of both the old and new parts of
												Dubai.
											</p>
											<h4 className="mt-lg-5 mt-4">The Dubai Opera:</h4>
											<p>
												A magnificent architectural masterpiece, the Dubai Opera
												is a world-class venue for performing arts. It hosts a
												variety of events, including opera, ballet, classical
												music concerts, theater performances, and contemporary
												shows.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Dubai's combination of modern marvels, luxury experiences,
									cultural heritage, and warm hospitality make it a captivating
									tourist destination. Whether you're interested in shopping,
									fine dining, exploring traditional souks, or immersing
									yourself in the city's vibrant atmosphere, Dubai offers a
									unique and unforgettable experience for travelers from around
									the world.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Abu Dhabi */}
						<div className="row mt-lg-5 mt-4" id="abudhabi" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-2 g-3">
											<a href={Images.abudhabi2} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.abudhabi2}
													alt="Abu Dhabi"
													loading="lazy"
												/>
											</a>
											<a href={Images.abudhabi1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.abudhabi1}
													alt="Abu Dhabi"
													loading="lazy"
												/>
											</a>
											<a href={Images.abudhabi3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.abudhabi3}
													alt="Abu Dhabi"
													loading="lazy"
												/>
											</a>
										</div>
									</div>

									{/* Mobile Image Gallery */}
									<div className="gallery-mobile-container col d-lg-none d-md-block">
										<div
											id="mobile-2-carousel"
											className="carousel slide"
											data-bs-ride="carousel"
										>
											<div className="carousel-indicators">
												<button
													type="button"
													data-bs-target="#mobile-2-carousel"
													className="active"
													aria-current="true"
													data-bs-slide-to="0"
													aria-label="Slide 1"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-2-carousel"
													data-bs-slide-to="1"
													aria-label="Slide 2"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-2-carousel"
													data-bs-slide-to="2"
													aria-label="Slide 3"
												></button>
											</div>
											<div className="carousel-inner lightbox-mobile-2">
												<a
													href={Images.abudhabi2}
													className="carousel-item active"
												>
													<img
														src={Images.abudhabi2}
														alt="Abu Dhabi"
														loading="lazy"
													/>
												</a>

												<a href={Images.abudhabi1} className="carousel-item">
													<img
														src={Images.abudhabi1}
														alt="Abu Dhabi"
														loading="lazy"
													/>
												</a>

												<a href={Images.abudhabi3} className="carousel-item">
													<img
														src={Images.abudhabi3}
														alt="Abu Dhabi"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Abu Dhabi</h1>
										<p>
											Abu Dhabi, the capital city of the United Arab Emirates,
											is a captivating tourist destination that combines rich
											cultural heritage with modern attractions. Known for its
											opulent architecture, pristine beaches, and luxurious
											experiences, Abu Dhabi offers visitors a diverse range of
											attractions to explore.{' '}
											<i>
												Here's a description of Abu Dhabi as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Sheikh Zayed Grand Mosque:
											</h4>
											<p>
												A masterpiece of Islamic architecture, the Sheikh Zayed
												Grand Mosque is a stunning landmark and one of the
												largest mosques in the world. With its intricate design,
												glistening white marble, and captivating interior
												adorned with chandeliers and Persian carpets, the mosque
												is a must-visit attraction that showcases the grandeur
												of Islamic art and culture.
											</p>
											<h4 className="mt-lg-5 mt-4">Louvre Abu Dhabi:</h4>
											<p>
												A cultural landmark, Louvre Abu Dhabi is an art museum
												that features an extensive collection of artworks from
												around the world. Designed by renowned architect Jean
												Nouvel, the museum's unique architecture and diverse
												exhibits make it a hub for art enthusiasts.
											</p>
											<h4 className="mt-lg-5 mt-4">Corniche Beach:</h4>
											<p>
												Stretching along the waterfront, Abu Dhabi's Corniche
												Beach offers pristine white sands, clear turquoise
												waters, and stunning views of the city skyline. Visitors
												can relax, swim, enjoy water sports, or take a leisurely
												stroll along the Corniche promenade, which is lined with
												cafes, restaurants, and play areas.
											</p>
											<h4 className="mt-lg-5 mt-4">Yas Island:</h4>
											<p>
												A vibrant entertainment and leisure destination, Yas
												Island offers a host of attractions for visitors of all
												ages. It is home to Ferrari World Abu Dhabi, the world's
												largest indoor theme park; Yas Waterworld, a thrilling
												water park; and Yas Marina Circuit, which hosts the
												Formula 1 Abu Dhabi Grand Prix. Additionally, Yas Island
												boasts a range of upscale hotels, golf courses, and a
												marina.
											</p>
											<h4 className="mt-lg-5 mt-4">Qasr Al Watan:</h4>
											<p>
												Qasr Al Watan, also known as the Presidential Palace, is
												a majestic palace that serves as a cultural landmark and
												a center for knowledge and learning. Visitors can
												explore the exquisite architecture, wander through the
												vast library, and gain insights into the UAE's
												governance and heritage.
											</p>
											<h4 className="mt-lg-5 mt-4">Emirates Palace:</h4>
											<p>
												A luxurious hotel and a symbol of Arabian hospitality,
												Emirates Palace is renowned for its opulent
												architecture, lavish interiors, and world-class
												facilities. Visitors can enjoy high tea, dine in
												award-winning restaurants, or simply marvel at the
												grandeur of this iconic landmark.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Abu Dhabi Falcon Hospital:
											</h4>
											<p>
												As falconry is deeply rooted in Emirati culture, the Abu
												Dhabi Falcon Hospital offers a unique and educational
												experience. Visitors can learn about the traditions of
												falconry, interact with these majestic birds, and
												witness veterinary treatments.
											</p>
											<h4 className="mt-lg-5 mt-4">Yas Marina:</h4>
											<p>
												A glamorous waterfront district, Yas Marina offers a
												vibrant atmosphere with upscale restaurants, cafes, and
												lounges. Visitors can enjoy waterfront dining, go on
												yacht cruises, or simply soak in the lively ambiance.
											</p>
											<h4 className="mt-lg-5 mt-4">Saadiyat Island:</h4>
											<p>
												Known for its cultural institutions, Saadiyat Island is
												home to the Guggenheim Abu Dhabi, a branch of the famous
												New York museum, as well as the Zayed National Museum
												and the Manarat Al Saadiyat art center. The island also
												boasts beautiful beaches and luxury resorts.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Abu Dhabi Heritage Village:
											</h4>
											<p>
												For a glimpse into Abu Dhabi's past, visitors can
												explore the Abu Dhabi Heritage Village. This
												reconstructed traditional village offers a window into
												Bedouin life, featuring mud-brick houses, artisans
												demonstrating traditional crafts, and exhibits
												showcasing traditional tools and artifacts.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Abu Dhabi's blend of cultural richness, luxurious experiences,
									and breathtaking architecture make it an enticing destination.
									With its world-class attractions, pristine beaches, and warm
									Arabian hospitality, Abu Dhabi offers visitors a unique and
									unforgettable experience in the heart of the United Arab
									Emirates
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
