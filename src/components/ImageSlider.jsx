import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for navigation
import '../css/ImageSlider.css'; // Import the CSS file for animation styles
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageSlider = ({ images, interval, routes }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, interval);

		return () => {
			clearInterval(timer);
		};
	}, [images, interval]);

	return (
		<div className="slider">
			{images.map((image, index) => (
				<Link key={index} to={routes[index]}>
					<div
						className={`slider-image ${
							index === currentImageIndex ? 'active' : ''
						}`}
						style={{
							background: `linear-gradient(
							45deg,
							hsla(202.1, 100%, 34.1%, 0.6),
							hsla(208, 12.2%, 24.1%, 0.58)
						), url(${image}) center / cover`,
							backgroundAttachment: 'fixed',
						}}
					></div>
				</Link>
			))}
		</div>
	);
};

export default ImageSlider;
