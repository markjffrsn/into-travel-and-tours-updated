import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Cambodia() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/cambodia.jpg)',
					}}
				>
					<div className="container">
						<h1>Cambodia</h1>
						<p>
							Discover the awe-inspiring Angkor Wat temple complex, experience
							the warm Khmer hospitality, and explore the charming streets of
							Phnom Penh.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Cambodia
						</h2>

						{/* Cambodia */}
						<div className="row mt-lg-5 mt-4" id="cambodia" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.cambodia1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.cambodia1}
													alt="Cambodia"
													loading="lazy"
												/>
											</a>
											<a href={Images.cambodia2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.cambodia2}
													alt="Cambodia"
													loading="lazy"
												/>
											</a>

											<a href={Images.cambodia3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.cambodia3}
													alt="Cambodia"
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
													href={Images.cambodia1}
													className="carousel-item active"
												>
													<img
														src={Images.cambodia1}
														alt="Cambodia"
														loading="lazy"
													/>
												</a>

												<a href={Images.cambodia2} className="carousel-item">
													<img
														src={Images.cambodia2}
														alt="Cambodia"
														loading="lazy"
													/>
												</a>

												<a href={Images.cambodia3} className="carousel-item">
													<img
														src={Images.cambodia3}
														alt="Cambodia"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Cambodia</h1>
										<p>
											Cambodia, located in Southeast Asia, is a captivating
											tourist destination known for its rich history, ancient
											temples, and vibrant culture. From the awe-inspiring
											Angkor Wat to the charming streets of Phnom Penh, Cambodia
											offers visitors a unique blend of ancient wonders, natural
											beauty, and warm hospitality.{' '}
											<i>
												Here's a description of Cambodia as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Angkor Wat:</h4>
											<p>
												{' '}
												As the largest religious monument in the world, Angkor
												Wat is an iconic symbol of Cambodia. This UNESCO World
												Heritage site is a sprawling temple complex built in the
												12th century and showcases intricate carvings, stunning
												architecture, and breathtaking sunrises. Exploring the
												temples of Angkor Archaeological Park, including Bayon
												and Ta Prohm, offers an incredible glimpse into the
												Khmer Empire's glorious past.
											</p>
											<h4 className="mt-lg-5 mt-4">Phnom Penh:</h4>
											<p>
												The capital city of Cambodia, Phnom Penh, is a vibrant
												and bustling metropolis with a mix of modern
												developments and historical landmarks. Visitors can
												explore the Royal Palace, home to the King of Cambodia,
												visit the somber yet important Killing Fields and Tuol
												Sleng Genocide Museum to learn about the country's
												tragic history under the Khmer Rouge regime, and
												experience the lively street markets and local cuisine.
											</p>
											<h4 className="mt-lg-5 mt-4">Siem Reap:</h4>
											<p>
												Serving as the gateway to the Angkor temples, Siem Reap
												is a charming city that has developed into a vibrant hub
												for tourism. Aside from exploring the ancient temples,
												visitors can enjoy vibrant night markets, indulge in
												Khmer cuisine, take part in traditional dance
												performances, and experience the rich cultural heritage
												of the region.
											</p>
											<h4 className="mt-lg-5 mt-4">Tonle Sap Lake:</h4>
											<p>
												Tonle Sap is Southeast Asia's largest freshwater lake
												and an important ecological hotspot. Visitors can take
												boat tours to explore floating villages, observe local
												life, and witness the unique ecosystem. During the wet
												season, the lake dramatically expands, creating a vast
												expanse of water dotted with houses on stilts.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Sihanoukville and the Islands:
											</h4>
											<p>
												Located on the coast of Cambodia, Sihanoukville is a
												popular beach destination offering beautiful sandy
												beaches, crystal-clear waters, and a relaxed atmosphere.
												Visitors can relax on the beaches of Serendipity, Otres,
												or Sokha, enjoy water activities such as snorkeling or
												diving, and visit nearby islands like Koh Rong and Koh
												Rong Samloem for a tropical getaway.
											</p>
											<h4 className="mt-lg-5 mt-4">Avenue of Stars:</h4>
											<p>
												Located along the Tsim Sha Tsui waterfront, the Avenue
												of Stars pays tribute to Hong Kong's vibrant film
												industry. Visitors can find handprints of local
												celebrities, enjoy stunning views of Victoria Harbour,
												and take photos with the iconic statue of Bruce Lee.
											</p>
											<h4 className="mt-lg-5 mt-4">Wong Tai Sin Temple:</h4>
											<p>
												Known for its richly ornamented architecture, Wong Tai
												Sin Temple is a popular destination for locals and
												tourists seeking good fortune and blessings. Visitors
												can witness traditional rituals, burn incense, and make
												offerings at this colorful and bustling Taoist temple.
											</p>
											<h4 className="mt-lg-5 mt-4">Battambang:</h4>
											<p>
												Nestled in the northwest of Cambodia, Battambang is a
												charming riverside town known for its French colonial
												architecture, art scene, and picturesque countryside.
												Visitors can explore the historic buildings, ride the
												Bamboo Train, visit local villages to witness
												traditional crafts, and enjoy a scenic boat ride along
												the Sangkae River.
											</p>
											<h4 className="mt-lg-5 mt-4">Preah Vihear:</h4>
											<p>
												Perched atop a cliff in the Dangrek Mountains, Preah
												Vihear is a magnificent temple complex that showcases
												ancient Khmer architecture. This UNESCO World Heritage
												site offers breathtaking panoramic views of the
												surrounding countryside and is of significant cultural
												and historical importance.
											</p>
											<h4 className="mt-lg-5 mt-4">Kampot and Kep:</h4>
											<p>
												These neighboring towns, located on the southern coast
												of Cambodia, offer a laid-back vibe, beautiful
												landscapes, and delicious seafood. Visitors can explore
												the old French colonial architecture in Kampot, enjoy
												river cruises, and visit pepper plantations. Kep is
												known for its tranquil beaches, fresh crab markets, and
												the scenic Kep National Park.
											</p>
											<h4 className="mt-lg-5 mt-4">Banteay Chhmar:</h4>
											<p>
												For those seeking an off-the-beaten-path experience,
												Banteay Chhmar is a hidden gem. This remote temple
												complex, situated in the northwest of Cambodia, offers a
												more intimate and less crowded experience compared to
												Angkor Wat. Visitors can explore the ancient ruins,
												admire intricate carvings, and witness local village
												life.
											</p>
											<h4 className="mt-lg-5 mt-4">Kulen Mountain:</h4>
											<p>
												Phnom Kulen, or Kulen Mountain, is a sacred site and a
												popular day trip from Siem Reap. Visitors can hike
												through lush forests, swim in natural pools, and
												discover ancient temples and carvings, including the
												River of a Thousand Lingas and the massive reclining
												Buddha statue.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									Cambodia's blend of ancient wonders, cultural heritage, and
									natural beauty make it a fascinating and rewarding tourist
									destination. Whether you're exploring the awe-inspiring
									temples of Angkor Wat, delving into the country's tumultuous
									history, or relaxing on pristine beaches, Cambodia offers an
									enriching and unforgettable experience for travelers seeking a
									unique adventure.
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
