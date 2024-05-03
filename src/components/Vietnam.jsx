import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Icons from './Icons';
import Aos from 'aos';
import Footer from './Footer';

export default function Vietnam() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/vietnam.jpg)',
					}}
				>
					<div className="container">
						<h1>Vietnam</h1>
						<p>
							Cruise through the breathtaking Halong Bay, explore bustling
							streets in Hanoi, and enjoy the flavorsome street food offerings.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center" data-aos="fade-up">
							<i> Discover </i> the popular tourist spots in the Vietnam
						</h2>

						{/* Vietnam */}
						<div className="row mt-lg-5 mt-4" id="vietnam" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.vietnam1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.vietnam1}
													alt="Vietnam"
													loading="lazy"
												/>
											</a>
											<a href={Images.vietnam2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.vietnam2}
													alt="Vietnam"
													loading="lazy"
												/>
											</a>
											<a href={Images.vietnam3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.vietnam3}
													alt="Vietnam"
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
													href={Images.vietnam1}
													className="carousel-item active"
												>
													<img
														src={Images.vietnam1}
														alt="Vietnam"
														loading="lazy"
													/>
												</a>

												<a href={Images.vietnam2} className="carousel-item">
													<img
														src={Images.vietnam2}
														alt="Vietnam"
														loading="lazy"
													/>
												</a>

												<a href={Images.vietnam3} className="carousel-item">
													<img
														src={Images.vietnam3}
														alt="Vietnam"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Vietnam</h1>
										<p>
											Vietnam, located in Southeast Asia, is a captivating and
											diverse tourist destination known for its stunning
											landscapes, rich history, vibrant culture, and delicious
											cuisine. From the bustling streets of Hanoi to the
											picturesque landscapes of Halong Bay and the ancient town
											of Hoi An, Vietnam offers visitors a blend of natural
											beauty, cultural heritage, and warm hospitality.{' '}
											<i>
												Here's a description of Vietnam as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Hanoi:</h4>
											<p>
												The capital city of Vietnam, Hanoi, is a bustling
												metropolis that seamlessly blends ancient traditions
												with modern developments. Visitors can explore the
												charming Old Quarter with its narrow streets and
												historic buildings, visit the Ho Chi Minh Mausoleum
												Complex, experience traditional water puppetry shows,
												and savor the city's renowned street food.
											</p>
											<h4 className="mt-lg-5 mt-4">Halong Bay:</h4>
											<p>
												A UNESCO World Heritage site, Halong Bay is a
												breathtaking natural wonder known for its emerald
												waters, towering limestone karsts, and floating fishing
												villages. Visitors can take a cruise through the bay,
												kayak around the limestone islands, explore stunning
												caves, and witness memorable sunsets over the karst
												formations.
											</p>
											<h4 className="mt-lg-5 mt-4">Hoi An:</h4>
											<p>
												This ancient trading port on the central coast of
												Vietnam is renowned for its well-preserved historic
												architecture, atmospheric lantern-lit streets, and rich
												cultural heritage. Visitors can wander through the
												UNESCO-listed Old Town, visit traditional Chinese
												temples and Japanese covered bridges, explore local
												markets, and have clothes tailored by skilled local
												artisans.
											</p>
											<h4 className="mt-lg-5 mt-4">Ho Chi Minh City:</h4>
											<p>
												Formerly known as Saigon, Ho Chi Minh City is a vibrant
												and dynamic city that showcases both modern skyscrapers
												and historic landmarks. Visitors can explore the
												bustling Ben Thanh Market, visit the War Remnants Museum
												to learn about Vietnam's history, and experience the
												energy of the city's streets filled with motorbikes.
											</p>
											<h4 className="mt-lg-5 mt-4">Hue:</h4>
											<p>
												Situated on the banks of the Perfume River, Hue is the
												former imperial capital of Vietnam and offers a glimpse
												into the country's royal past. Visitors can explore the
												UNESCO-listed Imperial City, visit the majestic Thien Mu
												Pagoda, and take a boat ride along the Perfume River to
												enjoy the scenic landscapes.
											</p>
											<h4 className="mt-lg-5 mt-4">Sapa:</h4>
											<p>
												Nestled in the mountainous region of northern Vietnam,
												Sapa is known for its terraced rice fields, ethnic
												minority villages, and breathtaking mountain scenery.
												Visitors can trek through the picturesque landscapes,
												visit local villages, interact with ethnic minority
												communities, and witness their unique traditional
												customs.
											</p>
											<h4 className="mt-lg-5 mt-4">Mekong Delta:</h4>
											<p>
												The Mekong Delta, located in the southern part of
												Vietnam, is a lush region of rivers, canals, and rice
												fields. Visitors can take boat tours along the Mekong
												River, visit floating markets, explore fruit orchards
												and coconut candy factories, and experience the
												traditional rural lifestyle of the delta.
											</p>
											<h4 className="mt-lg-5 mt-4">Nha Trang:</h4>
											<p>
												With its stunning beaches and crystal-clear waters, Nha
												Trang is a popular coastal destination. Visitors can
												relax on the sandy shores, indulge in water sports like
												snorkeling and diving, and take boat trips to nearby
												islands for a day of island hopping and exploration.
											</p>
											<h4 className="mt-lg-5 mt-4">Phu Quoc Island:</h4>
											<p>
												Located in the Gulf of Thailand, Phu Quoc Island is a
												tropical paradise known for its pristine beaches,
												vibrant coral reefs, and lush national parks. Visitors
												can relax on the white sandy beaches, go snorkeling or
												scuba diving, explore the island's interior with its
												waterfalls and wildlife, and indulge in fresh seafood.
											</p>
											<h4 className="mt-lg-5 mt-4">Dalat:</h4>
											<p>
												Situated in the central highlands, Dalat offers a
												refreshing change of scenery with its cooler climate and
												picturesque landscapes. Visitors can explore the French
												colonial architecture, visit colorful flower gardens,
												enjoy outdoor activities like hiking and biking, and
												savor the region's famous coffee and wine.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Vietnam's combination of natural beauty, cultural heritage,
									and mouthwatering cuisine make it an enticing tourist
									destination. Whether you're exploring ancient cities, cruising
									through stunning landscapes, immersing yourself in local
									traditions, or indulging in delicious street food, Vietnam
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
