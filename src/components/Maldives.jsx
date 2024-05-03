import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Maldives() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/maldives.jpg)',
					}}
				>
					<div className="container">
						<h1>Maldives</h1>
						<p>
							Relax in luxury resorts with pristine white sand beaches and
							crystal-clear turquoise waters, and enjoy exceptional snorkeling
							and diving experiences.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Maldives
						</h2>

						{/* Maldives */}
						<div className="row mt-lg-5 mt-4" id="maldives" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.maldives2} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.maldives2}
													alt="Maldives"
													loading="lazy"
												/>
											</a>
											<a href={Images.maldives1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.maldives1}
													alt="Maldives"
													loading="lazy"
												/>
											</a>

											<a href={Images.maldives3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.maldives3}
													alt="Maldives"
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
													href={Images.maldives2}
													className="carousel-item active"
												>
													<img
														src={Images.maldives2}
														alt="Maldives"
														loading="lazy"
													/>
												</a>

												<a href={Images.maldives1} className="carousel-item">
													<img
														src={Images.maldives1}
														alt="Maldives"
														loading="lazy"
													/>
												</a>

												<a href={Images.maldives3} className="carousel-item">
													<img
														src={Images.maldives3}
														alt="Maldives"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Maldives</h1>
										<p>
											The Maldives, a tropical paradise in the Indian Ocean, is
											a renowned tourist destination known for its breathtaking
											natural beauty, pristine white sandy beaches,
											crystal-clear turquoise waters, and vibrant marine life.
											Comprised of a chain of islands and atolls, the Maldives
											offers visitors a secluded and luxurious escape with a
											range of attractions and activities.{' '}
											<i>
												Here's a description of the Maldives as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Overwater Villas and Luxury Resorts:
											</h4>
											<p>
												The Maldives is famous for its luxurious overwater
												villas, where guests can enjoy direct access to the
												turquoise lagoons and experience unparalleled privacy
												and relaxation. Many resorts offer indulgent amenities,
												such as private pools, spa services, and fine dining
												experiences, allowing visitors to unwind in an idyllic
												setting.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Pristine Beaches and Crystal-Clear Waters:
											</h4>
											<p>
												The Maldives boasts some of the most pristine and
												beautiful beaches in the world. Visitors can bask in the
												sun on soft white sands, swim in the warm turquoise
												waters, and marvel at the stunning coral reefs just a
												short distance from the shore.
											</p>
											<h4 className="mt-lg-5 mt-4">Snorkeling and Diving:</h4>
											<p>
												With its abundant marine life and vibrant coral reefs,
												the Maldives is a paradise for snorkelers and divers.
												Visitors can explore colorful coral gardens, encounter
												tropical fish, sea turtles, manta rays, and even spot
												whale sharks in certain areas. Many resorts offer guided
												snorkeling and diving excursions, ensuring unforgettable
												underwater experiences.
											</p>
											<h4 className="mt-lg-5 mt-4">Underwater Restaurants:</h4>
											<p>
												The Maldives is home to unique underwater dining
												experiences, where visitors can enjoy a meal while
												surrounded by the mesmerizing marine life. These
												restaurants offer stunning panoramic views of the
												underwater world, creating a truly immersive and
												unforgettable dining experience.
											</p>
											<h4 className="mt-lg-5 mt-4">Malé, the Capital City:</h4>
											<p>
												Although the Maldives is mostly known for its secluded
												resorts, the capital city of Malé offers a taste of
												local Maldivian culture. Visitors can explore colorful
												markets, visit historic sites like the Grand Friday
												Mosque and the President's Palace, and learn about the
												country's history and traditions.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Watersports and Excursions:
											</h4>
											<p>
												The Maldives provides ample opportunities for
												watersports enthusiasts. Visitors can enjoy activities
												such as kayaking, jet-skiing, parasailing, windsurfing,
												and stand-up paddleboarding. Many resorts also offer
												sunset cruises, fishing trips, and dolphin-watching
												excursions.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Baa Atoll and Hanifaru Bay:
											</h4>
											<p>
												Baa Atoll, a UNESCO Biosphere Reserve, is home to
												Hanifaru Bay, a renowned marine hotspot. Hanifaru Bay is
												a gathering site for manta rays and whale sharks,
												offering visitors the chance to witness these majestic
												creatures up close. Snorkeling or diving in Hanifaru Bay
												is a must-do experience for nature lovers.
											</p>
											<h4 className="mt-lg-5 mt-4">Cultural Excursions:</h4>
											<p>
												Beyond the beaches, visitors can delve into the local
												Maldivian culture and traditions. Excursions to local
												islands offer insights into the daily lives of Maldivian
												communities, allowing visitors to experience traditional
												handicrafts, music, dance, and local cuisine.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Spa and Wellness Retreats:
											</h4>
											<p>
												The Maldives is an ideal destination for relaxation and
												rejuvenation. Many resorts offer world-class spas and
												wellness retreats, providing a range of therapeutic
												treatments and holistic experiences to nurture the body,
												mind, and soul.
											</p>
											<h4 className="mt-lg-5 mt-4">Private Island Escapes:</h4>
											<p>
												For those seeking ultimate seclusion and privacy, the
												Maldives offers private island escapes where guests can
												have an entire island to themselves. These exclusive
												resorts provide unparalleled luxury, ensuring a truly
												intimate and personalized experience.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									The Maldives' pristine natural beauty, luxurious
									accommodations, and wealth of water-based activities make it a
									dream destination for travelers seeking relaxation, adventure,
									and romance. Whether you're basking on the beaches, exploring
									underwater wonders, indulging in luxurious resorts, or
									immersing yourself in local culture, the Maldives offers an
									unforgettable tropical getaway.
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
