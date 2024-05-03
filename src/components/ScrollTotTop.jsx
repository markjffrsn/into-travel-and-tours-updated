import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const ScrollToTop = () => {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const id = hash.substring(1); // Remove the '#' symbol from the hash
			scroller.scrollTo(id, {
				duration: 1000, // Adjust the scroll duration as needed
				smooth: 'easeInOutExpo', // Adjust the scroll animation as needed
			});
		} else {
			window.scrollTo(0, 0);
		}
	}, [pathname, hash]);

	return null;
};

export default ScrollToTop;
