import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Icons from './Icons';
import Aos from 'aos';
import Footer from './Footer';

export default function Japan() {
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

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-3'));
	}, []);

	// Mobile Lightbox
	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile'));
	}, []);

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile-2'));
	}, []);

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile-3'));
	}, []);

	return (
		<>
			<main>
				<section
					className="country-section"
					style={{
						background:
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/japan.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="container">
						<h1>Japan</h1>
						<p>
							Discover a harmonious blend of tradition and modernity, savor
							delicious sushi and ramen, and witness the stunning cherry
							blossoms in spring.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in Japan
						</h2>

						{/* Tokyo */}
						<div className="row mt-lg-5 mt-4" id="tokyo" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.tokyo1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.tokyo1} alt="Tokyo" loading="lazy" />
											</a>
											<a href={Images.tokyo2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.tokyo2} alt="Tokyo" loading="lazy" />
											</a>
											<a href={Images.tokyo3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.tokyo3} alt="Tokyo" loading="lazy" />
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
													href={Images.tokyo1}
													className="carousel-item active"
												>
													<img src={Images.tokyo1} alt="Tokyo" loading="lazy" />
												</a>

												<a href={Images.tokyo2} className="carousel-item">
													<img src={Images.tokyo2} alt="Tokyo" loading="lazy" />
												</a>

												<a href={Images.tokyo3} className="carousel-item">
													<img src={Images.tokyo3} alt="Tokyo" loading="lazy" />
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Tokyo</h1>
										<p>
											Tokyo, the capital city of Japan, is a vibrant and diverse
											tourist destination that offers a plethora of major
											attractions to explore. From ancient temples and
											traditional gardens to modern landmarks and bustling city
											streets, Tokyo has something for everyone.{' '}
											<i>
												Here's a description of Tokyo as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Senso-ji Temple:</h4>
											<p>
												Located in the historic Asakusa district, Senso-ji is
												Tokyo's oldest and most famous Buddhist temple. Visitors
												can pass through the impressive Thunder Gate and explore
												the bustling Nakamise Shopping Street before reaching
												the temple. The ornate architecture, vibrant atmosphere,
												and opportunity to experience traditional Japanese
												culture make it a must-visit attraction.
											</p>
											<h4 className="mt-lg-5 mt-4">Tokyo Skytree:</h4>
											<p>
												Soaring high above the city, the Tokyo Skytree is an
												iconic landmark that offers breathtaking panoramic views
												of Tokyo. With observation decks at 350 and 450 meters,
												visitors can marvel at the city's sprawling skyline and
												enjoy the spectacular vistas, especially during sunset
												or at night when the city is illuminated.
											</p>
											<h4 className="mt-lg-5 mt-4">Meiji Shrine:</h4>
											<p>
												Nestled in a serene forested area in the heart of Tokyo,
												Meiji Shrine is a tranquil oasis that pays tribute to
												Emperor Meiji and Empress Shoken. Visitors can walk
												through the impressive torii gate, explore the peaceful
												gardens, and witness traditional Shinto ceremonies if
												timed right. It offers a serene escape from the hustle
												and bustle of the city.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Tsukiji Fish Market and Sushi:
											</h4>
											<p>
												A visit to the bustling Tsukiji Fish Market is a must
												for seafood lovers. Witness the frenetic energy as
												vendors sell a variety of fresh fish, shellfish, and
												other marine delicacies. Don't miss the chance to savor
												mouthwatering sushi at one of the nearby sushi
												restaurants known for their exceptional quality and
												flavors.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Shinjuku Gyoen National Garden:
											</h4>
											<p>
												One of Tokyo's most beautiful parks, Shinjuku Gyoen
												offers a peaceful retreat amidst the urban landscape.
												The expansive gardens showcase a variety of landscapes,
												including Japanese, French, and English gardens, as well
												as a traditional tea house. It's the perfect spot to
												relax, enjoy a picnic, or admire the cherry blossoms
												during springtime.
											</p>
											<h4 className="mt-lg-5 mt-4">Shibuya Crossing:</h4>
											<p>
												One of the world's busiest intersections, Shibuya
												Crossing is a must-see attraction that epitomizes
												Tokyo's energy and excitement. As the traffic lights
												turn red, pedestrians flood the intersection from all
												directions, creating a mesmerizing sight. Visitors can
												also explore the vibrant neighborhood of Shibuya with
												its trendy shops, restaurants, and entertainment venues.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Harajuku and Takeshita Street:
											</h4>
											<p>
												Harajuku is a vibrant district renowned for its unique
												fashion, quirky street style, and vibrant youth culture.
												Takeshita Street, the heart of Harajuku, is lined with
												trendy boutiques, colorful shops, and crepe stands. It's
												a hub for fashion enthusiasts, cosplayers, and those
												seeking the latest trends and unique shopping
												experiences.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Tokyo Disneyland and DisneySea:
											</h4>
											<p>
												For family-friendly fun and magical experiences, Tokyo
												Disneyland and Tokyo DisneySea are not to be missed.
												These world-class theme parks offer enchanting
												attractions, thrilling rides, captivating shows, and
												opportunities to meet beloved Disney characters. Immerse
												yourself in the magical atmosphere and create lasting
												memories.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									These major attractions are just a glimpse of what Tokyo has
									to offer. The city is also known for its vibrant nightlife,
									Michelin-starred dining, traditional tea ceremonies, sumo
									wrestling tournaments, art museums, and much more. Tokyo's
									combination of ancient traditions, modern marvels, culinary
									delights, and unique cultural experiences make it a
									captivating and unforgettable destination for travelers from
									around the world.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Osaka */}
						<div className="row mt-lg-5 mt-4" id="osaka" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-2 g-3">
											<a href={Images.osaka2} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.osaka2} alt="Osaka" loading="lazy" />
											</a>
											<a href={Images.osaka1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.osaka1} alt="Osaka" loading="lazy" />
											</a>
											<a href={Images.osaka3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.osaka3} alt="Osaka" loading="lazy" />
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
													href={Images.osaka2}
													className="carousel-item active"
												>
													<img src={Images.osaka2} alt="Osaka" loading="lazy" />
												</a>

												<a href={Images.osaka1} className="carousel-item">
													<img src={Images.osaka1} alt="Osaka" loading="lazy" />
												</a>

												<a href={Images.osaka3} className="carousel-item">
													<img src={Images.osaka3} alt="Osaka" loading="lazy" />
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Osaka</h1>
										<p>
											Osaka, a bustling city in Japan, is a vibrant and lively
											tourist destination that offers a mix of modern
											attractions, historic sites, delicious street food, and
											vibrant nightlife. Known for its friendly locals and
											vibrant atmosphere, Osaka is often referred to as the
											"Kitchen of Japan" and is famous for its culinary
											delights.{' '}
											<i>
												Here's a description of Osaka as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Osaka Castle:</h4>
											<p>
												A symbol of the city, Osaka Castle is a magnificent
												fortress that dates back to the 16th century. Its
												impressive architecture, beautiful gardens, and
												historical exhibitions make it a must-visit attraction.
												From the castle's observation deck, visitors can enjoy
												panoramic views of the city skyline.
											</p>
											<h4 className="mt-lg-5 mt-4">Dotonbori:</h4>
											<p>
												Located in the heart of Osaka, Dotonbori is a bustling
												street known for its neon lights, lively atmosphere, and
												mouthwatering street food. This vibrant entertainment
												district offers a wide range of restaurants, bars, and
												shops. Don't miss the iconic Glico Running Man sign and
												try local specialties like takoyaki (octopus balls) and
												okonomiyaki (savory pancakes).
											</p>
											<h4 className="mt-lg-5 mt-4">Universal Studios Japan:</h4>
											<p>
												Universal Studios Japan: A world-class theme park,
												Universal Studios Japan (USJ) offers thrilling rides,
												live entertainment shows, and attractions based on
												popular movies and characters. Visitors can immerse
												themselves in the worlds of Harry Potter, Jurassic Park,
												and many more. USJ is a fantastic destination for
												families and entertainment enthusiasts.
											</p>
											<h4 className="mt-lg-5 mt-4">Osaka Aquarium Kaiyukan:</h4>
											<p>
												One of the largest aquariums in the world, Osaka
												Aquarium Kaiyukan showcases an impressive variety of
												marine life. Visitors can explore different habitats,
												walk through an enormous tank surrounded by sharks and
												rays, and observe adorable penguins. It's a captivating
												experience for all ages.
											</p>
											<h4 className="mt-lg-5 mt-4">Shitennoji Temple:</h4>
											<p>
												As one of the oldest temples in Japan, Shitennoji Temple
												holds great historical and cultural significance. The
												temple complex features stunning pagodas, beautiful
												gardens, and various Buddhist statues. Visitors can soak
												in the serene atmosphere and learn about the temple's
												rich history.
											</p>
											<h4 className="mt-lg-5 mt-4">Shinsekai:</h4>
											<p>
												Located in southern Osaka, Shinsekai is a vibrant
												neighborhood that combines nostalgic charm with a lively
												atmosphere. The area is known for its Tsutenkaku Tower,
												which offers panoramic views of the city, as well as an
												array of restaurants serving local delicacies like
												kushikatsu (deep-fried skewers) and fugu (blowfish).
											</p>
											<h4 className="mt-lg-5 mt-4">Osaka Museum of History:</h4>
											<p>
												Situated near Osaka Castle, the Osaka Museum of History
												provides a fascinating journey through the city's past.
												Exhibits showcase the development of Osaka from ancient
												times to the present, offering insights into its
												culture, traditions, and historical events.
											</p>
											<h4 className="mt-lg-5 mt-4">Umeda Sky Building:</h4>
											<p>
												This unique architectural landmark offers a stunning
												observation deck known as the "Floating Garden
												Observatory." Visitors can enjoy breathtaking panoramic
												views of Osaka's skyline, especially at sunset or in the
												evening when the city lights up.
											</p>
											<h4 className="mt-lg-5 mt-4">Sumiyoshi Taisha:</h4>
											<p>
												A prominent Shinto shrine, Sumiyoshi Taisha is known for
												its distinctive architectural style and beautiful
												natural surroundings. The shrine's vermilion-colored
												structures, serene atmosphere, and picturesque bridge
												make it a popular destination for locals and visitors
												seeking spiritual solace.
											</p>
											<h4 className="mt-lg-5 mt-4">Osaka Bay Area:</h4>
											<p>
												This waterfront area offers a range of attractions,
												including the Tempozan Ferris Wheel, which provides
												sweeping views of Osaka Bay. The area also houses the
												iconic Osaka Aquarium Kaiyukan and the Legoland
												Discovery Center, making it a great spot for
												family-friendly fun.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Osaka's blend of history, culinary delights, modern
									attractions, and vibrant neighborhoods make it an exciting and
									diverse tourist destination. With its friendly locals,
									bustling street life, and mouthwatering food scene, Osaka
									offers a unique and memorable experience for travelers.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Narita */}
						<div className="row mt-lg-5 mt-4" id="narita" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-3 g-3">
											<a href={Images.narita1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.narita1} alt="Narita" loading="lazy" />
											</a>
											<a href={Images.narita2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.narita2} alt="Narita" loading="lazy" />
											</a>
											<a href={Images.narita3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.narita3} alt="Narita" loading="lazy" />
											</a>
										</div>
									</div>

									{/* Mobile Image Gallery */}
									<div className="gallery-mobile-container col d-lg-none d-md-block">
										<div
											id="mobile-3-carousel"
											className="carousel slide"
											data-bs-ride="carousel"
										>
											<div className="carousel-indicators">
												<button
													type="button"
													data-bs-target="#mobile-3-carousel"
													className="active"
													aria-current="true"
													data-bs-slide-to="0"
													aria-label="Slide 1"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-3-carousel"
													data-bs-slide-to="1"
													aria-label="Slide 2"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-3-carousel"
													data-bs-slide-to="2"
													aria-label="Slide 3"
												></button>
											</div>
											<div className="carousel-inner lightbox-mobile-3">
												<a
													href={Images.narita1}
													className="carousel-item active"
												>
													<img
														src={Images.narita1}
														alt="Narita"
														loading="lazy"
													/>
												</a>

												<a href={Images.narita2} className="carousel-item">
													<img
														src={Images.narita2}
														alt="Narita"
														loading="lazy"
													/>
												</a>

												<a href={Images.narita3} className="carousel-item">
													<img
														src={Images.narita3}
														alt="Narita"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Narita</h1>
										<p>
											Narita, a city located in Chiba Prefecture, Japan, is
											primarily known for being home to Narita International
											Airport, one of the busiest airports in the country. While
											many travelers pass through Narita on their way to Tokyo
											or other destinations, the city itself has several major
											tourist attractions that are worth exploring.{' '}
											<i>
												Here's a description of Narita as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Naritasan Shinshoji Temple:
											</h4>
											<p>
												The Naritasan Shinshoji Temple is a prominent Buddhist
												temple complex and the main attraction in Narita. This
												historic temple dates back over a thousand years and is
												dedicated to the Buddhist deity Fudo Myoo. Visitors can
												explore the beautifully landscaped gardens, admire the
												intricate architecture, and experience Buddhist rituals
												and ceremonies.
											</p>
											<h4 className="mt-lg-5 mt-4">Omotesando Street:</h4>
											<p>
												Omotesando Street is a charming pedestrian street lined
												with traditional wooden buildings, shops, and
												restaurants. It leads to the Naritasan Shinshoji Temple
												and offers a delightful atmosphere for a leisurely
												stroll. The street is known for its souvenir shops,
												where visitors can find unique traditional crafts and
												local products.
											</p>
											<h4 className="mt-lg-5 mt-4">Narita-san Park:</h4>
											<p>
												Adjacent to the Naritasan Shinshoji Temple, Narita-san
												Park is a serene and peaceful oasis with beautiful
												gardens and ponds. It's an ideal place to relax, enjoy a
												picnic, or take a peaceful walk amidst nature. The park
												is particularly stunning during the cherry blossom
												season when the trees are in full bloom.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Narita Omotenashi Center:
											</h4>
											<p>
												The Narita Omotenashi Center is a tourist information
												center that provides visitors with information about the
												city and its attractions. It also offers cultural
												experiences and workshops where visitors can learn about
												traditional Japanese arts and crafts.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Narita Museum of Calligraphy:
											</h4>
											<p>
												Located near the Narita-san Park, the Narita Museum of
												Calligraphy showcases a vast collection of calligraphy
												works from various artists. It provides insights into
												the rich tradition of Japanese calligraphy and offers a
												unique cultural experience for art enthusiasts.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Boso No Mura Open-Air Museum:
											</h4>
											<p>
												Situated just outside Narita, the Boso No Mura Open-Air
												Museum is a living history museum that showcases
												traditional Japanese architecture and crafts. Visitors
												can explore reconstructed historical buildings,
												participate in workshops, and learn about the daily life
												and culture of Japan's past.
											</p>
											<h4 className="mt-lg-5 mt-4">Aeon Mall Narita:</h4>
											<p>
												Aeon Mall Narita is a large shopping complex located
												near Narita Airport. It offers a wide range of shops,
												including international brands, restaurants, and
												entertainment options. It's a convenient place for
												travelers to do some last-minute shopping or enjoy a
												meal before their flight.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									While Narita is primarily known as an airport city, it offers
									a glimpse into traditional Japanese culture, serene temple
									gardens, and opportunities to explore local crafts and
									history. Whether you have a layover or a short stay in Narita,
									these major attractions provide a taste of the city's charm
									and cultural heritage.
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
