import Hero from '../components/Hero';
import CountryList from '../components/CountryList';
import Testimonials from '../components/Testimonials';
import CompanyIntroduction from '../components/CompanyIntroduction';
import Aos from 'aos';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function Home() {
	// Animate on scroll
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<>
			<Helmet>
				<title>Home</title>
				<meta
					name="description"
					content="A travel agency based in the Philippines."
				/>
				<link rel="canonical" href="/home" />
			</Helmet>

			<main>
				<Hero />
				<CompanyIntroduction id="exploreMore" />
				<Testimonials />
				<CountryList
					animationOnScroll={{
						fadeUp: 'fade-up',
						fadeRight: 'fade-right',
					}}
				/>
			</main>
			<Footer marginTop="" borderTop="" />
		</>
	);
}
