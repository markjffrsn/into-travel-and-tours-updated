import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Newzealand() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/newzealand.jpg)',
					}}
				>
					<div className="container">
						<h1>Newzealand</h1>
						<p>
							Immerse yourself in breathtaking natural landscapes, from the
							majestic fjords of Milford Sound to the geothermal wonders of
							Rotorua.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Newzealand
						</h2>

						{/* Newzealand */}
						<div
							className="row mt-lg-5 mt-4"
							id="newzealand"
							data-aos="fade-up"
						>
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.newzealand1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.newzealand1}
													alt="Newzealand"
													loading="lazy"
												/>
											</a>
											<a href={Images.newzealand2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.newzealand2}
													alt="Newzealand"
													loading="lazy"
												/>
											</a>

											<a href={Images.newzealand3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.newzealand3}
													alt="Newzealand"
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
													href={Images.newzealand1}
													className="carousel-item active"
												>
													<img
														src={Images.newzealand1}
														alt="Newzealand"
														loading="lazy"
													/>
												</a>

												<a href={Images.newzealand2} className="carousel-item">
													<img
														src={Images.newzealand2}
														alt="Newzealand"
														loading="lazy"
													/>
												</a>

												<a href={Images.newzealand3} className="carousel-item">
													<img
														src={Images.newzealand3}
														alt="Newzealand"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Newzealand</h1>
										<p>
											New Zealand, a breathtaking country in the southwestern
											Pacific Ocean, is a dream destination for nature lovers,
											adventure enthusiasts, and those seeking stunning
											landscapes and unique cultural experiences. From its
											snow-capped mountains and pristine lakes to its vibrant
											cities and Maori heritage, New Zealand offers visitors a
											diverse range of attractions and activities.{' '}
											<i>
												Here's a description of New Zealand as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Fiordland National Park and Milford Sound:
											</h4>
											<p>
												Located in the southwest of the South Island, Fiordland
												National Park is a UNESCO World Heritage site known for
												its stunning fjords, towering peaks, and lush
												rainforests. Milford Sound, one of the park's most
												iconic attractions, offers visitors the chance to cruise
												through the dramatic fiord, surrounded by waterfalls and
												sheer cliffs.
											</p>
											<h4 className="mt-lg-5 mt-4">Tongariro National Park:</h4>
											<p>
												Situated in the central North Island, Tongariro National
												Park is another UNESCO World Heritage site renowned for
												its volcanic landscapes and the famous Tongariro Alpine
												Crossing. Visitors can hike across active volcanoes,
												witness steaming geothermal areas, and enjoy
												breathtaking views of emerald lakes and rugged terrain.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Abel Tasman National Park:
											</h4>
											<p>
												Located at the top of the South Island, Abel Tasman
												National Park is known for its golden beaches,
												crystal-clear waters, and lush coastal forests. Visitors
												can kayak along the stunning coastline, hike scenic
												trails, and relax on pristine beaches such as Anchorage
												Bay and Torrent Bay.
											</p>
											<h4 className="mt-lg-5 mt-4">Queenstown:</h4>
											<p>
												Often referred to as the "Adventure Capital of the
												World," Queenstown is a vibrant resort town nestled in
												the Southern Alps of the South Island. Visitors can
												enjoy a wide range of thrilling activities, including
												bungee jumping, skydiving, jet boating, skiing, and
												snowboarding. Queenstown also offers stunning lake and
												mountain views, excellent dining options, and a lively
												nightlife.
											</p>
											<h4 className="mt-lg-5 mt-4">Rotorua:</h4>
											<p>
												Known for its geothermal activity and Maori culture,
												Rotorua offers visitors a unique experience. They can
												explore geothermal parks such as Wai-O-Tapu and Te Puia,
												witness erupting geysers, soak in hot mineral pools, and
												learn about the indigenous Maori heritage through
												cultural performances and traditional hangi meals.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Aoraki/Mount Cook National Park:
											</h4>
											<p>
												Aoraki/Mount Cook National Park is home to the highest
												peak in New Zealand, Mount Cook. The park's rugged
												alpine landscapes, glaciers, and turquoise lakes offer
												incredible hiking and mountaineering opportunities.
												Visitors can enjoy scenic walks, take helicopter tours,
												or stargaze in the International Dark Sky Reserve.
											</p>
											<h4 className="mt-lg-5 mt-4">Wellington:</h4>
											<p>
												New Zealand's capital city, Wellington, offers a vibrant
												arts scene, a thriving café culture, and a picturesque
												waterfront. Visitors can explore Te Papa Museum, visit
												the Weta Workshop to discover the world of film
												production, and enjoy the city's vibrant culinary and
												craft beer scene.
											</p>
											<h4 className="mt-lg-5 mt-4">Waitomo Glowworm Caves:</h4>
											<p>
												Located in the North Island, the Waitomo Glowworm Caves
												are a magical underground network of caves illuminated
												by thousands of glowworms. Visitors can take boat tours
												or go on adventurous caving expeditions to witness this
												mesmerizing natural phenomenon.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Fox and Franz Josef Glaciers:
											</h4>
											<p>
												These iconic glaciers on the West Coast of the South
												Island offer visitors a unique opportunity to explore a
												frozen world. Visitors can take guided walks, heli-hike
												tours, or scenic flights to witness the blue ice
												formations and breathtaking glacial landscapes.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Maori Cultural Experiences:
											</h4>
											<p>
												Throughout New Zealand, visitors have the chance to
												engage with the indigenous Maori culture. They can
												participate in traditional ceremonies, enjoy Maori
												performances, visit marae (Maori meeting grounds), and
												learn about the rich heritage and stories of the Maori
												people.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									New Zealand's stunning landscapes, adventure opportunities,
									and cultural experiences make it a bucket-list destination.
									Whether you're exploring dramatic fjords, hiking in volcanic
									landscapes, immersing yourself in Maori culture, or indulging
									in adrenaline-pumping activities, New Zealand offers an
									unforgettable journey filled with natural wonders and unique
									cultural encounters.
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
