import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Icons from './Icons';
import Aos from 'aos';
import Footer from './Footer';

export default function Australia() {
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

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-4'));
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

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile-4'));
	}, []);

	return (
		<>
			<main>
				<section
					className="country-section"
					style={{
						background:
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/australia.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="container">
						<h1>Australia</h1>
						<p>
							Marvel at the stunning landscapes of the Great Barrier Reef and
							Uluru, explore vibrant cities like Sydney and Melbourne, and
							embrace the outdoor lifestyle.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in Australia
						</h2>

						{/* Sydney */}
						<div className="row mt-lg-5 mt-4" id="sydney" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.sydney1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.sydney1} alt="Sydney" loading="lazy" />
											</a>
											<a href={Images.sydney2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.sydney2} alt="Sydney" loading="lazy" />
											</a>
											<a href={Images.sydney3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.sydney3} alt="Sydney" loading="lazy" />
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
													href={Images.sydney1}
													className="carousel-item active"
												>
													<img
														src={Images.sydney1}
														alt="Sydney"
														loading="lazy"
													/>
												</a>

												<a href={Images.sydney2} className="carousel-item">
													<img
														src={Images.sydney2}
														alt="Sydney"
														loading="lazy"
													/>
												</a>

												<a href={Images.sydney3} className="carousel-item">
													<img
														src={Images.sydney3}
														alt="Sydney"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Sydney</h1>
										<p>
											Sydney, the capital city of New South Wales, Australia, is
											a vibrant and iconic tourist destination renowned for its
											stunning natural landscapes, iconic landmarks, and vibrant
											cultural scene. With its beautiful beaches, world-class
											dining, and a plethora of attractions, Sydney offers a
											diverse range of experiences for visitors.{' '}
											<i>
												Here's a description of Sydney as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Sydney Opera House:</h4>
											<p>
												{' '}
												One of the most recognizable architectural masterpieces
												in the world, the Sydney Opera House is a UNESCO World
												Heritage site. Visitors can take a guided tour to
												explore the stunning interior, watch a performance at
												one of its renowned venues, or simply admire the iconic
												sails from outside.
											</p>
											<h4 className="mt-lg-5 mt-4">Sydney Harbour Bridge:</h4>
											<p>
												Known as "The Coathanger," the Sydney Harbour Bridge is
												an iconic landmark that offers breathtaking views of the
												city and the harbor. Adventurous visitors can climb the
												bridge's arches with BridgeClimb for a unique and
												exhilarating experience.
											</p>
											<h4 className="mt-lg-5 mt-4">Bondi Beach:</h4>
											<p>
												As one of Sydney's most famous beaches, Bondi Beach
												attracts locals and visitors alike. With its golden
												sands, sparkling blue waters, and vibrant surf culture,
												it's a great place to relax, swim, or learn to surf. The
												beachside cafes and restaurants offer delicious food and
												a lively atmosphere.
											</p>
											<h4 className="mt-lg-5 mt-4">The Rocks:</h4>
											<p>
												Located in the heart of Sydney, The Rocks is a historic
												neighborhood that showcases the city's colonial past.
												Cobblestone streets, heritage buildings, and lively
												markets make it a delightful place to explore. Visitors
												can immerse themselves in the area's rich history, shop
												for unique souvenirs, and dine at charming restaurants
												and pubs.
											</p>
											<h4 className="mt-lg-5 mt-4">Taronga Zoo:</h4>
											<p>
												Situated on the shores of Sydney Harbour, Taronga Zoo is
												home to a diverse range of wildlife species from around
												the world. Visitors can see koalas, kangaroos, giraffes,
												and many other animals while enjoying stunning views of
												the city skyline.
											</p>
											<h4 className="mt-lg-5 mt-4">Royal Botanic Garden:</h4>
											<p>
												Adjacent to the Sydney Opera House, the Royal Botanic
												Garden offers a peaceful escape from the bustling city.
												Visitors can stroll through beautifully landscaped
												gardens, enjoy picnic spots, and explore the garden's
												diverse flora and fauna.
											</p>
											<h4 className="mt-lg-5 mt-4">Darling Harbour:</h4>
											<p>
												A bustling waterfront precinct, Darling Harbour is
												packed with entertainment options. Visitors can visit
												SEA LIFE Sydney Aquarium, Madame Tussauds, or the
												Australian National Maritime Museum. The harbor also
												offers scenic walks, waterfront dining, and regular
												fireworks displays.
											</p>
											<h4 className="mt-lg-5 mt-4">Sydney Tower Eye:</h4>
											<p>
												Soaring above the city, the Sydney Tower Eye provides
												panoramic views of Sydney and its surroundings. Visitors
												can step onto the observation deck and enjoy stunning
												360-degree views, learn about the city's landmarks
												through interactive displays, or dine at the revolving
												360 Bar and Dining.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Art Gallery of New South Wales:
											</h4>
											<p>
												Art enthusiasts will appreciate the extensive collection
												of Australian and international artworks at the Art
												Gallery of New South Wales. The gallery hosts a diverse
												range of exhibitions and houses an impressive collection
												of indigenous art.
											</p>
											<h4 className="mt-lg-5 mt-4">Blue Mountains:</h4>
											<p>
												Located just outside Sydney, the Blue Mountains offer
												breathtaking natural beauty, including rugged cliffs,
												deep valleys, and cascading waterfalls. Visitors can
												take scenic hikes, ride the Scenic Railway, or visit the
												famous Three Sisters rock formation.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Sydney's combination of iconic landmarks, stunning natural
									beauty, and vibrant cultural scene make it an exciting and
									diverse tourist destination. Whether you're interested in
									exploring the city's history, lounging on beautiful beaches,
									or immersing yourself in its artistic and culinary offerings,
									Sydney has something for everyone.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Adelaide */}
						<div className="row mt-lg-5 mt-4" id="adelaide" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-2 g-3">
											<a href={Images.adelaide1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.adelaide1}
													alt="Adelaide"
													loading="lazy"
												/>
											</a>
											<a href={Images.adelaide2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.adelaide2}
													alt="Adelaide"
													loading="lazy"
												/>
											</a>
											<a href={Images.adelaide3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.adelaide3}
													alt="Adelaide"
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
													href={Images.adelaide1}
													className="carousel-item active"
												>
													<img src={Images.adelaide1} alt="Adelaide" />
												</a>

												<a href={Images.adelaide2} className="carousel-item">
													<img src={Images.adelaide2} alt="Adelaide" />
												</a>

												<a href={Images.adelaide3} className="carousel-item">
													<img src={Images.adelaide3} alt="Adelaide" />
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Adelaide</h1>
										<p>
											Adelaide, the capital city of South Australia, is a
											charming and vibrant tourist destination known for its
											elegant architecture, vibrant arts scene, and renowned
											wine regions. With its relaxed atmosphere, beautiful
											parklands, and a wealth of cultural attractions, Adelaide
											offers visitors a diverse range of experiences.{' '}
											<i>
												Here's a description of Adelaide as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Adelaide Botanic Garden:</h4>
											<p>
												Located in the heart of the city, the Adelaide Botanic
												Garden is a tranquil oasis spanning 50 hectares.
												Visitors can explore beautifully landscaped gardens,
												including the stunning Bicentennial Conservatory, the
												Palm House, and the National Rose Trial Garden.
											</p>
											<h4 className="mt-lg-5 mt-4">Adelaide Central Market:</h4>
											<p>
												The Adelaide Central Market is a bustling food market
												that has been operating for over 150 years. Visitors can
												wander through the vibrant stalls, sample fresh produce,
												gourmet goods, and indulge in diverse culinary delights
												from around the world.
											</p>
											<h4 className="mt-lg-5 mt-4">Glenelg Beach:</h4>
											<p>
												Situated just a short tram ride from the city center,
												Glenelg Beach is a popular coastal destination. Visitors
												can relax on the sandy shores, swim in the turquoise
												waters, enjoy water sports, or stroll along Jetty Road,
												lined with cafes, shops, and restaurants.
											</p>
											<h4 className="mt-lg-5 mt-4">Adelaide Oval:</h4>
											<p>
												As one of Australia's most picturesque sporting grounds,
												Adelaide Oval is not only a venue for cricket and
												Australian rules football but also offers immersive
												stadium tours. Visitors can explore the historic
												stadium, learn about its sporting heritage, and enjoy
												breathtaking views from the roof climb experience.
											</p>
											<h4 className="mt-lg-5 mt-4">Adelaide Hills:</h4>
											<p>
												Just a short drive from the city, the Adelaide Hills
												region offers picturesque landscapes, charming towns,
												and award-winning wineries. Visitors can enjoy wine
												tastings, sample local produce, visit historic villages
												like Hahndorf, and immerse themselves in the natural
												beauty of the area.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Art Gallery of South Australia:
											</h4>
											<p>
												Located in the cultural precinct of North Terrace, the
												Art Gallery of South Australia showcases a diverse
												collection of Australian and international art. Visitors
												can admire works from renowned artists and explore
												temporary exhibitions in a beautifully designed gallery
												space.
											</p>
											<h4 className="mt-lg-5 mt-4">Adelaide Zoo:</h4>
											<p>
												Boasting a wide range of animal species, including the
												beloved giant pandas, Adelaide Zoo provides a fun and
												educational experience for visitors of all ages. The zoo
												focuses on conservation efforts and offers interactive
												experiences, such as feeding experiences and
												behind-the-scenes tours.
											</p>
											<h4 className="mt-lg-5 mt-4">South Australian Museum:</h4>
											<p>
												Situated near the Adelaide Botanic Garden, the South
												Australian Museum houses extensive collections on
												natural history, Aboriginal culture, and Pacific
												cultures. Visitors can learn about the region's
												indigenous heritage, explore ancient fossils, and view
												artifacts from various cultures.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Haigh's Chocolate Factory:
											</h4>
											<p>
												Chocolate lovers shouldn't miss a visit to Haigh's
												Chocolate Factory, Australia's oldest family-owned
												chocolate maker. Visitors can take guided tours of the
												factory, learn about the chocolate-making process, and,
												of course, sample delicious chocolates.
											</p>
											<h4 className="mt-lg-5 mt-4">Barossa Valley:</h4>
											<p>
												Located just outside Adelaide, the Barossa Valley is one
												of Australia's premier wine regions, renowned for its
												world-class wineries, vineyards, and cellar doors.
												Visitors can indulge in wine tastings, savor gourmet
												food, and take in the scenic beauty of the rolling
												vineyards.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Adelaide's blend of cultural attractions, stunning natural
									surroundings, and culinary experiences make it an enticing
									tourist destination. Whether you're interested in exploring
									art and culture, immersing yourself in nature, or indulging in
									gastronomic delights, Adelaide offers a delightful and
									memorable experience for all visitors
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Perth */}
						<div className="row mt-lg-5 mt-4" id="perth" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-3 g-3">
											<a href={Images.perth1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.perth1} alt="Perth" loading="lazy" />
											</a>
											<a href={Images.perth2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.perth2} alt="Perth" loading="lazy" />
											</a>
											<a href={Images.perth3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.perth3} alt="Perth" loading="lazy" />
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
											<div className="carousel-inner lightbox-mobile-3">
												<a
													href={Images.perth1}
													className="carousel-item active"
												>
													<img src={Images.perth1} alt="Perth" loading="lazy" />
												</a>

												<a href={Images.perth2} className="carousel-item">
													<img src={Images.perth2} alt="Perth" loading="lazy" />
												</a>

												<a href={Images.perth3} className="carousel-item">
													<img src={Images.perth3} alt="Perth" loading="lazy" />
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Perth</h1>
										<p>
											Perth, the capital city of Western Australia, is a vibrant
											and diverse tourist destination that combines stunning
											natural landscapes, a thriving arts scene, and a laid-back
											coastal lifestyle. With its pristine beaches, world-class
											culinary experiences, and a wealth of cultural
											attractions, Perth offers visitors a unique blend of urban
											sophistication and natural beauty.{' '}
											<i>
												Here's a description of Perth as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Kings Park and Botanic Garden:
											</h4>
											<p>
												Situated on the outskirts of the city center, Kings Park
												is one of the largest inner-city parks in the world. It
												offers sweeping views of the Perth skyline, beautiful
												gardens, walking trails, picnic areas, and the Western
												Australian Botanic Garden, which showcases the state's
												unique flora.
											</p>
											<h4 className="mt-lg-5 mt-4">Elizabeth Quay:</h4>
											<p>
												Located on the banks of the Swan River, Elizabeth Quay
												is a bustling waterfront precinct that has become a hub
												of entertainment, dining, and cultural experiences.
												Visitors can take a leisurely stroll along the
												promenade, enjoy waterfront dining, and admire iconic
												landmarks like the Bell Tower and the Spanda sculpture.
											</p>
											<h4 className="mt-lg-5 mt-4">Cottesloe Beach:</h4>
											<p>
												Known for its crystal-clear waters and golden sands,
												Cottesloe Beach is one of Perth's most popular coastal
												spots. Visitors can relax on the beach, swim in the
												Indian Ocean, enjoy beachfront cafes and restaurants, or
												catch the stunning sunset views.
											</p>
											<h4 className="mt-lg-5 mt-4">Fremantle:</h4>
											<p>
												Just a short distance from Perth, the historic port city
												of Fremantle is a must-visit destination. Known for its
												well-preserved 19th-century architecture, lively
												markets, and vibrant arts scene, Fremantle offers a
												unique blend of maritime history, bohemian charm, and
												delicious seafood.
											</p>
											<h4 className="mt-lg-5 mt-4">Perth Cultural Centre:</h4>
											<p>
												Situated in the heart of the city, the Perth Cultural
												Centre is a vibrant hub of arts and culture. It houses
												the Art Gallery of Western Australia, the Western
												Australian Museum, the State Library of Western
												Australia, and the Perth Institute of Contemporary Arts.
												Visitors can immerse themselves in the state's cultural
												heritage and explore contemporary art and exhibitions.
											</p>
											<h4 className="mt-lg-5 mt-4">Rottnest Island:</h4>
											<p>
												A short ferry ride from Perth, Rottnest Island is a
												natural paradise known for its crystal-clear waters,
												pristine beaches, and unique wildlife, including the
												famous quokkas. Visitors can relax on the beaches, go
												snorkeling or diving, hire bicycles to explore the
												island, and enjoy the relaxed island atmosphere.
											</p>
											<h4 className="mt-lg-5 mt-4">Swan Valley:</h4>
											<p>
												Located just a short drive from Perth, Swan Valley is
												Western Australia's oldest wine region. Visitors can
												explore world-class wineries, indulge in wine tastings
												and cellar door experiences, sample gourmet produce, and
												enjoy scenic vineyard landscapes.
											</p>
											<h4 className="mt-lg-5 mt-4">Perth Mint:</h4>
											<p>
												History buffs and coin enthusiasts will enjoy a visit to
												the Perth Mint, one of the oldest mints in operation.
												Visitors can learn about the history of gold mining in
												Western Australia, see the world's largest gold coin,
												and even witness the pouring of molten gold.
											</p>
											<h4 className="mt-lg-5 mt-4">Perth Zoo:</h4>
											<p>
												Situated near the city center, Perth Zoo is home to a
												wide variety of animals from around the world. Visitors
												can explore the zoo's exhibits, including the Asian
												Rainforest, African Savannah, and Australian Bushwalk,
												and learn about conservation efforts and wildlife
												preservation.
											</p>
											<h4 className="mt-lg-5 mt-4">Scarborough Beach:</h4>
											<p>
												A popular destination for beach lovers, Scarborough
												Beach offers a vibrant coastal atmosphere with its sandy
												shores, surf breaks, and beachfront dining options.
												Visitors can swim, surf, enjoy beachside cafes, and take
												in the stunning ocean views.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Perth's combination of natural beauty, cultural attractions,
									and a relaxed lifestyle make it an enticing tourist
									destination. Whether you're interested in exploring the city's
									vibrant arts scene, relaxing on pristine beaches, or immersing
									yourself in Western Australia's rich history and natural
									wonders, Perth offers a delightful and memorable experience
									for all visitors
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Melbourne */}
						<div className="row mt-lg-5 mt-4" id="melbourne" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-4 g-3">
											<a href={Images.melbourne1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.melbourne1}
													alt="Melbourne"
													loading="lazy"
												/>
											</a>
											<a href={Images.melbourne2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.melbourne2}
													alt="Melbourne"
													loading="lazy"
												/>
											</a>
											<a href={Images.melbourne3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.melbourne3}
													alt="Melbourne"
													loading="lazy"
												/>
											</a>
										</div>
									</div>

									{/* Mobile Image Gallery */}
									<div className="gallery-mobile-container col d-lg-none d-md-block">
										<div
											id="mobile-4-carousel"
											className="carousel slide"
											data-bs-ride="carousel"
										>
											<div className="carousel-indicators">
												<button
													type="button"
													data-bs-target="#mobile-4-carousel"
													className="active"
													aria-current="true"
													data-bs-slide-to="0"
													aria-label="Slide 1"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-4-carousel"
													data-bs-slide-to="1"
													aria-label="Slide 2"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-4-carousel"
													data-bs-slide-to="2"
													aria-label="Slide 3"
												></button>
											</div>
											<div className="carousel-inner lightbox-mobile-4">
												<a
													href={Images.melbourne1}
													className="carousel-item active"
												>
													<img
														src={Images.melbourne1}
														alt="Melbourne"
														loading="lazy"
													/>
												</a>

												<a href={Images.melbourne2} className="carousel-item">
													<img
														src={Images.melbourne2}
														alt="Melbourne"
														loading="lazy"
													/>
												</a>

												<a href={Images.melbourne3} className="carousel-item">
													<img
														src={Images.melbourne3}
														alt="Melbourne"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Melbourne</h1>
										<p>
											Melbourne, the cultural capital of Australia, is a vibrant
											and cosmopolitan city renowned for its thriving arts
											scene, diverse culinary offerings, and distinctive blend
											of old-world charm and modern architecture. With its
											eclectic neighborhoods, beautiful parks, and a rich
											cultural heritage, Melbourne offers visitors a wealth of
											experiences.{' '}
											<i>
												Here's a description of Melbourne as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Federation Square:</h4>
											<p>
												Located in the heart of the city, Federation Square is a
												bustling cultural precinct that serves as a meeting
												place and a hub for arts and entertainment. Visitors can
												explore galleries, enjoy live performances, and relax in
												outdoor spaces while taking in the unique architectural
												design.
											</p>
											<h4 className="mt-lg-5 mt-4">Queen Victoria Market:</h4>
											<p>
												As one of the largest open-air markets in the Southern
												Hemisphere, Queen Victoria Market is a must-visit
												destination for food lovers and bargain hunters.
												Visitors can sample fresh produce, indulge in delicious
												street food, shop for clothing, crafts, and souvenirs,
												and immerse themselves in the vibrant atmosphere.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Melbourne Cricket Ground (MCG):
											</h4>
											<p>
												Known as the spiritual home of Australian sport, the MCG
												is a hallowed ground for cricket and Australian rules
												football. Visitors can take guided tours to learn about
												the venue's rich sporting history or catch a live match
												or concert if the timing is right.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Royal Botanic Gardens Victoria:
											</h4>
											<p>
												Situated near the city center, the Royal Botanic Gardens
												offer a serene escape from the bustling urban
												environment. Visitors can explore beautifully landscaped
												gardens, admire rare plant species, picnic on the lawns,
												and enjoy stunning views of the city skyline.
											</p>
											<h4 className="mt-lg-5 mt-4">
												National Gallery of Victoria (NGV):
											</h4>
											<p>
												As the oldest public art museum in Australia, the NGV
												houses a vast collection of artworks from around the
												world. Visitors can appreciate a wide range of art
												styles, from traditional to contemporary, and explore
												temporary exhibitions and installations.
											</p>
											<h4 className="mt-lg-5 mt-4">Melbourne laneways:</h4>
											<p>
												Melbourne's laneways are a testament to the city's
												vibrant street art culture and hidden gems. Visitors can
												wander through Hosier Lane, AC/DC Lane, and many others
												to discover colorful murals, graffiti art, quirky cafes,
												and boutique shops.
											</p>
											<h4 className="mt-lg-5 mt-4">Southbank Promenade:</h4>
											<p>
												Stretching along the southern bank of the Yarra River,
												Southbank Promenade is a lively waterfront precinct.
												Visitors can enjoy riverside dining, catch a performance
												at the Arts Centre Melbourne, or simply take a leisurely
												stroll while enjoying panoramic views of the cityscape.
											</p>
											<h4 className="mt-lg-5 mt-4">St Kilda Beach:</h4>
											<p>
												Located just a few kilometers from the city center, St
												Kilda Beach is a popular destination for locals and
												tourists alike. Visitors can relax on the sandy shores,
												enjoy water sports, visit Luna Park amusement park, or
												indulge in the vibrant cafe and bar scene along Acland
												Street.
											</p>
											<h4 className="mt-lg-5 mt-4">Melbourne Museum:</h4>
											<p>
												Situated in Carlton Gardens, the Melbourne Museum
												showcases a diverse range of exhibits covering natural
												history, indigenous culture, science, and technology.
												Visitors can explore interactive displays, learn about
												Australia's unique flora and fauna, and discover the
												rich history of the region.
											</p>
											<h4 className="mt-lg-5 mt-4">Great Ocean Road:</h4>
											<p>
												While not within Melbourne itself, the Great Ocean Road
												is a must-see attraction that can be easily accessed
												from the city. This scenic coastal drive offers
												breathtaking views of dramatic cliffs, pristine beaches,
												and the iconic Twelve Apostles rock formations.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Melbourne's combination of cultural diversity, culinary
									delights, and artistic flair make it an enchanting tourist
									destination. Whether you're interested in exploring art and
									culture, indulging in delicious cuisine, or immersing yourself
									in the city's vibrant atmosphere, Melbourne offers a
									captivating and memorable experience for all visitors.
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
