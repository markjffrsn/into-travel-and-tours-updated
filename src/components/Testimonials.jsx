import '../css/testimonial.css';
import TestimonialItem from './TestimonialItem';
import Aos from 'aos';
import { useEffect } from 'react';

export default function Testimonials() {
	// Animate on scroll
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<>
			<div className="testimonial-container d-flex justify-content-center">
				<div className="row w-100 align-items-center justify-content-center testimonial-container-child">
					<div className="text-container col-lg-7 col-12">
						<h2 className="testimonial-title" data-aos="fade-up">
							Testimonials
						</h2>
						<p data-aos="fade-up" className="mb-4">
							Into Travel and Tours believes our competitive advantage lies in
							our commitment to always putting our clients as our{' '}
							<span> Top Priority </span>. We understand that every client has
							unique travel needs and preferences, and we work hard to meet
							those needs. We also offer competitive pricing and special
							promotion to make sure that you get the best value for your money.
							To give you a glimpse of how our services provided comfort to
							others – here’s what some of our clients have to say about us:
						</p>
					</div>
					<div
						id="testimonial-card"
						className="testimonial-card d-flex col-lg-5 col-12"
					>
						{/* <div className="fade-effect left"></div>
						<div className="fade-effect right"></div> */}

						<TestimonialItem
							text={{
								comment:
									'The best travel agency. Trusted and professional. Highly recommended them.',
								author: 'Arun Chandwaney',
							}}
						/>

						<TestimonialItem
							text={{
								comment:
									'They are the easiest Travel Agency to deal with, No hassle at all! Thank you, Till my next trip.',
								author: 'Lea Ng Clarion',
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
