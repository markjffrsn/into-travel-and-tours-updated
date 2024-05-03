import { useEffect } from 'react';
import Images from '../components/Images';
import Aos from 'aos';
import '../css/about.css';

export default function AboutContent() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<>
			<section className="container" id="about-us">
				<div className="row about-section">
					<div className="col-lg-6 col-12 d-flex align-items-center">
						<div className="text-container" data-aos="fade-right">
							<h2 className="mb-lg-4 mb-3">Who We Are</h2>
							<p>
								Into Travel and Tours is an{' '}
								<span> accredited travel agency </span> based in the
								Philippines. Into Travel and Tours, consists of young
								professionals with a minimum of 9 years of combined experience
								mainly in the field of Travel and Tourism, Logistics and Supply
								Chain Management. We exist because of our passion and eagerness
								to explore and expand our limits. To open opportunities where we
								can provide <span> excellent service </span>while enhancing our
								company's productivity.
							</p>
						</div>
					</div>
					<div className="col-lg-6 col-12 img-container-1" data-aos="fade-up">
						<img
							src={Images.whoWeAreImg}
							alt="About Image"
							loading="lazy"
							draggable={false}
						/>
					</div>
				</div>
			</section>

			<section className="what-we-do">
				<div className="container">
					<div className="row what-we-do-section  justify-content-center">
						<div className="col-lg-6 col-12 img-container-2">
							<img
								src={Images.whatWeDoImg}
								alt="What we do image"
								loading="lazy"
								className="d-block"
								data-aos="fade-right"
								draggable={false}
							/>
						</div>
						<div className="col-lg-6 col-12 d-flex align-items-center">
							<div className="text-container" data-aos="fade-up">
								<h2 className="mb-lg-4 mb-3">What We Do</h2>
								<p>
									As travel enthusiasts, we understand that travel is indeed an
									essential part of life, whether for business or pleasure.
									Thus, our goal is to always extend our expertise to deliver a
									hassle-free yet affordable service to our clients. We strive
									to offer personalized travel services that meet our client’s
									unique needs and preferences. Our team of experienced travel
									experts is dedicated to providing top-quality service to our
									clients. We offer various travel services, including airfare,
									hotel bookings, ferry bookings, and customized travel
									packages. We are committed to serving our partners with
									passion and ensuring that every aspect of their travel
									experience is stress-free and always at its best. Our main
									audience includes individuals, families, and corporate clients
									who require top-notch travel services. We have worked with
									clients in various industries, including finance and Business
									Process Outsourcing (BPO). Our clients trust us to provide
									exceptional service and value, and we take pride in exceeding
									their expectations. Our travel services are designed to offer
									convenience, comfort, and affordability. We work with various
									airlines, hotels, and car rental companies to guarantee the
									best deals on our client’s travel client’s unique needs and
									preferences.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
