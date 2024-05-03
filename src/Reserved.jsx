import React from 'react';
import ImageSlider from './components/ImageSlider';
import Accounts from './components/Icons';

const Reserved = () => {
	const Images = [
		'./img/about.jpg',
		'./img/bg-home.jpg',
		'./img/bg-aboutt.jpg',
		'./img/bg-hero.jpg',
	];

	const routes = ['/home', '/india', '/about'];

	return (
		<div>
			<div className="hero-elements">
				<h1>Into Travel and Tours</h1>
				<h2
					style={{
						letterSpacing: '2px',
					}}
				>
					"ALWAYS AT ITS BEST!"
				</h2>
				<a href={Accounts.email} target="_blank">
					Send us an Email
				</a>
				<div className="scroll-down">
					<a
						href="#countriesHome"
						style={{
							background: 'none',
							padding: 0,
						}}
					></a>
				</div>
			</div>
			<ImageSlider images={Images} interval={3000} routes={routes} />
		</div>
	);
};

export default Reserved;
