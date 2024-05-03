import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function Myanmar() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/myanmar.jpg)',
					}}
				>
					<div className="container">
						<h1>Myanmar</h1>
						<p>
							Uncover the ancient city of Bagan, visit sacred Buddhist sites,
							and explore the unique culture and traditions of this emerging
							destination.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Myanmar
						</h2>

						{/* Myanmar */}
						<div className="row mt-lg-5 mt-4" id="myanmar" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.myanmmar1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.myanmmar1} loading="lazy" />
											</a>
											<a href={Images.myanmmar2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.myanmmar2} loading="lazy" />
											</a>

											<a href={Images.myanmmar3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.myanmmar3} loading="lazy" />
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
													href={Images.myanmmar1}
													className="carousel-item active"
												>
													<img src={Images.myanmmar1} loading="lazy" />
												</a>

												<a href={Images.myanmmar2} className="carousel-item">
													<img src={Images.myanmmar2} loading="lazy" />
												</a>

												<a href={Images.myanmmar3} className="carousel-item">
													<img src={Images.myanmmar3} loading="lazy" />
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>Myanmar</h1>
										<p>
											Myanmar, also known as Burma, is a culturally rich and
											diverse country in Southeast Asia that has recently gained
											popularity as a tourist destination. With its ancient
											temples, stunning landscapes, and unique traditions,
											Myanmar offers visitors a glimpse into its fascinating
											history and vibrant culture.{' '}
											<i>
												Here's a description of Myanmar as a tourist
												destination, highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Bagan:</h4>
											<p>
												The ancient city of Bagan is one of Myanmar's most
												iconic attractions, featuring thousands of
												well-preserved temples and pagodas spread across a vast
												plain. Visitors can explore this archaeological wonder,
												admire the intricate architecture, and witness
												breathtaking sunrises or sunsets over the temple-dotted
												landscape.
											</p>
											<h4 className="mt-lg-5 mt-4">Yangon:</h4>
											<p>
												As the largest city and former capital of Myanmar,
												Yangon (formerly Rangoon) offers a mix of colonial
												architecture, bustling markets, and sacred sites. The
												Shwedagon Pagoda, a shimmering golden stupa that
												dominates the city skyline, is a must-visit attraction.
												Visitors can also explore other landmarks such as the
												Sule Pagoda, Bogyoke Aung San Market, and the historic
												buildings of downtown Yangon.
											</p>
											<h4 className="mt-lg-5 mt-4">Inle Lake:</h4>
											<p>
												Inle Lake is a picturesque freshwater lake in the Shan
												State, known for its floating gardens, stilted villages,
												and the unique rowing technique of the Intha fishermen.
												Visitors can take boat trips on the lake, observe local
												traditions, visit ancient pagodas, and witness the
												vibrant local markets.
											</p>
											<h4 className="mt-lg-5 mt-4">Mandalay:</h4>
											<p>
												Mandalay, the second-largest city in Myanmar, is a
												cultural and spiritual hub with significant historical
												sites. Visitors can explore the Mandalay Royal Palace,
												visit the famous Mahamuni Buddha Temple, climb Mandalay
												Hill for panoramic views, and witness traditional crafts
												such as gold leaf making and silk weaving.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Golden Rock (Kyaiktiyo Pagoda):
											</h4>
											<p>
												Perched precariously on the edge of a cliff, the Golden
												Rock is a sacred Buddhist site that attracts pilgrims
												from all over Myanmar. Visitors can reach the pagoda by
												a combination of hiking and a thrilling truck ride, and
												witness the breathtaking sight of the golden boulder
												seemingly defying gravity.
											</p>
											<h4 className="mt-lg-5 mt-4">Ngapali Beach:</h4>
											<p>
												Located on the Bay of Bengal, Ngapali Beach offers
												pristine white sands, crystal-clear waters, and a
												relaxed atmosphere. Visitors can unwind on the beach,
												enjoy water activities such as swimming and snorkeling,
												and savor fresh seafood in beachfront restaurants.
											</p>
											<h4 className="mt-lg-5 mt-4">Mrauk U:</h4>
											<p>
												Mrauk U is an ancient archaeological site that was once
												the capital of the powerful Arakan Kingdom. Visitors can
												explore the ruins of temples and pagodas, some of which
												date back to the 15th century, and learn about the rich
												history and culture of the region.
											</p>
											<h4 className="mt-lg-5 mt-4">Hpa An:</h4>
											<p>
												Nestled amidst beautiful karst limestone mountains, Hpa
												An is a charming town that offers scenic landscapes and
												natural wonders. Visitors can explore the famous Kyauk
												Ka Lat Pagoda, visit sacred caves such as the Kawgun
												Cave with its thousands of Buddha images, and take boat
												trips along the Thanlwin River.
											</p>
											<h4 className="mt-lg-5 mt-4">Mount Popa:</h4>
											<p>
												Mount Popa is a volcanic peak located about 50
												kilometers from Bagan. At its summit, perched
												dramatically atop a rocky outcrop, is the sacred Popa
												Taungkalat monastery. Visitors can climb the steps to
												the monastery and enjoy panoramic views of the
												surrounding countryside.
											</p>
											<h4 className="mt-lg-5 mt-4">Chin State:</h4>
											<p>
												For those seeking off-the-beaten-path adventures, the
												remote Chin State offers incredible trekking
												opportunities, lush landscapes, and encounters with the
												Chin ethnic minority. Visitors can witness the unique
												facial tattoos of the Chin women, explore traditional
												villages, and immerse themselves in the region's rich
												cultural traditions.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									Myanmar's wealth of ancient temples, natural landscapes, and
									cultural heritage make it an intriguing and increasingly
									popular tourist destination. Whether you're exploring the
									majestic temples of Bagan, cruising along Inle Lake, or
									immersing yourself in the vibrant local culture, Myanmar
									offers a truly immersive and unforgettable travel experience.
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
