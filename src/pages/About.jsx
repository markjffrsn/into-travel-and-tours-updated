import '../css/App.css';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function About() {
	return (
		<>
			<Helmet>
				<title>About</title>
				<meta
					name="description"
					content="Into Travel and Tours is an accredited travel agency based in the
					Philippines."
				/>
				<link rel="canonical" href="/about" />
			</Helmet>

			<main>
				<div className="bg-about sub-hero">
					<h1>Learn More About Us</h1>
					{/* <a href="#about-us">
						<span>Scroll down</span>
					</a> */}
				</div>
				<AboutContent />
			</main>
			<Footer marginTop="" />
		</>
	);
}
