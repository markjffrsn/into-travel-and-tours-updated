import '../css/App.css';
import Footer from '../components/Footer';
import ContactContent from '../components/ContactContent';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
	return (
		<>
			<Helmet>
				<title>Contact</title>
				<meta
					name="description"
					content="Contact us so we can help you get to your desired travel destination."
				/>
				<link rel="canonical" href="/contact" />
			</Helmet>

			<main>
				<ContactContent />
			</main>
			<Footer marginTop="" borderTop="" />
		</>
	);
}
