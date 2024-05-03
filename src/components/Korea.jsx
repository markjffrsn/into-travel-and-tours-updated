import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Icons from './Icons';
import Aos from 'aos';
import Footer from './Footer';

export default function Korea() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/korea.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="container">
						<h1>South Korea</h1>
						<p>
							Dive into the vibrant K-pop culture, indulge in mouthwatering
							Korean barbecue, and experience the tranquility of ancient palaces
							like Seoul.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in South Korea
						</h2>

						{/* Jeju */}
						<div className="row mt-lg-5 mt-4" id="jeju" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.jeju3} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.jeju3} alt="Jeju" loading="lazy" />
											</a>
											<a href={Images.jeju1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.jeju1} alt="Jeju" loading="lazy" />
											</a>
											<a href={Images.jeju2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.jeju2} alt="Jeju" loading="lazy" />
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
												<a href={Images.jeju3} className="carousel-item active">
													<img src={Images.jeju3} alt="Jeju" loading="lazy" />
												</a>

												<a href={Images.jeju1} className="carousel-item">
													<img src={Images.jeju1} alt="Jeju" loading="lazy" />
												</a>

												<a href={Images.jeju2} className="carousel-item">
													<img src={Images.jeju2} alt="Jeju" loading="lazy" />
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Jeju</h1>
										<p>
											Jeju Island, located off the southern coast of South
											Korea, is a picturesque and enchanting tourist destination
											known for its natural wonders, stunning landscapes, and
											unique cultural heritage. Often referred to as the "Hawaii
											of South Korea," Jeju Island offers visitors a diverse
											range of experiences, from exploring volcanic terrain and
											pristine beaches to immersing themselves in local
											traditions.{' '}
											<i>
												Here's a description of Jeju as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Hallasan National Park:</h4>
											<p>
												At the heart of Jeju Island lies Hallasan, an iconic
												dormant volcano and South Korea's highest mountain.
												Hallasan National Park offers hiking trails that lead
												visitors through lush forests, past scenic waterfalls,
												and up to the volcanic peak, where breathtaking views of
												the island await.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Seongsan Ilchulbong (Sunrise Peak):
											</h4>
											<p>
												A UNESCO World Heritage site, Seongsan Ilchulbong is a
												volcanic crater formed by an underwater eruption.
												Visitors can climb to the top of the peak to witness the
												sunrise and enjoy panoramic views of the surrounding
												ocean and the dramatic landscape.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Jeju Folk Village Museum:
											</h4>
											<p>
												This open-air museum provides a glimpse into traditional
												Jeju Island village life. Visitors can explore
												traditional thatched-roof houses, watch cultural
												performances, and learn about the island's history, folk
												traditions, and unique customs.
											</p>
											<h4 className="mt-lg-5 mt-4">Manjanggul Cave:</h4>
											<p>
												As one of the largest lava tube caves in the world,
												Manjanggul Cave offers a fascinating underground
												experience. Visitors can walk through the well-preserved
												cave system, marvel at its unique geological formations,
												and learn about the volcanic history of the island.
											</p>
											<h4 className="mt-lg-5 mt-4">Jeongbang Waterfall:</h4>
											<p>
												Located on the southern coast of Jeju Island, Jeongbang
												Waterfall is one of the few waterfalls in Asia that
												directly flows into the ocean. Visitors can admire the
												impressive cascade, feel the mist on their faces, and
												enjoy the scenic coastal views.
											</p>
											<h4 className="mt-lg-5 mt-4">Jeju Loveland:</h4>
											<p>
												Known for its unique theme, Jeju Loveland is an outdoor
												sculpture park dedicated to the celebration of love and
												sexuality. Visitors can explore a collection of
												provocative and often humorous sculptures that depict
												various aspects of human relationships and intimacy.
											</p>
											<h4 className="mt-lg-5 mt-4">Jeju Teddy Bear Museum:</h4>
											<p>
												This whimsical museum showcases an extensive collection
												of teddy bears from around the world. Visitors can
												admire teddy bear exhibits depicting historical events,
												famous personalities, and cultural scenes, and even
												participate in interactive activities.
											</p>
											<h4 className="mt-lg-5 mt-4"> Cheonjiyeon Waterfall:</h4>
											<p>
												Located in Seogwipo, Cheonjiyeon Waterfall is a
												picturesque natural attraction surrounded by lush
												vegetation. Visitors can enjoy a peaceful walk along the
												trail leading to the waterfall, and marvel at its
												crystal-clear waters cascading down into a beautiful
												pool.
											</p>
											<h4 className="mt-lg-5 mt-4">Jeju Haenyeo Museum:</h4>
											<p>
												The Haenyeo Museum pays homage to the island's female
												divers, known as haenyeo, who have been collecting
												seafood without the use of diving equipment for
												centuries. Visitors can learn about the unique diving
												culture, watch demonstrations, and gain insights into
												the lives of these skilled women.
											</p>
											<h4 className="mt-lg-5 mt-4">Jeju Olle Trail:</h4>
											<p>
												For nature enthusiasts and hikers, the Jeju Olle Trail
												offers a network of well-marked walking paths that lead
												through diverse landscapes, including coastal cliffs,
												forests, and picturesque villages. Visitors can choose
												from various trail sections and enjoy the island's
												natural beauty at their own pace.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Jeju Island's combination of breathtaking natural landscapes,
									cultural attractions, and unique experiences make it a
									captivating tourist destination. Whether you're interested in
									exploring volcanic wonders, immersing yourself in local
									traditions, or simply enjoying the island's serene beauty,
									Jeju offers an unforgettable journey for visitors of all ages.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Seoul */}
						<div className="row mt-lg-5 mt-4" id="seoul" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-2 g-3">
											<a href={Images.seoul1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.seoul1} alt="Seoul" loading="lazy" />
											</a>
											<a href={Images.seoul2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.seoul2} alt="Seoul" loading="lazy" />
											</a>
											<a href={Images.seoul3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.seoul3} alt="Seoul" loading="lazy" />
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
													href={Images.seoul1}
													className="carousel-item active"
												>
													<img src={Images.seoul1} alt="Seoul" loading="lazy" />
												</a>

												<a href={Images.seoul2} className="carousel-item">
													<img src={Images.seoul2} alt="Seoul" loading="lazy" />
												</a>

												<a href={Images.seoul3} className="carousel-item">
													<img src={Images.seoul3} alt="Seoul" loading="lazy" />
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Seoul</h1>
										<p>
											Seoul, the vibrant capital city of South Korea, is a
											bustling metropolis that seamlessly blends rich history,
											modern architecture, and a thriving cultural scene. With
											its mix of ancient palaces, bustling markets, trendy
											neighborhoods, and delicious cuisine, Seoul offers
											visitors a dynamic and unforgettable experience.{' '}
											<i>
												Here's a description of Seoul as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Gyeongbokgung Palace:</h4>
											<p>
												As the largest and most iconic palace in Seoul,
												Gyeongbokgung Palace is a must-visit destination for
												history buffs. Visitors can explore the grand palace
												complex, witness the changing of the guards ceremony,
												and learn about the Joseon Dynasty's fascinating
												history.
											</p>
											<h4 className="mt-lg-5 mt-4">Bukchon Hanok Village:</h4>
											<p>
												Nestled between Gyeongbokgung Palace and Changdeokgung
												Palace, Bukchon Hanok Village is a traditional
												neighborhood where visitors can wander through narrow
												alleys lined with well-preserved hanok (traditional
												Korean houses). The village offers a glimpse into
												Seoul's past while showcasing a harmonious blend of old
												and new.
											</p>
											<h4 className="mt-lg-5 mt-4">Myeongdong:</h4>
											<p>
												Known as one of Seoul's busiest shopping districts,
												Myeongdong is a mecca for fashion enthusiasts and beauty
												lovers. Visitors can explore countless shops selling
												Korean cosmetics, trendy clothing, and accessories, as
												well as enjoy diverse street food options.
											</p>
											<h4 className="mt-lg-5 mt-4">N Seoul Tower:</h4>
											<p>
												Standing tall atop Namsan Mountain, N Seoul Tower offers
												panoramic views of the city skyline. Visitors can take a
												cable car or hike up the mountain to reach the
												observation deck, where they can admire the breathtaking
												vistas, enjoy romantic moments, and even leave their own
												love padlocks.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Dongdaemun Design Plaza (DDP):
											</h4>
											<p>
												Designed by world-renowned architect Zaha Hadid, the DDP
												is a futuristic landmark that showcases Seoul's
												commitment to design and innovation. Visitors can
												explore exhibitions, attend fashion shows, and shop for
												cutting-edge fashion and design products.
											</p>
											<h4 className="mt-lg-5 mt-4">Insadong:</h4>
											<p>
												A vibrant neighborhood filled with art galleries,
												traditional teahouses, and antique shops, Insadong
												offers a glimpse into traditional Korean culture and
												arts. Visitors can browse unique handicrafts, enjoy a
												traditional tea ceremony, and experience the bustling
												street market atmosphere.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Changdeokgung Palace and Secret Garden:
											</h4>
											<p>
												Another UNESCO World Heritage site, Changdeokgung Palace
												is renowned for its beautiful architecture and serene
												gardens. Visitors can explore the palace's royal
												quarters and stroll through the Secret Garden, a
												tranquil oasis with ponds, pavilions, and picturesque
												landscapes.
											</p>
											<h4 className="mt-lg-5 mt-4">Hongdae:</h4>
											<p>
												Known for its youthful energy and vibrant nightlife,
												Hongdae is a neighborhood that caters to Seoul's
												artistic and creative community. Visitors can explore
												independent boutiques, enjoy live performances by street
												artists and indie bands, and experience the trendy café
												culture.
											</p>
											<h4 className="mt-lg-5 mt-4">Namdaemun Market:</h4>
											<p>
												As one of the oldest and largest traditional markets in
												South Korea, Namdaemun Market offers a sensory delight
												for shoppers and food lovers. Visitors can wander
												through narrow alleys filled with stalls selling
												clothing, accessories, and street food, immersing
												themselves in the vibrant atmosphere.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Korean War Memorial and Museum:
											</h4>
											<p>
												For those interested in Korean history and the Korean
												War, the Korean War Memorial and Museum provides a
												comprehensive overview of the conflict. Visitors can
												learn about the war's impact, explore outdoor exhibits
												of military equipment, and pay tribute to the fallen
												soldiers.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Seoul's combination of ancient traditions, modern innovation,
									and vibrant street culture make it an exciting and diverse
									tourist destination. Whether you're interested in exploring
									historical landmarks, indulging in delicious street food, or
									immersing yourself in the city's dynamic atmosphere, Seoul
									offers a captivating journey for visitors of all interests.
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
