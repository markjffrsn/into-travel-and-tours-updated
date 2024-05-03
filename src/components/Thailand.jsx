import Images from './Images';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from './Booking';
import Icons from './Icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';

export default function Thailand() {
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
							'linear-gradient(to left, hsla(0, 0%, 0%, 0.404), hsla(0, 0%, 0%, 0.677)), url(../img/thailand.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="container">
						<h1>Thailand</h1>
						<p>
							Experience the vibrant street markets of Bangkok and indulge in
							the aromatic flavors of Thai cuisine.
						</p>
						<a href="#country-places">
							<span>Explore more</span>
						</a>
					</div>
				</section>

				<section className="main-container mb-5">
					<div className="container country-places" id="country-places">
						<h2 className="mt-4 text-center fw-light" data-aos="fade-up">
							Discover the popular tourist spots in the Thailand
						</h2>

						{/* Pattaya */}
						<div className="row mt-lg-5 mt-4" id="pattaya" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox g-3">
											<a href={Images.pattaya1} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.pattaya1}
													alt="Pattaya"
													loading="lazy"
												/>
											</a>
											<a href={Images.pattaya2} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.pattaya2}
													alt="Pattaya"
													loading="lazy"
												/>
											</a>
											<a href={Images.pattaya3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.pattaya3}
													alt="Pattaya"
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
													href={Images.pattaya1}
													className="carousel-item active"
												>
													<img
														src={Images.pattaya1}
														alt="Pattaya"
														loading="lazy"
													/>
												</a>

												<a href={Images.pattaya2} className="carousel-item">
													<img
														src={Images.pattaya2}
														alt="Pattaya"
														loading="lazy"
													/>
												</a>

												<a href={Images.pattaya3} className="carousel-item">
													<img
														src={Images.pattaya3}
														alt="Pattaya"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Pattaya</h1>
										<p>
											Pattaya, located on the eastern Gulf Coast of Thailand, is
											a vibrant and popular tourist destination known for its
											stunning beaches, lively nightlife, and a wide range of
											entertainment options. Once a small fishing village,
											Pattaya has transformed into a bustling city that attracts
											millions of visitors each year.{' '}
											<i>
												Here's a description of Pattaya as a tourist
												destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">Beautiful Beaches:</h4>
											<p>
												Pattaya boasts several beautiful beaches that cater to
												different preferences. Pattaya Beach, the most famous
												and busiest, offers a vibrant atmosphere with a range of
												water sports, beachside cafes, and lively beach clubs.
												Jomtien Beach, a more relaxed alternative, is known for
												its family-friendly atmosphere and water activities like
												jet skiing and banana boat rides.
											</p>
											<h4 className="mt-lg-5 mt-4">Vibrant Nightlife:</h4>
											<p>
												Pattaya is renowned for its lively and vibrant nightlife
												scene. Walking Street, the city's famous entertainment
												district, comes alive after dark with a plethora of
												bars, nightclubs, live music venues, and cabaret shows.
												Visitors can experience the energetic and lively
												atmosphere as they explore the various entertainment
												options.
											</p>
											<h4 className="mt-lg-5 mt-4"> Shopping Opportunities:</h4>
											<p>
												Pattaya is a shopping paradise offering a wide range of
												shopping experiences. From bustling local markets like
												the Pattaya Floating Market and Thepprasit Night Market
												to modern malls like CentralFestival Pattaya Beach and
												Terminal 21 Pattaya, shoppers can find everything from
												fashion, electronics, souvenirs, and local handicrafts.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Water Sports and Activities:
											</h4>
											<p>
												Pattaya is a haven for water sports enthusiasts.
												Visitors can engage in thrilling activities such as
												parasailing, jet skiing, scuba diving, and snorkeling.
												The nearby Coral Islands (Koh Larn) provide
												opportunities for beach relaxation, swimming, and
												snorkeling in crystal-clear waters.
											</p>
											<h4 className="mt-lg-5 mt-4">Cultural Attractions:</h4>
											<p>
												Pattaya is not just about beaches and nightlife; it also
												has cultural attractions worth exploring. The Sanctuary
												of Truth, an intricately carved wooden temple, showcases
												traditional Thai craftsmanship and philosophy. The Nong
												Nooch Tropical Garden offers beautifully landscaped
												gardens, cultural shows, and an elephant show.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Family-Friendly Attractions:
											</h4>
											<p>
												Pattaya offers a variety of family-friendly attractions
												and activities. The Cartoon Network Amazone Waterpark,
												Ramayana Water Park, and Underwater World Pattaya
												provide fun and entertainment for all ages. The Pattaya
												Elephant Village allows visitors to learn about and
												interact with these majestic creatures.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Day Trips and Excursions:
											</h4>
											<p>
												Pattaya serves as a gateway to nearby attractions and
												islands. Visitors can take day trips to explore the
												picturesque Koh Samet or embark on a boat tour to the
												scenic Pattaya Coral Islands. The nearby Pattaya
												Floating Market offers a glimpse into Thai culture and
												allows visitors to experience traditional floating
												market scenes.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Pattaya's mix of stunning beaches, vibrant nightlife, water
									sports, shopping opportunities, and cultural attractions make
									it a diverse and dynamic tourist destination. Whether you seek
									relaxation, adventure, or entertainment, Pattaya offers a
									range of experiences to suit different tastes and interests.
								</h2>
							</div>
						</div>

						<hr className="hr"></hr>

						{/* Bangkok */}
						<div className="row mt-lg-5 mt-4" id="bangkok" data-aos="fade-up">
							<div className="col-12">
								<div className="row gx-5 country-place">
									{/* Desktop Image Gallery */}
									<div className="col-lg-6 col-12  gallery-container d-none d-lg-block">
										<div className="row gallery lightbox-2 g-3">
											<a href={Images.bangkok2} className="col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.bangkok2}
													alt="Bangkok"
													loading="lazy"
												/>
											</a>
											<a href={Images.bangkok1} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.bangkok1}
													alt="Bangkok"
													loading="lazy"
												/>
											</a>
											<a href={Images.bangkok3} className="col-lg-6 col-12">
												<div className="view-img">
													<div className="view-img-content">
														{Icons.eye}
														<p>VIEW IMAGE</p>
													</div>
												</div>
												<img
													src={Images.bangkok3}
													alt="Bangkok"
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
													href={Images.bangkok2}
													className="carousel-item active"
												>
													<img
														src={Images.bangkok2}
														alt="Bangkok"
														loading="lazy"
													/>
												</a>

												<a href={Images.bangkok1} className="carousel-item">
													<img
														src={Images.bangkok1}
														alt="Bangkok"
														loading="lazy"
													/>
												</a>

												<a href={Images.bangkok3} className="carousel-item">
													<img
														src={Images.bangkok3}
														alt="Bangkok"
														loading="lazy"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-12 country-places__side">
										<h1>Bangkok</h1>
										<p>
											Bangkok, the capital city of Thailand, is a bustling
											metropolis that captivates visitors with its vibrant
											street life, rich cultural heritage, ornate temples, and a
											fusion of traditional and modern attractions. As a top
											tourist destination, Bangkok offers a diverse range of
											experiences that cater to various interests.{' '}
											<i>
												Here's a description of Bangkok as a tourist
												destination:
											</i>
										</p>

										<div className="country-places__decrip">
											<h4 className="mt-lg-5 mt-4">
												Grand Palace and Wat Phra Kaew:
											</h4>
											<p>
												The Grand Palace is a majestic complex that served as
												the residence of Thai kings for centuries. Within its
												grounds, you'll find the revered Wat Phra Kaew (Temple
												of the Emerald Buddha), which houses the iconic Emerald
												Buddha statue. The intricate architecture, stunning
												details, and ornate decorations make it a must-visit
												attraction.
											</p>
											<h4 className="mt-lg-5 mt-4">Wat Arun: </h4>
											<p>
												Located on the banks of the Chao Phraya River, Wat Arun,
												also known as the Temple of Dawn, is an iconic symbol of
												Bangkok. Its distinct spires and intricate mosaic
												designs create a mesmerizing sight, especially during
												sunrise and sunset. Visitors can climb the central prang
												for panoramic views of the river and the city.
											</p>
											<h4 className="mt-lg-5 mt-4">Floating Markets:</h4>
											<p>
												Bangkok is famous for its floating markets, where
												vendors sell fresh produce, local delicacies, and
												handicrafts from traditional wooden boats. Damnoen
												Saduak Floating Market and Amphawa Floating Market are
												popular choices, offering an immersive experience into
												the vibrant local culture and delicious street food.
											</p>
											<h4 className="mt-lg-5 mt-4">Khao San Road:</h4>
											<p>
												Known as the backpacker's mecca, Khao San Road is a
												vibrant street in Bangkok that comes alive at night.
												Lined with bars, restaurants, street food stalls, and
												market vendors, it offers a lively atmosphere and a
												chance to interact with fellow travelers. It's a hub for
												budget accommodation, souvenir shopping, and
												experiencing the energetic nightlife.
											</p>
											<h4 className="mt-lg-5 mt-4">Chinatown (Yaowarat):</h4>
											<p>
												Bangkok's Chinatown, Yaowarat, is a bustling
												neighborhood filled with vibrant markets, traditional
												Chinese shops, and delicious street food. Explore the
												narrow alleys, visit the ornate Chinese temples, and
												savor the diverse flavors of Chinese cuisine in this
												lively and culturally rich district.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Chatuchak Weekend Market:
											</h4>
											<p>
												Spanning over 35 acres, Chatuchak Weekend Market is one
												of the world's largest outdoor markets. With thousands
												of stalls selling everything from clothing and
												accessories to antiques and handicrafts, it's a
												shopper's paradise. The market offers a fascinating
												glimpse into Thai culture and provides an opportunity to
												try local street food.
											</p>
											<h4 className="mt-lg-5 mt-4">Jim Thompson House:</h4>
											<p>
												The Jim Thompson House is a cultural attraction that
												showcases traditional Thai architecture and art. It was
												the home of Jim Thompson, an American entrepreneur who
												revitalized the Thai silk industry. The house is now a
												museum, displaying Thompson's collection of antiques,
												artworks, and artifacts.
											</p>
											<h4 className="mt-lg-5 mt-4">
												Food and Street Food Culture:
											</h4>
											<p>
												Bangkok is renowned for its vibrant street food culture,
												offering an array of flavors and dishes to tantalize
												your taste buds. From the world-famous Pad Thai and
												Green Curry to lesser-known delicacies like mango sticky
												rice and grilled seafood, Bangkok is a food lover's
												paradise with street food stalls found on almost every
												corner.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-lg-4 mt-2">
								<h2 className="mb-3">
									Bangkok's charm lies in its blend of ancient traditions and
									modernity, creating a city that is both fascinating and
									dynamic. With its iconic landmarks, cultural attractions,
									bustling markets, and mouthwatering cuisine, Bangkok offers a
									sensory overload and an immersive experience that will leave a
									lasting impression on visitors
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
