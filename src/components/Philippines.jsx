import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Philippines() {
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
	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-2'));
	}, []);

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-3'));
	}, []);

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-4'));
	}, []);

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-5'));
	}, []);

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-6'));
	}, []);

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-7'));
	}, []);
	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-8'));
	}, []);
	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-9'));
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

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile-5'));
	}, []);

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile-6'));
	}, []);

	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile-7'));
	}, []);
	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile-8'));
	}, []);
	useEffect(() => {
		lightGallery(document.querySelector('.lightbox-mobile-9'));
	}, []);

	return (
		<>
			<main>
				<section
					className="country-section"
					style={{
						background:
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/philippines.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="container">
						<h1>Philippines</h1>
						<p>
							Experience the beauty of white sand beaches, vibrant festivals
							like Sinulog, and the warm hospitality of the Filipino people.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Philippines
						</h2>

						{/* Bohol */}
						<div className="row mt-lg-5 mt-4" id="bohol" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.bohol1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.bohol1} alt="Bohol" loading="lazy" />
											</a>
											<a href={Images.bohol2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.bohol2} alt="Bohol" loading="lazy" />
											</a>

											<a href={Images.bohol3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.bohol3} alt="Bohol" loading="lazy" />
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
													href={Images.bohol1}
													className="carousel-item active"
												>
													<img src={Images.bohol1} alt="Bohol" loading="lazy" />
												</a>

												<a href={Images.bohol2} className="carousel-item">
													<img src={Images.bohol2} alt="Bohol" loading="lazy" />
												</a>

												<a href={Images.bohol3} className="carousel-item">
													<img src={Images.bohol3} alt="Bohol" loading="lazy" />
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Bohol</h1>
										<p>
											Bohol, located in the Philippines, is a captivating
											tourist destination known for its stunning natural beauty,
											historical sites, and unique attractions. This province
											offers a perfect blend of tropical landscapes, pristine
											beaches, lush countryside, and fascinating cultural
											heritage.{' '}
											<i>
												Here's a description of Bohol as a tourist destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Breathtaking Natural Wonders:
											</h4>
											<p>
												{' '}
												Bohol is famous for its iconic attraction, the Chocolate
												Hills. These are a series of more than 1,200 uniformly
												shaped cone-like hills that turn chocolate brown during
												the dry season, creating a mesmerizing sight. Visitors
												can climb one of the hills to enjoy a panoramic view of
												the surrounding countryside. Another natural wonder is
												the Hinagdanan Cave, a mesmerizing underground cave with
												a crystal-clear natural pool that's perfect for swimming
												and exploration.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Pristine Beaches and Islands:
											</h4>
											<p>
												Bohol is home to pristine white sandy beaches and
												crystal-clear waters that are perfect for swimming,
												snorkeling, and diving. Alona Beach in Panglao Island is
												one of the most popular beach destinations, offering a
												vibrant atmosphere with a wide range of resorts,
												restaurants, and water sports activities. Other
												beautiful islands to explore include Balicasag Island
												and Pamilacan Island, which offer rich marine
												biodiversity and opportunities for diving and dolphin
												watching.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Tarsier Conservation Area:
											</h4>
											<p>
												Bohol is renowned for being the habitat of the adorable
												and endangered Philippine Tarsier. Visitors can visit
												the Tarsier Conservation Area in Corella to observe
												these small primates in their natural environment. These
												nocturnal creatures are known for their unique features,
												such as their large round eyes and long fingers, making
												it a must-visit attraction for animal lovers.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Historical and Cultural Sites:
											</h4>
											<p>
												Bohol has a rich history and is dotted with historical
												landmarks and cultural sites. One of the most prominent
												is the Blood Compact Shrine in Tagbilaran City, which
												commemorates the first international treaty of
												friendship between the Spanish explorer Miguel Lopez de
												Legazpi and Datu Sikatuna, a local chieftain. The
												Baclayon Church, one of the oldest stone churches in the
												Philippines, is another significant historical site
												worth visiting.
											</p>
											<h4 className="mt-lg-5 mt-4">
												River Cruises and Adventure Activities:
											</h4>
											<p>
												A popular activity in Bohol is taking a scenic river
												cruise along the Loboc River. Visitors can enjoy a
												relaxing cruise while being entertained by local
												musicians and dancers. For adventure enthusiasts, there
												are options for zip-lining, ATV rides, and
												paddleboarding in different parts of the province,
												providing thrilling experiences amidst the lush
												countryside.
											</p>
											<h4 className="mt-lg-5 mt-4">Delicious Cuisine:</h4>
											<p>
												Bohol offers a delectable array of local dishes that
												reflect the province's culinary heritage. One must-try
												specialty is the "sikwate" (chocolate drink) paired with
												"puto maya" (sticky rice cooked in coconut milk) for a
												traditional Boholano breakfast. Seafood lovers will
												delight in the fresh and mouthwatering seafood dishes
												available in the coastal areas.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									Bohol, with its captivating landscapes, cultural richness, and
									adventurous activities, offers a unique and memorable
									experience for tourists. Whether you seek relaxation on
									pristine beaches, exploration of natural wonders, immersion in
									history and culture, or thrilling adventures, Bohol has
									something to offer every traveler.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* El Nido */}
						<div className="row mt-lg-5 mt-4" id="elnido" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-2 g-3">
											<a href={Images.elnido1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.elnido1}
													alt="El Nido"
													loading="lazy"
												/>
											</a>
											<a href={Images.elnido2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.elnido2}
													alt="El Nido"
													loading="lazy"
												/>
											</a>
											<a href={Images.elnido3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.elnido3}
													alt="El Nido"
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
													href={Images.elnido1}
													className="carousel-item active"
												>
													<img
														src={Images.elnido1}
														alt="El Nido"
														loading="lazy"
													/>
												</a>

												<a href={Images.elnido2} className="carousel-item">
													<img
														src={Images.elnido2}
														alt="El Nido"
														loading="lazy"
													/>
												</a>

												<a href={Images.elnido3} className="carousel-item">
													<img
														src={Images.elnido3}
														alt="El Nido"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>El Nido</h1>
										<p>
											El Nido, located in the province of Palawan in the
											Philippines, is a breathtakingly beautiful tourist
											destination renowned for its pristine beaches, turquoise
											waters, towering limestone cliffs, and vibrant marine
											life. This tropical paradise offers a perfect blend of
											natural wonders, thrilling activities, and a tranquil
											atmosphere.{' '}
											<i>
												Here's a description of El Nido as a tourist
												destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Stunning Island-Hopping Tours:
											</h4>
											<p>
												El Nido is famous for its island-hopping tours, which
												take visitors to the enchanting Bacuit Archipelago.
												These tours allow you to explore a series of picturesque
												islands, hidden lagoons, and secluded beaches. Some
												must-visit spots include the Big Lagoon, Small Lagoon,
												Secret Lagoon, and Seven Commandos Beach. Each
												destination offers unique landscapes, crystal-clear
												waters, and opportunities for swimming, snorkeling, and
												sunbathing.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Towering Limestone Cliffs:
											</h4>
											<p>
												El Nido is surrounded by towering limestone cliffs that
												create a dramatic backdrop against the turquoise waters.
												These limestone formations are a sight to behold, rising
												majestically from the sea. The most iconic of these
												cliffs is the Karst Formation, commonly known as the
												"Taraw Cliff," which offers a challenging yet rewarding
												climb, providing panoramic views of El Nido town and the
												surrounding islands.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Pristine Beaches and Hidden Coves:
											</h4>
											<p>
												El Nido boasts some of the most pristine and
												breathtaking beaches in the world. Nacpan Beach, known
												for its long stretch of powdery white sand and
												crystal-clear waters, is a popular spot for sunbathing
												and swimming. Las Cabanas Beach is another picturesque
												beach offering stunning sunset views. Hidden Beach, as
												the name suggests, is a secluded cove accessible only by
												swimming through a small crevice, rewarding visitors
												with an untouched and tranquil paradise.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Diverse Marine Life and Snorkeling:
											</h4>
											<p>
												El Nido is a haven for marine biodiversity. The waters
												surrounding the islands are teeming with vibrant coral
												reefs and an abundance of marine life. Snorkeling
												enthusiasts can explore the underwater world and witness
												colorful coral gardens, tropical fish, and even sea
												turtles. Popular snorkeling spots include Shimizu
												Island, Dilumacad Island, and Matinloc Island.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Scenic Hiking and Eco-Tourism:
											</h4>
											<p>
												Beyond its stunning beaches and islands, El Nido offers
												opportunities for scenic hikes and eco-tourism
												activities. Taraw Peak, as mentioned earlier, provides a
												challenging but rewarding climb with panoramic views.
												Inland, you can explore the lush forests, waterfalls,
												and caves, such as the Nagkalit-Kalit Falls and the
												fascinating Cathedral Cave.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Tranquil and Relaxing Atmosphere:
											</h4>
											<p>
												El Nido has managed to maintain a laid-back and tranquil
												atmosphere despite its popularity among tourists. The
												town itself offers a range of accommodations, from
												budget-friendly guesthouses to luxury resorts, ensuring
												a comfortable and relaxing stay. Enjoy the slow pace,
												friendly locals, and the opportunity to disconnect from
												the hustle and bustle of everyday life.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									El Nido, with its stunning landscapes, rich marine life, and
									tranquil ambiance, is truly a tropical paradise that
									captivates the hearts of travelers. Whether you're seeking
									adventure, relaxation, or simply a connection with nature, El
									Nido offers a memorable and awe-inspiring experience that will
									stay with you long after you leave.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Batangas */}
						<div className="row mt-lg-5 mt-4" id="batangas" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-3 g-3">
											<a href={Images.batangas1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.batangas1}
													alt="Bantagas"
													loading="lazy"
												/>
											</a>
											<a href={Images.batangas2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.batangas2}
													alt="Bantagas"
													loading="lazy"
												/>
											</a>
											<a href={Images.batangas3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.batangas3}
													alt="Bantagas"
													loading="lazy"
												/>
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
													href={Images.batangas1}
													className="carousel-item active"
												>
													<img
														src={Images.batangas1}
														alt="Batangas"
														loading="lazy"
													/>
												</a>

												<a href={Images.batangas2} className="carousel-item">
													<img
														src={Images.batangas2}
														alt="Batangas"
														loading="lazy"
													/>
												</a>

												<a href={Images.batangas3} className="carousel-item">
													<img
														src={Images.batangas3}
														alt="Batangas"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Batangas</h1>
										<p>
											Batangas, located in the Philippines, is a diverse and
											captivating tourist destination known for its beautiful
											beaches, picturesque landscapes, historical sites, and
											vibrant marine life. This province offers a perfect blend
											of natural wonders, cultural heritage, and recreational
											activities.{' '}
											<i>
												Here's a description of Batangas as a tourist
												destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Stunning Beaches and Dive Sites:
											</h4>
											<p>
												Batangas is home to a plethora of stunning beaches along
												its coastline. The most famous beach destinations
												include Nasugbu, Laiya, and Mabini. These beaches boast
												powdery white sand, crystal-clear waters, and excellent
												diving and snorkeling opportunities. The coastal waters
												are teeming with vibrant coral reefs and marine life,
												making it a paradise for underwater enthusiasts.
											</p>
											<h4 className="mt-lg-5 mt-4">Anilao:</h4>
											<p>
												Anilao, located in Mabini, is a popular diving and
												snorkeling hub in Batangas. It is renowned for its rich
												marine biodiversity and colorful coral gardens. Divers
												can explore numerous dive sites and encounter an array
												of marine species, including tropical fish, sea turtles,
												and even occasional sightings of sharks. Anilao also
												offers a range of dive resorts and facilities for
												enthusiasts of all levels.
											</p>
											<h4 className="mt-lg-5 mt-4">Taal Volcano:</h4>
											<p>
												Batangas is home to the iconic Taal Volcano, one of the
												world's smallest active volcanoes. The volcano sits
												within Taal Lake and offers a dramatic and picturesque
												sight. Visitors can take a boat ride to the volcano
												island and hike up to the rim to enjoy breathtaking
												views of the crater lake. Taal Volcano is a must-visit
												attraction for nature lovers and adventure seekers.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Historical and Cultural Sites:
											</h4>
											<p>
												Batangas has a rich historical and cultural heritage.
												The province is dotted with centuries-old churches,
												ancestral houses, and heritage sites. One notable
												example is the Basilica de San Martin de Tours in Taal,
												a well-preserved Spanish colonial church known for its
												intricate design and Baroque architecture. The Taal
												Heritage Town is also worth exploring, offering a
												glimpse into the province's colonial past.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Trekking and Nature Exploration:
											</h4>
											<p>
												Batangas is blessed with lush mountains and scenic
												landscapes, making it a great destination for trekking
												and nature exploration. Mt. Maculot, Mt. Batulao, and
												Mt. Talamitam are popular hiking destinations that offer
												panoramic views from their summits. The Caleruega Church
												and Retreat Center, nestled in the mountains of Nasugbu,
												provides a serene and picturesque setting for spiritual
												retreats and nature walks.
											</p>
											<h4 className="mt-lg-5 mt-4">Culinary Delights:</h4>
											<p>
												Batangas is known for its delectable local cuisine.
												Visitors can indulge in the famous Batangas beef bulalo,
												a savory soup made with beef shanks and bone marrow,
												which is a comfort food favorite. Other must-try dishes
												include lomi (thick egg noodles in a flavorful broth),
												tawilis (freshwater sardines), and suman (sticky rice
												cakes).
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Batangas, with its diverse attractions and natural beauty,
									offers a memorable experience for tourists. Whether you seek
									beachside relaxation, underwater adventures, cultural
									immersion, or outdoor activities, Batangas has something to
									offer everyone. Its proximity to Metro Manila makes it an
									accessible and ideal destination for a quick getaway or an
									extended vacation.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Palawan */}
						<div className="row mt-lg-5 mt-4" id="palawan" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-4 g-3">
											<a href={Images.palawan2} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.palawan2}
													alt="Palawan"
													loading="lazy"
												/>
											</a>
											<a href={Images.palawan1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.palawan1}
													alt="Palawan"
													loading="lazy"
												/>
											</a>
											<a href={Images.palawan3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.palawan3}
													alt="Palawan"
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
													href={Images.palawan2}
													className="carousel-item active"
												>
													<img
														src={Images.palawan2}
														alt="Palawan"
														loading="lazy"
													/>
												</a>

												<a href={Images.palawan1} className="carousel-item">
													<img
														src={Images.palawan1}
														alt="Palawan"
														loading="lazy"
													/>
												</a>

												<a href={Images.palawan3} className="carousel-item">
													<img
														src={Images.palawan3}
														alt="Palawan"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Palawan</h1>
										<p>
											Palawan, located in the western part of the Philippines,
											is an enchanting and widely acclaimed tourist destination
											known for its pristine beaches, turquoise waters, lush
											rainforests, and extraordinary biodiversity. This province
											is often referred to as the "Last Frontier" due to its
											untouched natural beauty and is recognized as one of the
											world's best islands.{' '}
											<i>
												Here's a description of Palawan as a tourist
												destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">El Nido:</h4>
											<p>
												El Nido, located in northern Palawan, is a breathtaking
												paradise renowned for its stunning limestone cliffs,
												crystal-clear waters, and hidden lagoons. It offers
												incredible island-hopping tours that take visitors to
												picturesque destinations like the Big Lagoon, Small
												Lagoon, Secret Lagoon, and Seven Commandos Beach. The
												beauty of El Nido's landscapes, both above and below the
												water, makes it a dream destination for snorkeling,
												diving, and beach lovers.
											</p>
											<h4 className="mt-lg-5 mt-4">Puerto Princesa:</h4>
											<p>
												Puerto Princesa, the capital city of Palawan, is a
												vibrant and eco-friendly city that serves as the gateway
												to the province. It is home to the world-famous Puerto
												Princesa Subterranean River National Park, a UNESCO
												World Heritage Site and one of the New Seven Wonders of
												Nature. Visitors can embark on a mesmerizing boat tour
												through an underground river surrounded by breathtaking
												limestone formations and diverse wildlife.
											</p>
											<h4 className="mt-lg-5 mt-4">Coron:</h4>
											<p>
												Coron, located in the Calamian Islands in northern
												Palawan, is renowned for its dramatic landscapes and
												pristine beaches. It is known for its crystal-clear
												lakes, including the iconic Kayangan Lake, which is
												often hailed as one of the cleanest lakes in Asia. Coron
												is also a haven for divers and snorkelers, with numerous
												Japanese shipwrecks from World War II that have become
												vibrant coral reefs, attracting a variety of marine
												life.
											</p>
											<h4 className="mt-lg-5 mt-4">Calamian Islands:</h4>
											<p>
												Apart from Coron, the Calamian Islands offer other
												tropical gems like Busuanga, Culion, and Linapacan.
												These islands feature secluded beaches, vibrant coral
												reefs, and opportunities for island-hopping and water
												sports. The unspoiled beauty and tranquility of these
												islands make them a perfect escape for those seeking
												relaxation and solitude.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Underground Rivers and Caves:
											</h4>
											<p>
												Palawan is home to several captivating underground
												rivers and cave systems. In addition to the Puerto
												Princesa Subterranean River, there are other notable
												caves to explore, such as the Ugong Rock Cave in Puerto
												Princesa, where visitors can climb and crawl through
												rock formations and marvel at stalactites and
												stalagmites.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Wildlife and Nature Reserves:
											</h4>
											<p>
												Palawan is renowned for its exceptional biodiversity and
												is home to several protected areas and nature reserves.
												The Tubbataha Reefs Natural Park, a UNESCO World
												Heritage Site, is a haven for divers and snorkelers,
												offering some of the best-preserved coral reefs in the
												world. The Calauit Safari Park in Busuanga is home to
												various African and endemic animal species, providing a
												unique wildlife experience.
											</p>
											<h4 className="mt-lg-5 mt-4">Cultural Immersion:</h4>
											<p>
												Palawan is also rich in cultural heritage. The
												indigenous tribes of Palawan, such as the Batak and
												Tagbanua, have preserved their traditions and
												craftsmanship. Visitors can learn about their way of
												life, witness traditional rituals, and purchase locally
												made handicrafts and products.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Palawan, with its breathtaking natural beauty, rich
									biodiversity, and a wide range of activities and attractions,
									offers an unforgettable experience for travelers. Whether
									you're seeking stunning beaches, exploring underwater wonders,
									immersing in nature, or embracing local culture, Palawan has
									it all. It is a destination that promises to leave you in awe
									and create lasting memories.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Zambales */}
						<div className="row mt-lg-5 mt-4" id="zambales" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-5 g-3">
											<a href={Images.zambales2} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.zambales2}
													alt="Zambales"
													loading="lazy"
												/>
											</a>
											<a href={Images.zambales1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.zambales1}
													alt="Zambales"
													loading="lazy"
												/>
											</a>
											<a href={Images.zambales3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.zambales3}
													alt="Zambales"
													loading="lazy"
												/>
											</a>
										</div>
									</div>

									{/* Mobile Image Gallery */}
									<div className="gallery-mobile-container col d-lg-none d-md-block">
										<div
											id="mobile-5-carousel"
											className="carousel slide"
											data-bs-ride="carousel"
										>
											<div className="carousel-indicators">
												<button
													type="button"
													data-bs-target="#mobile-5-carousel"
													className="active"
													aria-current="true"
													data-bs-slide-to="0"
													aria-label="Slide 1"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-5-carousel"
													data-bs-slide-to="1"
													aria-label="Slide 2"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-5-carousel"
													data-bs-slide-to="2"
													aria-label="Slide 3"
												></button>
											</div>
											<div className="carousel-inner lightbox-mobile-5">
												<a
													href={Images.zambales2}
													className="carousel-item active"
												>
													<img
														src={Images.zambales2}
														alt="Zambales"
														loading="lazy"
													/>
												</a>

												<a href={Images.zambales1} className="carousel-item">
													<img
														src={Images.zambales1}
														alt="Zambales"
														loading="lazy"
													/>
												</a>

												<a href={Images.zambales3} className="carousel-item">
													<img
														src={Images.zambales3}
														alt="Zambales"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Zambales</h1>
										<p>
											Zambales, located on the western coast of Luzon in the
											Philippines, is a picturesque and diverse tourist
											destination known for its stunning beaches, majestic
											mountains, vibrant marine life, and historical sites. This
											province offers a mix of natural beauty, outdoor
											adventures, and cultural experiences.{' '}
											<i>
												Here's a description of Zambales as a tourist
												destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Pristine Beaches:</h4>
											<p>
												Zambales boasts a stretch of beautiful beaches along its
												coastline, making it a haven for beach lovers. Crystal
												Beach in San Narciso is a popular destination known for
												its clear waters and excellent surfing conditions.
												Anawangin Cove and Nagsasa Cove in Pundaquit are
												renowned for their picturesque landscapes, with pristine
												beaches nestled amidst lush forests and surrounded by
												towering mountains. Visitors can enjoy sunbathing,
												swimming, snorkeling, and camping in these serene
												coastal areas.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Mountaineering and Hiking:
											</h4>
											<p>
												Zambales is blessed with majestic mountains that offer
												exhilarating trekking and hiking opportunities. Mount
												Pinatubo, known for its dramatic crater lake, attracts
												adventurers from around the world. Trekking to its
												summit rewards hikers with breathtaking views of the
												turquoise lake. Other notable mountains include Mount
												Tapulao, renowned for its challenging trails and
												panoramic vistas, and Mount Balingkilat, which offers a
												picturesque coastal view.
											</p>
											<h4 className="mt-lg-5 mt-4">Subic Bay:</h4>
											<p>
												Subic Bay, a former American naval base, has transformed
												into a thriving tourist destination. It offers a range
												of activities, including water sports, yachting, and
												island-hopping tours. Subic Bay is also home to the
												Ocean Adventure, an interactive marine park where
												visitors can witness dolphin and sea lion shows, swim
												with dolphins, and learn about marine conservation.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Ancestral Houses and Historical Sites:
											</h4>
											<p>
												Zambales has a rich historical and cultural heritage.
												The province is home to ancestral houses that showcase
												Spanish colonial architecture, such as Casa San Miguel
												in San Antonio and Casa San Miguel in Botolan. Visitors
												can explore these houses and gain insights into the
												local history and heritage. The San Salvador del Mundo
												Church, also known as Botolan Church, is a notable
												religious site that dates back to the 17th century.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Beachside Resorts and Water Activities:
											</h4>
											<p>
												Zambales offers a variety of beachside resorts and
												accommodations that cater to different budgets and
												preferences. Visitors can indulge in various water
												activities, such as jet skiing, kayaking,
												paddleboarding, and banana boating. The warm waters and
												favorable wind conditions in Zambales also make it a
												popular spot for kiteboarding and windsurfing.
											</p>
											<h4 className="mt-lg-5 mt-4">Local Cuisine:</h4>
											<p>
												Zambales delights food enthusiasts with its unique local
												cuisine. The province is known for its delicious seafood
												dishes, particularly the mouthwatering "bagnet" (crispy
												pork belly) and "buro" (fermented rice with fish or
												shrimp). Don't miss the chance to sample these authentic
												local flavors during your visit.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Zambales, with its stunning beaches, scenic mountains,
									historical sites, and exciting water activities, offers a
									diverse range of experiences for travelers. Whether you're
									seeking relaxation, adventure, or a glimpse into local culture
									and history, Zambales is sure to captivate you with its
									natural beauty and warm hospitality.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Cebu */}
						<div className="row mt-lg-5 mt-4" id="cebu" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-6 g-3">
											<a href={Images.cebu2} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.cebu2} alt="Cebu" loading="lazy" />
											</a>
											<a href={Images.cebu1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.cebu1} alt="Cebu" loading="lazy" />
											</a>
											<a href={Images.cebu3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.cebu3} alt="Cebu" loading="lazy" />
											</a>
										</div>
									</div>

									{/* Mobile Image Gallery */}
									<div className="gallery-mobile-container col d-lg-none d-md-block">
										<div
											id="mobile-6-carousel"
											className="carousel slide"
											data-bs-ride="carousel"
										>
											<div className="carousel-indicators">
												<button
													type="button"
													data-bs-target="#mobile-6-carousel"
													className="active"
													aria-current="true"
													data-bs-slide-to="0"
													aria-label="Slide 1"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-6-carousel"
													data-bs-slide-to="1"
													aria-label="Slide 2"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-6-carousel"
													data-bs-slide-to="2"
													aria-label="Slide 3"
												></button>
											</div>
											<div className="carousel-inner lightbox-mobile-6">
												<a href={Images.cebu2} className="carousel-item active">
													<img src={Images.cebu2} alt="Cebu" loading="lazy" />
												</a>

												<a href={Images.cebu1} className="carousel-item">
													<img src={Images.cebu1} alt="Cebu" loading="lazy" />
												</a>

												<a href={Images.cebu3} className="carousel-item">
													<img src={Images.cebu3} alt="Cebu" loading="lazy" />
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Cebu</h1>
										<p>
											Cebu, located in the central part of the Philippines, is a
											vibrant and captivating tourist destination known for its
											rich history, stunning white sand beaches, and remarkable
											marine biodiversity. This province offers a perfect
											combination of cultural attractions, natural wonders, and
											thrilling adventures.{' '}
											<i>
												Here's a description of Cebu as a tourist destination,
												highlighting the Oslo whale sharks and white sand
												beaches:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Oslob Whale Sharks:</h4>
											<p>
												Cebu is famous for its extraordinary interaction with
												whale sharks in the town of Oslob. Visitors have the
												opportunity to swim and snorkel alongside these gentle
												giants, creating unforgettable memories. The whale
												sharks, known as "butanding" in the local language, are
												the largest fish species in the world and encountering
												them up close is a truly awe-inspiring experience.
												Responsible tourism practices ensure the well-being and
												conservation of these magnificent creatures.
											</p>
											<h4 className="mt-lg-5 mt-4">White Sand Beaches:</h4>
											<p>
												Cebu is blessed with pristine white sand beaches that
												are a paradise for sun-seekers and water enthusiasts.
												Mactan Island, just off the coast of Cebu City, offers a
												range of beach resorts with crystal-clear waters and
												powdery white sand. Visitors can relax, swim, snorkel,
												and engage in various water sports activities such as
												jet skiing, parasailing, and island-hopping. Badian,
												Moalboal, and Malapascua Island are other popular
												destinations with beautiful beaches and vibrant marine
												life.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Historic and Cultural Sites:
											</h4>
											<p>
												Cebu has a rich history dating back to the arrival of
												Spanish colonizers in the 16th century. The city of Cebu
												is known as the "Cradle of Christianity" in the
												Philippines as it was the first Spanish settlement in
												the country. The Basilica Minore del Santo Niño, located
												in Cebu City, houses the oldest religious relic in the
												Philippines and is a significant pilgrimage site. Fort
												San Pedro, built by the Spanish in the 17th century, is
												another historical landmark worth exploring.
											</p>
											<h4 className="mt-lg-5 mt-4">Sinulog Festival:</h4>
											<p>
												Cebu is renowned for its vibrant festivals, with the
												Sinulog Festival being the most celebrated. Held every
												January, the festival pays homage to the Santo Niño, the
												child Jesus. It features colorful street parades,
												cultural dances, and a grand procession showcasing the
												rich cultural heritage of Cebu. The Sinulog Festival
												attracts both local and international visitors who
												immerse themselves in the lively festivities.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Scenic Natural Attractions:
											</h4>
											<p>
												Beyond its stunning beaches, Cebu offers scenic natural
												attractions that are a treat for nature lovers. Kawasan
												Falls in Badian is a multi-tiered waterfall surrounded
												by lush greenery, offering a refreshing swimming
												experience. Osmeña Peak, the highest point in Cebu,
												rewards hikers with panoramic views of the surrounding
												mountains and islands. Sumilon Island, located off the
												southeastern coast, is known for its crystal-clear
												waters, pristine beaches, and vibrant coral gardens,
												making it a popular spot for snorkeling and diving.
											</p>
											<h4 className="mt-lg-5 mt-4">Culinary Delights:</h4>
											<p>
												Cebu is a food lover's paradise, renowned for its
												flavorful and unique dishes. The lechon (roasted pig) of
												Cebu is considered one of the best in the country, with
												its crispy skin and succulent meat. Other local
												delicacies include "puso" (rice wrapped in coconut
												leaves), "sutukil" (grilled, stewed, and raw seafood),
												and "danggit" (dried fish). Exploring the local food
												scene in Cebu is a delightful culinary adventure.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Cebu, with its rich cultural heritage, breathtaking natural
									attractions, and captivating marine life, offers a diverse
									range of experiences for tourists. Whether you're seeking
									close encounters with whale sharks, relaxing on pristine
									beaches, immersing in history and culture, or indulging in
									mouthwatering cuisine, Cebu has something to offer everyone.
									It is a destination that promises an unforgettable and
									fulfilling journey.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Manila */}
						<div className="row mt-lg-5 mt-4" id="manila" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-7 g-3">
											<a href={Images.manila3} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.manila3} alt="Manila" loading="lazy" />
											</a>
											<a href={Images.manila2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.manila2} alt="Manila" loading="lazy" />
											</a>
											<a href={Images.manila1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.manila1} alt="Manila" loading="lazy" />
											</a>
										</div>
									</div>

									{/* Mobile Image Gallery */}
									<div className="gallery-mobile-container col d-lg-none d-md-block">
										<div
											id="mobile-7-carousel"
											className="carousel slide"
											data-bs-ride="carousel"
										>
											<div className="carousel-indicators">
												<button
													type="button"
													data-bs-target="#mobile-7-carousel"
													className="active"
													aria-current="true"
													data-bs-slide-to="0"
													aria-label="Slide 1"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-7-carousel"
													data-bs-slide-to="1"
													aria-label="Slide 2"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-7-carousel"
													data-bs-slide-to="2"
													aria-label="Slide 3"
												></button>
											</div>
											<div className="carousel-inner lightbox-mobile-7">
												<a
													href={Images.manila3}
													className="carousel-item active"
												>
													<img
														src={Images.manila3}
														alt="Manila"
														loading="lazy"
													/>
												</a>

												<a href={Images.manila2} className="carousel-item">
													<img
														src={Images.manila2}
														alt="Manila"
														loading="lazy"
													/>
												</a>

												<a href={Images.manila1} className="carousel-item">
													<img
														src={Images.manila1}
														alt="Manila"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Manila</h1>
										<p>
											Manila, the capital city of the Philippines, is a vibrant
											and bustling metropolis that offers a unique blend of
											history, culture, and modernity, making it an exciting
											tourist destination.
											<i>
												Here's a description of Manila's attractions and
												highlights:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Historical Landmarks:</h4>
											<p>
												Manila has a rich colonial heritage, and its historical
												landmarks are a testament to its fascinating past.
												Intramuros, the walled city built during the Spanish
												colonial period, is a must-visit. It features
												well-preserved Spanish-era architecture, such as Fort
												Santiago and San Agustin Church, both of which are
												UNESCO World Heritage Sites. Rizal Park is another
												significant landmark, dedicated to the national hero,
												Jose Rizal.
											</p>
											<h4 className="mt-lg-5 mt-4">Cultural Experiences:</h4>
											<p>
												Immerse yourself in the Filipino culture by visiting
												cultural hubs like the National Museum of the
												Philippines and the Cultural Center of the Philippines.
												These institutions showcase various art forms, including
												traditional and contemporary Filipino art, dance, music,
												and theater performances.
											</p>
											<h4 className="mt-lg-5 mt-4">Food and Cuisine:</h4>
											<p>
												Manila is a food lover's paradise, offering a diverse
												range of culinary delights. From delicious street food
												found in bustling markets like Binondo (Chinatown) to
												upscale restaurants offering Filipino fusion cuisine,
												there is something to satisfy every palate. Don't miss
												trying local favorites like adobo (marinated meat),
												sinigang (sour soup), and halo-halo (a refreshing
												dessert).
											</p>
											<h4 className="mt-lg-5 mt-4">
												Shopping and Entertainment:
											</h4>
											<p>
												Manila is a shopper's haven, with numerous malls and
												shopping districts offering everything from luxury
												brands to bargain finds. Places like Greenbelt and SM
												Mall of Asia are popular destinations for both local and
												international shoppers. For entertainment, catch a live
												performance at the historic Manila Metropolitan Theater
												or enjoy concerts and shows at various venues around the
												city.
											</p>
											<h4 className="mt-lg-5 mt-4">Natural Attractions:</h4>
											<p>
												Despite being a bustling city, Manila has pockets of
												natural beauty that provide respite from the urban
												environment. Rizal Park offers a serene green space in
												the heart of the city, while Manila Bay's famous sunset
												views are a sight to behold. Nearby attractions like
												Taal Volcano and Pagsanjan Falls offer day trip options
												for those seeking outdoor adventures.
											</p>
											<h4 className="mt-lg-5 mt-4">Festivals and Events:</h4>
											<p>
												Manila hosts vibrant and colorful festivals throughout
												the year. The most famous is the annual Feast of the
												Black Nazarene, where millions of devotees flock to
												Quiapo Church to join the religious procession. Other
												notable celebrations include the Manila International
												Film Festival, Pahiyas Festival, and the Chinese New
												Year festivities in Binondo.
											</p>
											<h4 className="mt-lg-5 mt-4">Hospitality and Warmth:</h4>
											<p>
												One of Manila's biggest draws is the warmth and
												hospitality of its people. Filipinos are known for their
												friendly nature and their willingness to help visitors
												feel at home. Interacting with locals and experiencing
												their genuine warmth and hospitality is an enriching
												aspect of any trip to Manila.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									While Manila may have its share of traffic and urban
									challenges, it offers a unique and rewarding experience for
									tourists who want to explore the capital city of the
									Philippines and discover its rich history, vibrant culture,
									and warm-hearted people.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Batanes */}
						<div className="row mt-lg-5 mt-4" id="batanes" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-8 g-3">
											<a href={Images.batanes3} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.batanes3}
													alt="Batanes"
													loading="lazy"
												/>
											</a>
											<a href={Images.batanes2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.batanes2}
													alt="Batanes"
													loading="lazy"
												/>
											</a>
											<a href={Images.batanes1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.batanes1}
													alt="Batanes"
													loading="lazy"
												/>
											</a>
										</div>
									</div>

									{/* Mobile Image Gallery */}
									<div className="gallery-mobile-container col d-lg-none d-md-block">
										<div
											id="mobile-8-carousel"
											className="carousel slide"
											data-bs-ride="carousel"
										>
											<div className="carousel-indicators">
												<button
													type="button"
													data-bs-target="#mobile-8-carousel"
													className="active"
													aria-current="true"
													data-bs-slide-to="0"
													aria-label="Slide 1"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-8-carousel"
													data-bs-slide-to="1"
													aria-label="Slide 2"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-8-carousel"
													data-bs-slide-to="2"
													aria-label="Slide 3"
												></button>
											</div>
											<div className="carousel-inner lightbox-mobile-8">
												<a
													href={Images.batanes3}
													className="carousel-item active"
												>
													<img
														src={Images.batanes3}
														alt="Batanes"
														loading="lazy"
													/>
												</a>

												<a href={Images.batanes2} className="carousel-item">
													<img
														src={Images.batanes2}
														alt="Batanes"
														loading="lazy"
													/>
												</a>

												<a href={Images.batanes1} className="carousel-item">
													<img
														src={Images.batanes1}
														alt="Batanes"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Batanes</h1>
										<p>
											Batanes is an enchanting and breathtakingly beautiful
											group of islands located in the northernmost part of the
											Philippines. Known for its unspoiled natural landscapes,
											stunning coastlines, and rich cultural heritage, Batanes
											is a paradise for travelers seeking a serene and idyllic
											getaway.
											<i>
												Here's a description of Batanes as a tourist
												destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Majestic Landscapes:</h4>
											<p>
												Batanes is renowned for its picturesque landscapes that
												resemble a painting come to life. Rolling hills,
												dramatic cliffs, and lush green pastures create a
												mesmerizing backdrop. The iconic stone houses, known as
												Ivatan houses, with their thick stone walls and cogon
												grass roofs, dot the landscape, adding to the charm.
											</p>
											<h4 className="mt-lg-5 mt-4">Pristine Beaches:</h4>
											<p>
												Batanes boasts pristine beaches with crystal-clear
												turquoise waters and powdery white sand. Popular spots
												like Valugan Boulder Beach, Marlboro Country, and
												Nakabuang Beach offer breathtaking views and a tranquil
												atmosphere where you can relax, swim, or simply bask in
												the beauty of nature.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Stunning Rock Formations:
											</h4>
											<p>
												The rugged coastline of Batanes is adorned with
												fascinating rock formations, carved by the relentless
												waves of the Pacific Ocean. The most famous is the Basco
												lighthouse perched on top of Naidi Hill, offering
												panoramic views of the surrounding cliffs and sea.
											</p>
											<h4 className="mt-lg-5 mt-4">Rich Cultural Heritage:</h4>
											<p>
												The Ivatan people, the native inhabitants of Batanes,
												have a distinct culture and heritage. Explore the
												traditional Ivatan villages, such as Savidug and
												Chavayan, where you can witness the Ivatan way of life
												and admire the well-preserved Ivatan houses. You can
												also visit the Ivana Church, known for its unique
												architecture and beautiful ceiling paintings.
											</p>
											<h4 className="mt-lg-5 mt-4">Outdoor Activities:</h4>
											<p>
												Batanes is a paradise for outdoor enthusiasts. You can
												embark on scenic hikes along the rolling hills and
												cliffs, with popular trails like Racuh a Payaman
												(Marlboro Hills) and Mt. Iraya offering breathtaking
												views. The Batanes seas are also ideal for activities
												such as snorkeling, diving, and fishing, allowing you to
												explore the diverse marine life.
											</p>
											<h4 className="mt-lg-5 mt-4">Culinary Delights:</h4>
											<p>
												Batanes offers a unique gastronomic experience with its
												local cuisine. Try the Ivatan specialty dishes, such as
												Uved Balls (made from ground banana pith), Vunung Dibang
												(flying fish), and Turmeric Rice, which reflect the
												island's rich culinary heritage.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Tranquility and Serenity:
											</h4>
											<p>
												One of the most significant aspects of Batanes is its
												peaceful and serene atmosphere. The islands are
												relatively untouched by mass tourism, allowing visitors
												to experience a sense of tranquility and solitude,
												surrounded by stunning natural beauty.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Visiting Batanes is like stepping into a different world,
									where time seems to slow down, and nature's wonders take
									center stage. It is a destination that captures the hearts of
									travelers with its breathtaking landscapes, warm and
									hospitable people, and a unique blend of natural and cultural
									treasures.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Boracay */}
						<div className="row mt-lg-5 mt-4" id="boracay" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-9 g-3">
											<a href={Images.boracay1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.boracay1}
													alt="Boracay"
													loading="lazy"
												/>
											</a>
											<a href={Images.boracay2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.boracay2}
													alt="Boracay"
													loading="lazy"
												/>
											</a>
											<a href={Images.boracay3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.boracay3}
													alt="Boracay"
													loading="lazy"
												/>
											</a>
										</div>
									</div>

									{/* Mobile Image Gallery */}
									<div className="gallery-mobile-container col d-lg-none d-md-block">
										<div
											id="mobile-9-carousel"
											className="carousel slide"
											data-bs-ride="carousel"
										>
											<div className="carousel-indicators">
												<button
													type="button"
													data-bs-target="#mobile-9-carousel"
													className="active"
													aria-current="true"
													data-bs-slide-to="0"
													aria-label="Slide 1"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-9-carousel"
													data-bs-slide-to="1"
													aria-label="Slide 2"
												></button>
												<button
													type="button"
													data-bs-target="#mobile-9-carousel"
													data-bs-slide-to="2"
													aria-label="Slide 3"
												></button>
											</div>
											<div className="carousel-inner lightbox-mobile-9">
												<a
													href={Images.boracay1}
													className="carousel-item active"
												>
													<img
														src={Images.boracay1}
														alt="Boracay"
														loading="lazy"
													/>
												</a>

												<a href={Images.boracay2} className="carousel-item">
													<img
														src={Images.boracay2}
														alt="Boracay"
														loading="lazy"
													/>
												</a>

												<a href={Images.boracay3} className="carousel-item">
													<img
														src={Images.boracay3}
														alt="Boracay"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Boracay</h1>
										<p>
											Boracay is a world-renowned tropical paradise located in
											the Western Visayas region of the Philippines. With its
											pristine white sand beaches, turquoise waters, vibrant
											nightlife, and a wide range of recreational activities,
											Boracay has become a popular destination for tourists from
											around the globe.
											<i>
												Here's a description of Boracay as a tourist
												destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">White Beach:</h4>
											<p>
												The most famous and iconic attraction of Boracay is
												White Beach. Stretching over four kilometers, this
												stunning beach boasts powdery white sand that feels soft
												beneath your feet. The crystal-clear waters are perfect
												for swimming, snorkeling, or simply lounging by the
												shore while enjoying the breathtaking sunsets that
												Boracay is known for.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Water Sports and Activities:
											</h4>
											<p>
												Boracay offers a plethora of exciting water sports and
												activities to suit all interests. You can indulge in
												activities such as jet skiing, parasailing,
												paddleboarding, kiteboarding, and scuba diving. The
												island's calm waters and favorable wind conditions make
												it an ideal destination for both beginners and
												experienced water sports enthusiasts.
											</p>
											<h4 className="mt-lg-5 mt-4">Island Hopping:</h4>
											<p>
												Explore the nearby islands and discover hidden gems
												through island hopping tours. These tours allow you to
												visit picturesque locations like Puka Beach, Crystal
												Cove Island, and Crocodile Island, where you can
												snorkel, swim, and marvel at the stunning natural beauty
												surrounding Boracay.
											</p>
											<h4 className="mt-lg-5 mt-4">Vibrant Nightlife:</h4>
											<p>
												Boracay comes alive after the sun sets with its vibrant
												nightlife scene. The beachfront is lined with bars,
												clubs, and restaurants offering a diverse range of
												entertainment options. You can enjoy live music, fire
												dancing performances, beach parties, and delicious
												cocktails as you soak in the energetic atmosphere.
											</p>
											<h4 className="mt-lg-5 mt-4">Gourmet Dining:</h4>
											<p>
												Boracay is a food lover's paradise, offering a wide
												array of dining options. From beachfront eateries
												serving fresh seafood to international restaurants
												offering various cuisines, there's something to satisfy
												every palate. Don't miss trying local delicacies like
												the famous Chori Burger and freshly caught seafood
												dishes.
											</p>
											<h4 className="mt-lg-5 mt-4">Spa and Wellness:</h4>
											<p>
												Relax and rejuvenate at one of the many spa and wellness
												centers in Boracay. Enjoy soothing massages, wellness
												treatments, and yoga sessions in serene and picturesque
												surroundings, allowing you to unwind and pamper
												yourself.
											</p>
											<h4 className="mt-lg-5 mt-4">D'Mall:</h4>
											<p>
												Located at Station 2, D'Mall is the main commercial area
												of Boracay. It's a bustling hub where you can find
												shops, boutiques, souvenir stalls, and restaurants. It's
												a great place to shop for local handicrafts, beachwear,
												and souvenirs to take back home.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Boracay's natural beauty, exciting activities, and vibrant
									atmosphere make it an enticing destination for travelers
									seeking a tropical paradise getaway. Whether you're looking
									for relaxation, adventure, or a vibrant nightlife experience,
									Boracay has something to offer every visitor.
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
