import '../css/testimonial.css';
import Icons from './Icons';
import Aos from 'aos';
import { useEffect } from 'react';

export default function TestimonialItem({ text }) {
	// Animate on scroll
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<div className="testimonial-item p-5 col-lg-6 col-12" data-aos="fade-right">
			<p>"{text.comment}"</p>
			<p className="author">
				- {text.author} {Icons.star}
			</p>
			<span className="icon-quote">{Icons.quote}</span>
		</div>
	);
}
