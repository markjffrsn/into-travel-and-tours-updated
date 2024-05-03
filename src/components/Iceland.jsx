import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Iceland() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/iceland.jpg)',
					}}
				>
					<div className="container">
						<h1>Iceland</h1>
						<p>
							Discover stunning waterfalls, unwind in geothermal hot springs,
							and witness the enchanting Northern Lights in this land of fire
							and ice.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Iceland
						</h2>

						{/* Iceland */}
						<div className="row mt-lg-5 mt-4" id="iceland" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.iceland1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.iceland1}
													alt="Iceland"
													loading="lazy"
												/>
											</a>
											<a href={Images.iceland2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.iceland2}
													alt="Iceland"
													loading="lazy"
												/>
											</a>

											<a href={Images.iceland3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.iceland3}
													alt="Iceland"
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
													href={Images.iceland1}
													className="carousel-item active"
												>
													<img
														src={Images.iceland1}
														alt="Iceland"
														loading="lazy"
													/>
												</a>

												<a href={Images.iceland2} className="carousel-item">
													<img
														src={Images.iceland2}
														alt="Iceland"
														loading="lazy"
													/>
												</a>

												<a href={Images.iceland3} className="carousel-item">
													<img
														src={Images.iceland3}
														alt="Iceland"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Iceland</h1>
										<p>
											Iceland, a land of fire and ice, is a breathtaking and
											otherworldly tourist destination that captivates visitors
											with its stunning landscapes, geothermal wonders, and
											unique natural phenomena. From majestic waterfalls and
											geysers to lava fields and icy glaciers, Iceland offers a
											surreal and immersive experience for nature enthusiasts
											and adventure seekers.{' '}
											<i>
												Here's a description of Iceland as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">The Golden Circle:</h4>
											<p>
												The Golden Circle is a popular tourist route that
												encompasses three major attractions: Thingvellir
												National Park, Geysir geothermal area, and Gullfoss
												waterfall. Thingvellir is a UNESCO World Heritage site
												known for its historical and geological significance.
												Geysir features erupting geysers, including the famous
												Strokkur, which shoots water high into the air. Gullfoss
												is a stunning two-tiered waterfall, one of Iceland's
												most iconic natural wonders.
											</p>
											<h4 className="mt-lg-5 mt-4">Reykjavik:</h4>
											<p>
												Iceland's vibrant capital city, Reykjavik, offers a
												blend of cosmopolitan culture and natural beauty.
												Visitors can explore the city's colorful streets, visit
												landmarks such as Hallgrímskirkja Church, Harpa Concert
												Hall, and the Sun Voyager sculpture. Reykjavik also
												boasts a lively music and arts scene, excellent
												restaurants serving local cuisine, and a chance to
												experience the vibrant Icelandic nightlife.
											</p>
											<h4 className="mt-lg-5 mt-4">The Blue Lagoon:</h4>
											<p>
												Located in a lava field on the Reykjanes Peninsula, the
												Blue Lagoon is a geothermal spa renowned for its
												milky-blue mineral-rich waters. Visitors can relax in
												the warm, geothermal seawater, enjoy spa treatments, and
												indulge in the unique experience of bathing in this
												otherworldly setting.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Vatnajökull National Park:
											</h4>
											<p>
												Vatnajökull National Park is the largest national park
												in Europe, covering a vast area of glaciers, volcanoes,
												and stunning landscapes. Visitors can witness the
												breathtaking Jökulsárlón Glacier Lagoon, hike through
												the otherworldly landscapes of Skaftafell, and explore
												ice caves and ice tunnels within the Vatnajökull
												glacier.
											</p>
											<h4 className="mt-lg-5 mt-4">The Ring Road:</h4>
											<p>
												Iceland's Ring Road, also known as Route 1, circles the
												entire island and offers a fantastic road trip
												experience. Travelers can witness a variety of
												landscapes, including waterfalls like Seljalandsfoss and
												Skógafoss, black sand beaches such as Reynisfjara and
												Dyrhólaey, and majestic volcanic landscapes like
												Landmannalaugar and the Mývatn region.
											</p>
											<h4 className="mt-lg-5 mt-4">The Northern Lights:</h4>
											<p>
												Iceland is one of the best places in the world to
												witness the mesmerizing Northern Lights (Aurora
												Borealis). During the winter months, visitors can embark
												on Northern Lights tours in remote areas with minimal
												light pollution, increasing the chances of experiencing
												this awe-inspiring natural phenomenon.
											</p>
											<h4 className="mt-lg-5 mt-4">The Westfjords:</h4>
											<p>
												The Westfjords region offers rugged landscapes, dramatic
												cliffs, and isolated fjords, making it a haven for
												nature lovers and outdoor enthusiasts. Visitors can hike
												along the stunning Hornstrandir Nature Reserve, soak in
												natural hot springs, and spot wildlife such as puffins
												and seals.
											</p>
											<h4 className="mt-lg-5 mt-4">Landmannalaugar:</h4>
											<p>
												Situated in the highlands of Iceland, Landmannalaugar is
												a geothermal wonderland known for its colorful rhyolite
												mountains, hot springs, and lava fields. It offers
												excellent hiking opportunities, including the popular
												Laugavegur Trail, which takes hikers through some of
												Iceland's most stunning landscapes.
											</p>
											<h4 className="mt-lg-5 mt-4">Dettifoss:</h4>
											<p>
												Dettifoss is Europe's most powerful waterfall, located
												in the northern part of Iceland. Its thunderous cascades
												and mist create a dramatic spectacle that leaves
												visitors in awe. Hiking trails around Dettifoss also
												provide stunning views of the surrounding basalt cliffs
												and canyons.
											</p>
											<h4 className="mt-lg-5 mt-4">Snæfellsnes Peninsula:</h4>
											<p>
												Often referred to as "Iceland in Miniature," the
												Snæfellsnes Peninsula showcases a variety of natural
												wonders. Visitors can explore the iconic Kirkjufell
												mountain, hike along the dramatic coastline, visit
												charming fishing villages, and witness the
												Snæfellsjökull volcano, said to be the entrance to the
												center of the Earth in Jules Verne's "Journey to the
												Center of the Earth."
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									Iceland's surreal landscapes, geothermal wonders, and unique
									natural phenomena make it a truly extraordinary destination.
									Whether you're chasing the Northern Lights, exploring volcanic
									landscapes, or relaxing in geothermal spas, Iceland offers an
									otherworldly adventure that will leave a lasting impression on
									any traveler.
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
