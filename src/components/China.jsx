import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Aos from 'aos';
import Icons from './Icons';
import Footer from './Footer';

export default function China() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/china.jpg)',
					}}
				>
					<div className="container">
						<h1>China</h1>
						<p>
							Embark on a journey through the Great Wall, immerse yourself in
							the ancient history of the Forbidden City, and savor the rich
							flavors of Chinese cuisine.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the China
						</h2>

						{/* China */}
						<div className="row mt-lg-5 mt-4" id="china" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.china1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.china1} alt="China" loading="lazy" />
											</a>
											<a href={Images.china2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.china2} alt="China" loading="lazy" />
											</a>

											<a href={Images.china3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img src={Images.china3} alt="China" loading="lazy" />
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
													href={Images.china1}
													className="carousel-item active"
												>
													<img src={Images.china1} alt="China" loading="lazy" />
												</a>

												<a href={Images.china2} className="carousel-item">
													<img src={Images.china2} alt="China" loading="lazy" />
												</a>

												<a href={Images.china3} className="carousel-item">
													<img src={Images.china3} alt="China" loading="lazy" />
												</a>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-12 country-places__side">
										<h1>China</h1>
										<p>
											China, a vast and diverse country in East Asia, is a
											captivating tourist destination that offers a wealth of
											historical sites, cultural heritage, breathtaking
											landscapes, and vibrant cities. With its ancient
											landmarks, stunning natural wonders, and rich cultural
											traditions, China offers visitors a diverse range of
											experiences.{' '}
											<i>
												Here's a description of China as a tourist destination,
												highlighting its major attractions:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">The Great Wall of China:</h4>
											<p>
												One of the most iconic landmarks in the world, the Great
												Wall stretches over thousands of kilometers and is a
												testament to China's ancient civilization. Visitors can
												explore various sections of the wall, such as Badaling,
												Mutianyu, and Jinshanling, and marvel at the engineering
												marvel and panoramic views.
											</p>
											<h4 className="mt-lg-5 mt-4">The Forbidden City:</h4>
											<p>
												Located in the heart of Beijing, the Forbidden City is a
												vast imperial palace complex that served as the home of
												Chinese emperors for over 500 years. Visitors can wander
												through its grand halls, beautiful courtyards, and
												intricate pavilions, and learn about the country's
												imperial history.
											</p>
											<h4 className="mt-lg-5 mt-4">The Terracotta Army:</h4>
											<p>
												Discovered in Xi'an, the Terracotta Army is an
												incredible archaeological find. Thousands of life-sized
												terracotta statues of soldiers, horses, and chariots
												were buried to protect the first emperor of China in the
												afterlife. Visitors can explore the excavation site and
												marvel at the remarkable craftsmanship.
											</p>
											<h4 className="mt-lg-5 mt-4">
												The Li River and Karst Mountains:
											</h4>
											<p>
												The Li River, located in Guilin, is renowned for its
												stunning landscapes of limestone karst mountains,
												crystal-clear waters, and picturesque countryside.
												Visitors can take a leisurely cruise along the river,
												passing by iconic peaks like Elephant Trunk Hill and
												enjoying the scenic beauty.
											</p>
											<h4 className="mt-lg-5 mt-4">The Yellow Mountains:</h4>
											<p>
												Known for their ethereal beauty, the Yellow Mountains
												(Huangshan) are a UNESCO World Heritage site. With their
												granite peaks, hot springs, and ancient pine trees, they
												have inspired countless artists and poets. Visitors can
												hike the trails, take cable cars to the mountaintops,
												and witness breathtaking sunrises or sea of clouds.
											</p>
											<h4 className="mt-lg-5 mt-4">
												The Panda Conservation Centers:
											</h4>
											<p>
												China is home to the beloved giant pandas, and several
												conservation centers allow visitors to see these
												adorable creatures up close. The Chengdu Research Base
												of Giant Panda Breeding in Sichuan and the Dujiangyan
												Panda Base are popular attractions where visitors can
												learn about panda conservation efforts and observe
												pandas in their natural habitat.
											</p>
											<h4 className="mt-lg-5 mt-4">The Potala Palace:</h4>
											<p>
												Located in Lhasa, Tibet, the Potala Palace is an
												architectural masterpiece and a significant spiritual
												and cultural symbol. As the former winter residence of
												the Dalai Lama, it showcases Tibetan Buddhist art,
												intricate murals, and breathtaking views of the
												surrounding Himalayas.
											</p>
											<h4 className="mt-lg-5 mt-4">
												The Zhangjiajie National Forest Park:
											</h4>
											<p>
												Immortalized in the movie "Avatar," Zhangjiajie National
												Forest Park is a surreal landscape of towering sandstone
												pillars, deep ravines, and lush vegetation. Visitors can
												explore the park's numerous hiking trails, take a
												glass-bottomed bridge walk, and enjoy panoramic views
												from the Avatar Hallelujah Mountain.
											</p>
											<h4 className="mt-lg-5 mt-4">The Summer Palace:</h4>
											<p>
												Located in Beijing, the Summer Palace is a vast royal
												garden and UNESCO World Heritage site. It features a
												beautiful lake, pavilions, gardens, and the iconic
												Marble Boat. Visitors can take a boat ride, stroll
												through the picturesque landscapes, and learn about
												Chinese imperial history.
											</p>
											<h4 className="mt-lg-5 mt-4">
												The Bund and Shanghai Skyline:
											</h4>
											<p>
												The Bund, located on the Huangpu River in Shanghai,
												offers a striking contrast between old and new. The
												historic waterfront promenade features colonial-era
												architecture, while across the river, Pudong showcases a
												modern skyline with iconic skyscrapers like the Oriental
												Pearl Tower and Shanghai Tower.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2>
									China's combination of ancient history, natural wonders, and
									dynamic cities make it a captivating tourist destination.
									Whether you're interested in exploring UNESCO World Heritage
									sites, discovering traditional cultural heritage, or marveling
									at stunning landscapes, China offers a rich and diverse
									experience for travelers from around the world.
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
