import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Icons from './Icons';
import Aos from 'aos';
import Footer from './Footer';

export default function India() {
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

	return (
		<>
			<main>
				<section
					className="country-section"
					style={{
						background:
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/india.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="container">
						<h1>India</h1>
						<p>
							Immerse yourself in the cultural heritage, explore magnificent
							historical sites like the Taj Mahal, and indulge in the diverse
							and flavorful cuisine.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in India
						</h2>

						{/* Agra */}
						<div className="row mt-lg-5 mt-4" id="agra" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.agra1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.agra1} alt="Agra" loading="lazy" />
											</a>
											<a href={Images.agra2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.agra2} alt="Agra" loading="lazy" />
											</a>
											<a href={Images.agra3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.agra3} alt="Agra" loading="lazy" />
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
												<a href={Images.agra1} className="carousel-item active">
													<img src={Images.agra1} alt="Agra" loading="lazy" />
												</a>

												<a href={Images.agra2} className="carousel-item">
													<img src={Images.agra2} alt="Agra" loading="lazy" />
												</a>

												<a href={Images.agra3} className="carousel-item">
													<img src={Images.agra3} alt="Agra" loading="lazy" />
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Agra</h1>
										<p>
											Agra, located in the state of Uttar Pradesh, India, is a
											world-famous tourist destination renowned for its
											architectural masterpiece, the Taj Mahal. With its rich
											historical and cultural significance, Agra attracts
											millions of visitors from around the globe.{' '}
											<i>
												Here's a description of Agra as a tourist destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">The Taj Mahal:</h4>
											<p>
												Agra is synonymous with the Taj Mahal, one of the Seven
												Wonders of the World and a UNESCO World Heritage Site.
												This magnificent white marble mausoleum was built by
												Emperor Shah Jahan in the 17th century as a testament to
												his love for his wife, Mumtaz Mahal. The Taj Mahal's
												architectural beauty, intricate marble inlays, and
												symmetrical gardens make it a must-visit attraction. The
												sight of the Taj Mahal at sunrise or sunset is
												particularly breathtaking, casting a golden hue over the
												pristine monument.
											</p>
											<h4 className="mt-lg-5 mt-4">Agra Fort:</h4>
											<p>
												Another architectural marvel in Agra is the Agra Fort, a
												UNESCO World Heritage Site. Built during the Mughal era,
												the fort served as the residence of the emperors of the
												Mughal Dynasty. The fort's red sandstone walls, imposing
												gates, and ornate palaces offer a glimpse into the
												opulence and grandeur of the Mughal Empire. From the
												fort's vantage points, visitors can enjoy panoramic
												views of the Taj Mahal across the Yamuna River.
											</p>
											<h4 className="mt-lg-5 mt-4">Fatehpur Sikri:</h4>
											<p>
												Located near Agra, Fatehpur Sikri is a historical city
												built by Emperor Akbar. It served as the capital of the
												Mughal Empire for a short period and showcases
												impressive architectural wonders. The Buland Darwaza, a
												massive gateway, and the intricately designed Jama
												Masjid are among the notable attractions in Fatehpur
												Sikri. The city's well-preserved structures and majestic
												ambiance transport visitors back in time to the era of
												the Mughal Empire.
											</p>
											<h4 className="mt-lg-5 mt-4">Itmad-ud-Daulah's Tomb:</h4>
											<p>
												Often referred to as the "Baby Taj," Itmad-ud-Daulah's
												Tomb is a smaller but equally elegant marble mausoleum
												in Agra. Built by Empress Nur Jahan in memory of her
												father, it exhibits intricate craftsmanship and delicate
												marble carvings. The tomb's peaceful garden setting and
												intricate details make it a worthwhile visit for those
												seeking a quieter and less crowded experience.
											</p>
											<h4 className="mt-lg-5 mt-4">Mughal Heritage Walk:</h4>
											<p>
												To delve deeper into the rich history and culture of
												Agra, visitors can partake in the Mughal Heritage Walk.
												This guided tour takes you through the lesser-known
												lanes and bazaars of Agra, providing insights into the
												city's vibrant culture, traditional crafts, and local
												life. The walk also includes visits to historical sites
												such as Akbar's tomb and the Mariam Tomb Complex.
											</p>
											<h4 className="mt-lg-5 mt-4">Local Cuisine:</h4>
											<p>
												Agra is renowned for its delectable Mughlai cuisine,
												influenced by the culinary traditions of the Mughal
												Empire. Food enthusiasts can savor mouthwatering
												delicacies such as biryani (flavored rice dish), kebabs,
												tandoori dishes, and the famous sweet treat, petha (soft
												candy made from ash gourd). Exploring the bustling
												markets and trying out these authentic flavors is an
												essential part of the Agra experience.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Agra, with its iconic Taj Mahal, historical forts, and
									cultural heritage, offers a captivating glimpse into India's
									rich past. It is a destination that leaves visitors
									awe-inspired and provides a profound appreciation for the
									architectural marvels of the Mughal era. A visit to Agra
									promises a journey through history, romance, and architectural
									splendor
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Rajasthan */}
						<div className="row mt-lg-5 mt-4" id="rajasthan" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-2 g-3">
											<a href={Images.rajasthan1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.rajasthan1}
													alt="Rajasthan"
													loading="lazy"
												/>
											</a>
											<a href={Images.rajasthan2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.rajasthan2}
													alt="Rajasthan"
													loading="lazy"
												/>
											</a>
											<a href={Images.rajasthan3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.rajasthan3}
													alt="Rajasthan"
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
													href={Images.rajasthan1}
													className="carousel-item active"
												>
													<img
														src={Images.rajasthan1}
														alt="Rajasthan"
														loading="lazy"
													/>
												</a>

												<a href={Images.rajasthan2} className="carousel-item">
													<img
														src={Images.rajasthan2}
														alt="Rajasthan"
														loading="lazy"
													/>
												</a>

												<a href={Images.rajasthan3} className="carousel-item">
													<img
														src={Images.rajasthan3}
														alt="Rajasthan"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Rajasthan</h1>
										<p>
											Rajasthan, located in the northwestern part of India, is a
											vibrant and culturally rich state that beckons travelers
											from around the world. Known as the "Land of Kings,"
											Rajasthan is a treasure trove of majestic palaces, ancient
											forts, colorful festivals, traditional arts and crafts,
											and a captivating desert landscape.
											<i>
												Here's a description of Rajasthan as a tourist
												destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Majestic Forts and Palaces:
											</h4>
											<p>
												Rajasthan is home to some of India's most magnificent
												forts and palaces that showcase the opulence and
												grandeur of the region's rich history. The Amber Fort in
												Jaipur, perched atop a hill, offers stunning views and
												intricate architecture. The Mehrangarh Fort in Jodhpur,
												with its towering walls and extensive museum, provides a
												glimpse into the city's royal heritage. The City Palace
												in Udaipur, situated on the banks of Lake Pichola,
												enchants visitors with its ornate courtyards, palaces,
												and gardens. Exploring these architectural marvels
												transports you to a bygone era of royalty.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Thar Desert and Camel Safaris:
											</h4>
											<p>
												Rajasthan is home to the Thar Desert, the largest desert
												in India. The golden sand dunes and vast open spaces
												create a mystical atmosphere. Travelers can embark on
												camel safaris, riding through the desert and
												experiencing the tranquility of the landscape. Watching
												a mesmerizing sunset over the sand dunes is an
												unforgettable sight. Some desert towns like Jaisalmer
												offer the opportunity to stay in desert camps and
												witness cultural performances under the starlit sky.
											</p>
											<h4 className="mt-lg-5 mt-4">Rich Cultural Heritage:</h4>
											<p>
												Rajasthan is known for its vibrant culture and
												traditions. The state hosts numerous colorful festivals
												throughout the year, including the famous Pushkar Camel
												Fair, the Jaipur Literature Festival, and the vibrant
												Holi celebrations. These events provide a chance to
												witness traditional music, dance, and folk performances,
												showcasing the state's cultural richness.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Wildlife and National Parks:
											</h4>
											<p>
												Rajasthan is home to several national parks and wildlife
												sanctuaries that protect the region's diverse flora and
												fauna. Ranthambore National Park, known for its
												population of majestic tigers, offers thrilling wildlife
												safaris. Keoladeo National Park, a UNESCO World Heritage
												Site, attracts birdwatchers with its incredible avian
												diversity. Sariska Tiger Reserve, Mount Abu Wildlife
												Sanctuary, and Desert National Park are among other
												notable wildlife destinations in the state.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Intricate Arts and Crafts:
											</h4>
											<p>
												Rajasthan is famous for its intricate arts and crafts
												that have been passed down through generations. Visitors
												can explore bustling markets and witness skilled
												artisans creating beautiful block-printed textiles,
												vibrant handicrafts, intricate silver jewelry, and
												stunning miniature paintings. The cities of Jaipur and
												Jodhpur are particularly known for their traditional
												craftsmanship.
											</p>
											<h4 className="mt-lg-5 mt-4">Festive Cuisine:</h4>
											<p>
												Rajasthan's cuisine is as rich and flavorful as its
												cultural heritage. The state offers a unique culinary
												experience with its delicious dishes. From spicy
												Rajasthani curries like dal baati churma and gatte ki
												sabzi to mouthwatering sweets like ghewar and malpua,
												Rajasthan's cuisine is a treat for food enthusiasts.
												Don't miss the opportunity to savor the authentic
												flavors and traditional Rajasthani hospitality.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Rajasthan, with its grand forts, captivating palaces, vibrant
									festivals, desert landscapes, and rich cultural heritage,
									offers a truly immersive and enchanting experience for
									travelers. It is a destination that celebrates the regal
									splendor of India's history and leaves visitors with lasting
									memories of its architectural wonders, warm hospitality, and
									cultural vibrancy.
								</h2>
							</div>
						</div>
						<hr className="hr"></hr>

						{/* Jammu */}
						<div className="row mt-lg-5 mt-4" id="jammu" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-3 g-3">
											<a href={Images.jammu1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.jammu1}
													alt="Jammu and Kashmir"
													loading="lazy"
												/>
											</a>
											<a href={Images.jammu2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.jammu2}
													alt="Jammu and Kashmir"
													loading="lazy"
												/>
											</a>
											<a href={Images.jammu3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.jammu3}
													alt="Jammu and Kashmir"
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
													href={Images.jammu1}
													className="carousel-item active"
												>
													<img
														src={Images.jammu1}
														alt="Jammu and Kashmir"
														loading="lazy"
													/>
												</a>

												<a href={Images.jammu2} className="carousel-item">
													<img
														src={Images.jammu2}
														alt="Jammu and Kashmir"
														loading="lazy"
													/>
												</a>

												<a href={Images.jammu3} className="carousel-item">
													<img
														src={Images.jammu3}
														alt="Jammu and Kashmir"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Jammu and Kashmir</h1>
										<p>
											Jammu and Kashmir, located in the northernmost part of
											India, is a breathtakingly beautiful and culturally rich
											region that has long captivated travelers with its
											stunning landscapes, majestic mountains, serene lakes, and
											vibrant culture. Often referred to as "Paradise on Earth,"
											Jammu and Kashmir offers a diverse range of experiences
											for tourists.{' '}
											<i>
												Here's a description of Jammu and Kashmir as a tourist
												destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Mesmerizing Landscapes:</h4>
											<p>
												Jammu and Kashmir is known for its picturesque
												landscapes that encompass snow-capped mountains, lush
												valleys, and pristine lakes. The Himalayan range graces
												the region, with peaks like the famous Amarnath, Vaishno
												Devi, and the majestic Pir Panjal Range. The
												breathtaking Dal Lake in Srinagar, surrounded by
												floating gardens and houseboats, is a must-visit. The
												scenic beauty of places like Gulmarg, Sonamarg,
												Pahalgam, and Leh-Ladakh is simply awe-inspiring and
												offers opportunities for trekking, mountaineering, and
												skiing.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Spiritual and Pilgrimage Sites:
											</h4>
											<p>
												Jammu and Kashmir is a region deeply rooted in
												spirituality and boasts several revered pilgrimage
												sites. The Vaishno Devi Temple in Katra attracts
												millions of devotees each year who undertake a strenuous
												trek to seek blessings of the Hindu goddess Vaishno
												Devi. The Amarnath Cave, situated at a high altitude, is
												a significant Hindu pilgrimage site where an ice
												stalagmite symbolizing Lord Shiva is formed naturally.
												These spiritual sites hold immense cultural and
												religious significance for devotees.
											</p>
											<h4 className="mt-lg-5 mt-4">Rich Cultural Heritage:</h4>
											<p>
												Jammu and Kashmir is a melting pot of diverse cultures,
												with influences from Kashmiri, Dogra, Ladakhi, and
												Tibetan traditions. The region is known for its warm
												hospitality and unique cultural practices. Visitors can
												witness vibrant folk dances like Rouff and Hafiza,
												participate in festivals such as Baisakhi and Lohri, and
												explore the local crafts like Pashmina shawls, carpets,
												and wooden handicrafts.
											</p>
											<h4 className="mt-lg-5 mt-4">Adventure Tourism:</h4>
											<p>
												Jammu and Kashmir offer a plethora of adventure
												activities for thrill-seekers. The mighty rivers and
												rugged terrains make it an ideal destination for
												white-water rafting, especially in the Lidder and
												Zanskar rivers. The region is also a haven for trekking
												enthusiasts, with popular trails like the Great Lakes
												Trek, Tarsar Marsar Trek, and Markha Valley Trek.
												Mountaineering, skiing, paragliding, and mountain biking
												are among other thrilling activities that can be enjoyed
												in Jammu and Kashmir.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Mughal Gardens and Historical Sites:
											</h4>
											<p>
												The Mughal Gardens in Srinagar are a testament to the
												region's rich history and architectural brilliance.
												These gardens, including Shalimar Bagh, Nishat Bagh, and
												Chashme Shahi, feature meticulously manicured lawns,
												cascading fountains, and vibrant flower beds. The region
												is also dotted with historical sites like the ancient
												Shankaracharya Temple, the hilltop fortress of Hari
												Parbat, and the ruins of Awantipur.
											</p>
											<h4 className="mt-lg-5 mt-4">Kashmiri Cuisine:</h4>
											<p>
												Jammu and Kashmir offer a delectable culinary experience
												with its unique and flavorsome Kashmiri cuisine. Wazwan,
												a traditional multi-course meal, is a highlight of
												Kashmiri cuisine and consists of various meat-based
												dishes like Rogan Josh, Yakhni, and Goshtaba. Other
												delicacies include Kashmiri pulao, kebabs, and Kahwa, a
												traditional saffron-infused tea. Exploring the local
												markets and indulging in the region's culinary delights
												is a must for food enthusiasts.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Jammu and Kashmir, with its awe-inspiring landscapes,
									spiritual sites, vibrant culture, and adventure opportunities,
									provides an unforgettable experience for travelers. It is a
									destination that combines natural beauty, cultural heritage,
									and warm hospitality, leaving visitors with a sense of
									tranquility and a deep appreciation for the region's natural
									and cultural treasures
								</h2>
							</div>
						</div>
						<hr className="hr"></hr>

						{/* Kerala */}
						<div className="row mt-lg-5 mt-4" id="kerala" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-4 g-3">
											<a href={Images.kerala1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.kerala1} alt="Kerala" loading="lazy" />
											</a>
											<a href={Images.kerala2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.kerala2} alt="Kerala" loading="lazy" />
											</a>
											<a href={Images.kerala3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.kerala3} alt="Kerala" loading="lazy" />
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
													href={Images.kerala1}
													className="carousel-item active"
												>
													<img
														src={Images.kerala1}
														alt="Kerala"
														loading="lazy"
													/>
												</a>

												<a href={Images.kerala2} className="carousel-item">
													<img
														src={Images.kerala2}
														alt="Kerala"
														loading="lazy"
													/>
												</a>

												<a href={Images.kerala3} className="carousel-item">
													<img
														src={Images.kerala3}
														alt="Kerala"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Kerala</h1>
										<p>
											Kerala, located in the southwestern part of India, is a
											captivating international tourist destination known for
											its serene backwaters, lush greenery, pristine beaches,
											and rich cultural heritage. Often referred to as "God's
											Own Country," Kerala offers a unique blend of natural
											beauty, cultural experiences, and rejuvenation
											opportunities.{' '}
											<i>
												Here's a description of Kerala as an international
												tourist destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Backwaters:</h4>
											<p>
												Kerala's famous backwaters are a network of
												interconnected canals, lakes, and lagoons that stretch
												along the coast. These tranquil waterways are best
												explored through a houseboat cruise, where visitors can
												relax and enjoy the scenic beauty, passing by quaint
												villages, coconut groves, and paddy fields. The
												backwaters of Alleppey and Kumarakom are particularly
												popular among tourists for their picturesque landscapes
												and serene ambiance.
											</p>
											<h4 className="mt-lg-5 mt-4">Ayurveda and Wellness:</h4>
											<p>
												Kerala is renowned for its traditional Ayurvedic
												treatments and wellness practices. Visitors can indulge
												in rejuvenating Ayurvedic massages, therapies, and
												treatments that promote physical and mental well-being.
												Ayurvedic resorts and wellness centers offer a serene
												environment where travelers can rejuvenate their mind,
												body, and soul through natural therapies and meditation
												practices.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Wildlife and Nature Reserves:
											</h4>
											<p>
												Kerala is blessed with abundant wildlife and nature
												reserves. Periyar National Park, located in Thekkady, is
												a popular wildlife sanctuary where visitors can embark
												on a thrilling wildlife safari and spot elephants,
												tigers, and various species of birds. The Silent Valley
												National Park and Wayanad Wildlife Sanctuary are other
												notable destinations for nature lovers and wildlife
												enthusiasts.
											</p>
											<h4 className="mt-lg-5 mt-4">Pristine Beaches:</h4>
											<p>
												Kerala boasts a coastline dotted with pristine beaches
												that offer a tranquil escape from the bustling cities.
												Kovalam, Varkala, and Marari are popular beach
												destinations known for their golden sands, clear waters,
												and palm-fringed shorelines. These beaches provide
												opportunities for sunbathing, swimming, surfing, and
												indulging in fresh seafood delicacies.
											</p>
											<h4 className="mt-lg-5 mt-4">Cultural Experiences:</h4>
											<p>
												Kerala's rich cultural heritage is evident in its
												traditional art forms, classical music and dance
												performances, and religious festivals. The state is
												known for its vibrant Kathakali dance, classical music
												concerts, and Theyyam rituals. Visitors can witness
												these cultural performances, visit ancient temples and
												churches, and explore the historical architecture of
												places like Fort Kochi and Padmanabhapuram Palace.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Spice Plantations and Tea Estates:
											</h4>
											<p>
												Kerala is known as the "Spice Garden of India" due to
												its vast plantations of spices like cardamom, pepper,
												cinnamon, and nutmeg. Visitors can take guided tours of
												these plantations, learn about the cultivation process,
												and sample aromatic spices. The hill stations of Munnar
												and Wayanad are famous for their tea estates, offering
												breathtaking views of tea plantations and opportunities
												to learn about tea production.
											</p>
											<h4 className="mt-lg-5 mt-4">Culinary Delights:</h4>
											<p>
												Kerala's cuisine is a highlight for food enthusiasts.
												The state offers a range of delectable dishes, including
												traditional Kerala-style seafood, appam (rice pancakes),
												puttu (steamed rice cake), and the famous Kerala-style
												fish curry. Exploring the local markets, street food
												stalls, and traditional restaurants allows visitors to
												savor the authentic flavors of Kerala.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Kerala, with its backwaters, Ayurvedic treatments, wildlife
									reserves, pristine beaches, cultural experiences, and culinary
									delights, offers a truly immersive and rejuvenating experience
									for international travelers. It is a destination that
									showcases the beauty of nature, the richness of cultural
									heritage, and the essence of wellness, leaving visitors with
									cherished memories and a deep appreciation for the wonders of
									"God's Own Country."
								</h2>
							</div>
						</div>
						<hr className="hr"></hr>

						{/* // Himalayas  */}
						<div className="row mt-lg-5 mt-4" id="himalayas" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-5 g-3">
											<a href={Images.himalayas1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.himalayas1}
													alt="Himalayas"
													loading="lazy"
												/>
											</a>
											<a href={Images.himalayas2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.himalayas2}
													alt="Himalayas"
													loading="lazy"
												/>
											</a>
											<a href={Images.himalayas3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.himalayas3}
													alt="Himalayas"
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
													href={Images.himalayas1}
													className="carousel-item active"
												>
													<img
														src={Images.himalayas1}
														alt="Himalayas"
														loading="lazy"
													/>
												</a>

												<a href={Images.himalayas2} className="carousel-item">
													<img
														src={Images.himalayas2}
														alt="Himalayas"
														loading="lazy"
													/>
												</a>

												<a href={Images.himalayas3} className="carousel-item">
													<img
														src={Images.himalayas3}
														alt="Himalayas"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Himalayas</h1>
										<p>
											The Himalayan Range, often referred to as the "Roof of the
											World," is a magnificent international tourist destination
											that spans several countries, including India, Nepal,
											Bhutan, Tibet (China), and Pakistan. With its towering
											peaks, pristine landscapes, and diverse cultural heritage,
											the Himalayas attract adventurers, nature enthusiasts, and
											spiritual seekers from around the globe.{' '}
											<i>
												Here's a description of the Himalayan Range as an
												international tourist destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Majestic Peaks:</h4>
											<p>
												The Himalayas boast some of the world's highest peaks,
												including Mount Everest, Kanchenjunga, Annapurna, and
												Nanga Parbat. These mountains present a formidable yet
												awe-inspiring sight and serve as a magnet for
												mountaineers, climbers, and trekkers seeking thrilling
												and challenging experiences. The Himalayan range offers
												various trekking routes, from moderate to strenuous,
												allowing visitors to explore its breathtaking
												landscapes, glaciers, and remote villages.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Breathtaking Natural Beauty:
											</h4>
											<p>
												The Himalayas are renowned for their breathtaking
												natural beauty. The region is adorned with alpine
												meadows, cascading waterfalls, crystal-clear rivers,
												pristine lakes, and dense forests teeming with diverse
												flora and fauna. The valleys of Kashmir, Himachal
												Pradesh, and Uttarakhand in India, as well as the
												Annapurna Conservation Area in Nepal, offer stunning
												vistas and ample opportunities for nature walks,
												wildlife spotting, birdwatching, and photography.
											</p>
											<h4 className="mt-lg-5 mt-4">Adventure Sports:</h4>
											<p>
												The Himalayas provide a paradise for adventure
												enthusiasts. From thrilling white-water rafting in the
												gushing rivers to paragliding over the picturesque
												valleys, the region offers a wide array of adventure
												sports. Skiing, snowboarding, mountaineering, rock
												climbing, and mountain biking are popular activities
												that allow visitors to challenge their limits and
												experience the adrenaline rush amidst the stunning
												Himalayan landscapes.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Spiritual and Cultural Experiences:
											</h4>
											<p>
												The Himalayas are deeply rooted in spirituality and are
												home to numerous sacred sites and monasteries. The
												region is considered holy by Hindus, Buddhists, and
												followers of other religions. Visitors can embark on
												spiritual journeys to sacred sites like Rishikesh,
												Varanasi, Lumbini, and the monasteries of Ladakh. These
												places offer opportunities for meditation, yoga
												retreats, and spiritual introspection, allowing
												travelers to immerse themselves in the region's serene
												and mystical ambiance.
											</p>
											<h4 className="mt-lg-5 mt-4">Rich Cultural Heritage:</h4>
											<p>
												The Himalayan region is a melting pot of diverse
												cultures and ethnicities. Each country in the region has
												its unique traditions, festivals, and customs. Visitors
												can witness vibrant cultural celebrations, traditional
												dance performances, and interact with local communities
												to gain insights into the Himalayan way of life. The
												region's cultural heritage is exemplified through
												colorful festivals like Holi, Diwali, Losar, and
												Dashain, which provide a glimpse into the rich cultural
												tapestry of the Himalayan people.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Wellness and Healing Practices:
											</h4>
											<p>
												The serene and tranquil environment of the Himalayas has
												given rise to various wellness and healing practices.
												Visitors can indulge in yoga and meditation retreats,
												Ayurvedic treatments, and wellness programs offered by
												renowned retreat centers. These practices, combined with
												the pristine surroundings, help rejuvenate the mind,
												body, and soul.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									The Himalayan Range, with its towering peaks, stunning
									landscapes, spiritual sanctuaries, adventurous activities, and
									vibrant cultural heritage, offers a transformative and
									awe-inspiring experience for international tourists. It is a
									destination that blends adventure, spirituality, and natural
									beauty, leaving visitors with lifelong memories and a profound
									connection to the grandeur of the mighty Himalayas
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* South India Tour */}
						<div className="row mt-lg-5 mt-4" id="south" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-6 g-3">
											<a href={Images.south3} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.south3}
													alt="South India Tour"
													loading="lazy"
												/>
											</a>
											<a href={Images.south1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.south1}
													alt="South India Tour"
													loading="lazy"
												/>
											</a>
											<a href={Images.south2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.south2}
													alt="South India Tour"
													loading="lazy"
												/>
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
												<a
													href={Images.south3}
													className="carousel-item active"
												>
													<img
														src={Images.south3}
														alt="South India Tour"
														loading="lazy"
													/>
												</a>

												<a href={Images.south1} className="carousel-item">
													<img
														src={Images.south1}
														alt="South India Tour"
														loading="lazy"
													/>
												</a>

												<a href={Images.south2} className="carousel-item">
													<img
														src={Images.south2}
														alt="South India Tour"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>South India</h1>
										<p>
											South India is a captivating region that offers a diverse
											range of tourist destinations for international travelers.
											From ancient temples and historical sites to serene
											backwaters, pristine beaches, and rich cultural
											experiences, South India presents a unique blend of
											heritage, natural beauty, and warm hospitality.{' '}
											<i>
												Here's a description of South Indian tourist
												destinations for international tourists:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Cultural Heritage of Tamil Nadu:
											</h4>
											<p>
												Tamil Nadu is renowned for its rich cultural heritage
												and magnificent temples. Cities like Chennai, Madurai,
												and Thanjavur are home to architectural marvels such as
												the Brihadeeswarar Temple, Meenakshi Amman Temple, and
												Kapaleeshwarar Temple. International tourists can
												witness vibrant classical dance performances like
												Bharatanatyam and explore traditional arts and crafts,
												including Tanjore paintings and silk sarees. The state
												also celebrates various festivals, such as Pongal and
												Navratri, offering a chance to experience the region's
												vibrant traditions.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Backwaters and Houseboats of Kerala:
											</h4>
											<p>
												Kerala's famous backwaters are a major attraction for
												international tourists. Cities like Alleppey and
												Kumarakom offer serene backwater experiences, where
												visitors can cruise along the tranquil canals on
												traditional houseboats known as "kettuvallams." These
												houseboats provide a unique opportunity to witness the
												picturesque landscapes, spot local flora and fauna, and
												enjoy traditional Kerala cuisine while floating on the
												calm waters.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Serene Hill Stations of Karnataka:
											</h4>
											<p>
												The hill stations of Karnataka, such as Coorg, Ooty, and
												Chikmagalur, are ideal retreats for nature lovers.
												Surrounded by lush tea and coffee plantations, these
												hill stations offer breathtaking views, pleasant
												weather, and opportunities for trekking, wildlife
												spotting, and plantation tours. The region's colonial
												heritage is evident in the charming British-era
												bungalows and well-preserved botanical gardens.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Ancient Temples of Andhra Pradesh:
											</h4>
											<p>
												Andhra Pradesh is known for its ancient temples and
												architectural wonders. The Tirupati Balaji Temple,
												located in Tirumala, is one of the most visited
												pilgrimage sites in the world. The Kanaka Durga Temple
												in Vijayawada, Simhachalam Temple in Visakhapatnam, and
												Lepakshi Temple in Anantapur are other significant
												temples that showcase intricate carvings and sculptures.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Wildlife Sanctuaries of Kerala and Tamil Nadu:
											</h4>
											<p>
												South India is home to several wildlife sanctuaries and
												national parks that provide opportunities for wildlife
												enthusiasts. Periyar National Park in Kerala is known
												for its elephant sightings, while Bandipur National Park
												and Mudumalai National Park in Tamil Nadu are home to a
												diverse range of flora and fauna, including tigers,
												deer, and various bird species. Guided safaris and
												nature walks allow visitors to explore these biodiverse
												regions.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									South India, with its cultural heritage, backwaters, hill
									stations, ancient temples, pristine beaches, and wildlife
									sanctuaries, offers international tourists a diverse and
									enriching experience. The region showcases the best of India's
									traditions, natural beauty, and warm hospitality, leaving
									visitors with cherished memories and a deep appreciation for
									the unique charm of South India.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Goa */}
						<div className="row mt-lg-5 mt-4" id="goa" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-7 g-3">
											<a href={Images.goa1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.goa1} alt="Goa" loading="lazy" />
											</a>
											<a href={Images.goa2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.goa2} alt="Goa" loading="lazy" />
											</a>
											<a href={Images.goa3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.goa3} alt="Goa" loading="lazy" />
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
												<a href={Images.goa1} className="carousel-item active">
													<img src={Images.goa1} alt="Goa" loading="lazy" />
												</a>

												<a href={Images.goa2} className="carousel-item">
													<img src={Images.goa2} alt="Goa" loading="lazy" />
												</a>

												<a href={Images.goa3} className="carousel-item">
													<img src={Images.goa3} alt="Goa" loading="lazy" />
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Goa</h1>
										<p>
											Goa, located on the southwestern coast of India, is a
											vibrant and captivating international tourist destination
											renowned for its sun-kissed beaches, lively nightlife,
											colonial architecture, and rich cultural heritage. Known
											as the "Pearl of the Orient," Goa offers a unique blend of
											natural beauty, cultural experiences, and a laid-back
											coastal vibe.{' '}
											<i>
												Here's a description of Goa as an international tourist
												destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Pristine Beaches:</h4>
											<p>
												Goa's stunning coastline stretches along the Arabian
												Sea, offering miles of pristine sandy beaches. From the
												popular beaches of Calangute, Baga, and Anjuna to the
												serene and secluded beaches of Agonda and Palolem, there
												is a beach for every traveler's preference.
												International tourists flock to Goa to soak up the sun,
												swim in the clear waters, engage in water sports like
												surfing and jet skiing, and unwind in beach shacks while
												enjoying fresh seafood.
											</p>
											<h4 className="mt-lg-5 mt-4">Vibrant Nightlife:</h4>
											<p>
												Goa's nightlife scene is legendary and attracts
												partygoers from around the world. The state is dotted
												with numerous beach clubs, bars, and nightclubs where
												international DJs spin infectious tunes, creating an
												electric atmosphere. The vibrant nightlife of Goa is
												especially prominent in areas like Anjuna, Vagator, and
												Arpora, where beach parties and music festivals are held
												regularly.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Portuguese Colonial Architecture:
											</h4>
											<p>
												Goa's rich history as a former Portuguese colony is
												evident in its architecture. The city of Panaji, with
												its colorful Portuguese-style buildings and narrow
												winding streets, exudes old-world charm. The UNESCO
												World Heritage Site of Old Goa is home to magnificent
												churches such as the Basilica of Bom Jesus and Se
												Cathedral, showcasing intricate designs and religious
												relics. International tourists can explore these
												architectural gems and immerse themselves in Goa's
												unique colonial heritage.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Water Sports and Adventure Activities:
											</h4>
											<p>
												Goa offers a wide array of water sports and adventure
												activities for thrill-seekers. Visitors can engage in
												activities like parasailing, banana boat rides, scuba
												diving, and snorkeling to explore the underwater world
												teeming with vibrant marine life. The calm waters of the
												Mandovi and Zuari rivers also provide opportunities for
												kayaking, paddleboarding, and jet skiing.
											</p>
											<h4 className="mt-lg-5 mt-4">Rich Delicious Cuisine:</h4>
											<p>
												Goa's cuisine is a fusion of Indian, Portuguese, and
												coastal flavors, making it a culinary delight for
												international tourists. The state is known for its
												mouthwatering seafood dishes, spicy vindaloo curries,
												and traditional Goan sausages. Visitors can savor the
												flavors at beachside shacks, local eateries, and upscale
												restaurants while enjoying the relaxed ambiance and sea
												views.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Festivals and Cultural Experiences:
											</h4>
											<p>
												Goa's cultural calendar is filled with vibrant festivals
												and celebrations. The Goa Carnival, held in February,
												showcases colorful parades, music, dance, and street
												performances. The Shigmo Festival, celebrated in March,
												features traditional folk dances and processions.
												International tourists have the opportunity to immerse
												themselves in Goa's cultural tapestry by witnessing
												these lively festivities and experiencing the warm
												hospitality of the locals.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Wellness and Yoga Retreats:
											</h4>
											<p>
												Goa has become a popular destination for wellness and
												yoga retreats. The tranquil beaches, serene
												surroundings, and holistic centers attract international
												travelers seeking relaxation, rejuvenation, and
												self-discovery. Visitors can participate in yoga and
												meditation sessions, Ayurvedic treatments, and wellness
												programs offered by renowned retreat centers throughout
												the state.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Goa, with its picturesque beaches, vibrant nightlife, colonial
									charm, delectable cuisine, cultural experiences, and wellness
									offerings, provides international tourists with a unique and
									unforgettable experience. It is a destination that combines
									relaxation, adventure, and cultural immersion, leaving
									visitors with cherished memories and a desire to return to
									this coastal paradise.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Anadaman */}
						<div className="row mt-lg-5 mt-4" id="anadaman" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-8 g-3">
											<a href={Images.anadaman2} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.anadaman2}
													alt="Anadaman and Nicobar Islands"
													loading="lazy"
												/>
											</a>
											<a href={Images.anadaman1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.anadaman1}
													alt="Anadaman and Nicobar Islands"
													loading="lazy"
												/>
											</a>
											<a href={Images.anadaman3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.anadaman3}
													alt="Anadaman and Nicobar Islands"
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
													href={Images.anadaman2}
													className="carousel-item active"
												>
													<img
														src={Images.anadaman2}
														alt="Anadaman and Nicobar Islands"
														loading="lazy"
													/>
												</a>

												<a href={Images.anadaman1} className="carousel-item">
													<img
														src={Images.anadaman1}
														alt="Anadaman and Nicobar Islands"
														loading="lazy"
													/>
												</a>

												<a href={Images.anadaman3} className="carousel-item">
													<img
														src={Images.anadaman3}
														alt="Anadaman and Nicobar Islands"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Anadaman and Nicobar Islands</h1>
										<p>
											The Andaman and Nicobar Islands, located in the Bay of
											Bengal, are a tropical paradise and a captivating tourist
											destination. Known for their pristine beaches, turquoise
											waters, lush rainforests, and rich marine life, these
											islands offer a unique blend of natural beauty, adventure,
											and cultural diversity.{' '}
											<i>
												Here's a description of the Andaman and Nicobar Islands
												as a tourist destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Exquisite Beaches:</h4>
											<p>
												The islands are renowned for their breathtakingly
												beautiful beaches with powdery white sands and
												crystal-clear waters. Radhanagar Beach on Havelock
												Island has consistently been ranked among the best
												beaches in Asia. Other popular beaches include
												Vijaynagar Beach, Wandoor Beach, and Corbyn's Cove
												Beach. Visitors can relax, swim, sunbathe, and indulge
												in water sports like snorkeling, scuba diving, and
												kayaking to explore the vibrant coral reefs and marine
												life.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Pristine Marine Life and Coral Reefs:
											</h4>
											<p>
												The Andaman and Nicobar Islands are a haven for
												underwater enthusiasts and nature lovers. The
												surrounding waters are home to a rich diversity of
												marine life, including colorful coral reefs, tropical
												fish, sea turtles, and even majestic manta rays.
												Snorkeling and scuba diving opportunities abound, with
												several dive sites offering unforgettable underwater
												experiences, such as Elephant Beach, North Bay Island,
												and Neil Island.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Breathtaking Natural Beauty:
											</h4>
											<p>
												The islands are blessed with lush tropical rainforests,
												scenic hills, and mangrove-lined creeks, providing a
												stunning backdrop for nature lovers. Trekking through
												the dense forests of Mount Harriet and exploring the
												limestone caves of Baratang Island are popular
												activities. The islands are also home to unique
												wildlife, including the rare dugongs, saltwater
												crocodiles, and various bird species, making it a
												paradise for wildlife enthusiasts and birdwatchers.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Cellular Jail and Historical Significance:
											</h4>
											<p>
												The Cellular Jail in Port Blair is a significant
												historical site that served as a colonial prison during
												India's struggle for independence. Visitors can take a
												guided tour of the jail to learn about its history and
												the hardships faced by the freedom fighters. The Jail
												Museum provides a glimpse into the past through exhibits
												and photographs, offering a deeper understanding of the
												islands' role in India's independence movement.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Indigenous Tribes and Cultural Diversity:
											</h4>
											<p>
												The Andaman and Nicobar Islands are home to several
												indigenous tribes, including the Jarawa, Sentinelese,
												and Onge. While contact with these tribes is strictly
												regulated to protect their way of life and preserve
												their cultural heritage, visitors can learn about their
												traditions and lifestyles through organized cultural
												programs and museums.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Ross Island and Ross Island Museum:
											</h4>
											<p>
												Ross Island, located near Port Blair, was the
												administrative headquarters of the British during their
												rule. Today, it stands as a testimony to the colonial
												era, with remnants of the British architecture,
												including a church, a bakery, and the Commissioner's
												residence. The Ross Island Museum showcases photographs
												and artifacts that depict the island's history.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Water Sports and Adventure Activities:
											</h4>
											<p>
												The Andaman and Nicobar Islands offer a range of
												adventure activities for thrill-seekers. Jet skiing,
												banana boat rides, parasailing, and sea walking are
												popular water sports options. The islands also provide
												opportunities for trekking, kayaking through mangrove
												forests, and exploring the underwater world on a
												semi-submarine ride.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									The Andaman and Nicobar Islands, with their stunning beaches,
									vibrant marine life, lush rainforests, historical
									significance, and cultural diversity, offer a unique and
									unforgettable experience for tourists. Whether it's relaxing
									on pristine shores, diving into the depths of the sea,
									immersing oneself in history, or exploring the natural
									wonders, these islands provide an enchanting escape into
									tropical paradise.
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
