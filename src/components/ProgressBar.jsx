import { useState, useEffect } from 'react';
import '../css/progressBar.css';
import Icons from './Icons';

export default function ProgressBar() {
	const [scrollTop, setscrollTop] = useState(0);

	const onScroll = () => {
		const winScroll = document.documentElement.scrollTop;
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		const scrolled = (winScroll / height) * 100;

		setscrollTop(scrolled);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<>
			<div className="side-bar-wrapper">
				<div className="progress-bar-wrapper">
					<div
						className="progress-bar"
						style={{ width: `${scrollTop}%` }}
					></div>
				</div>
			</div>
		</>
	);
}
