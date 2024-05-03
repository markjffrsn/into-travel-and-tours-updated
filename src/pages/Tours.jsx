import Carousel from '../components/Carousel';
import CountryList from '../components/CountryList';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function Tours() {
	return (
		<>
			<Helmet>
				<title>Tours</title>
				<meta
					name="description"
					content="Book now and experience extraordinary travel."
				/>
				<link rel="canonical" href="/tours" />
			</Helmet>

			<main>
				<Carousel />
				<CountryList
					animationOnScroll={{
						fadeUp: '',
						fadeRight: '',
					}}
				/>
			</main>
			<Footer marginTop="" borderTop="" />
		</>
	);
}
