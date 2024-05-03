import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Contact from './pages/Contact';

import ScrollToTop from './components/ScrollTotTop';
import Reserved from './Reserved';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Philippines from './components/Philippines';
import India from './components/India';
import Singapore from './components/Singapore';
import Japan from './components/Japan';
import Uae from './components/Uae';
import Thailand from './components/Thailand';
import Korea from './components/Korea';
import Australia from './components/Australia';
import Carousel from './components/Carousel';
import Card from './components/Card';
import Hongkong from './components/Honkong';
import Cambodia from './components/Cambodia';
import Vietnam from './components/Vietnam';
import Malaysia from './components/Malaysia';
import Indonesia from './components/Indonesia';
import China from './components/China';
import Macau from './components/Macau';
import Maldives from './components/Maldives';
import Newzealand from './components/Newzealand';
import Laos from './components/Laos';
import Iceland from './components/Iceland';
import Myanmar from './components/Myanmar';
import Brunei from './components/Brunei';
import Taiwan from './components/Taiwan';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ProgressBar from './components/ProgressBar';
import GetInTouch from './components/GetInTouch';
// import SmoothScroll from './components/SmoothScroll';

export default function App() {
	lightGallery(document.querySelector('.gallery'));

	return (
		<>
			<BrowserRouter>
				<Navbar />
				{/* <SmoothScroll /> */}
				<ScrollToTop />
				<ProgressBar />
				<MessengerCustomerChat
					pageId="108931742131644"
					appId="1319917292242430"
				/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tours" element={<Tours />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/philippines" element={<Philippines />} />
					<Route path="/india" element={<India />} />
					<Route path="/japan" element={<Japan />} />
					<Route path="/uae" element={<Uae />} />
					<Route path="/singapore" element={<Singapore />} />
					<Route path="/thailand" element={<Thailand />} />
					<Route path="/korea" element={<Korea />} />
					<Route path="/australia" element={<Australia />} />
					<Route path="/hongkong" element={<Hongkong />} />
					<Route path="/cambodia" element={<Cambodia />} />
					<Route path="/vietnam" element={<Vietnam />} />
					<Route path="/malaysia" element={<Malaysia />} />
					<Route path="/indonesia" element={<Indonesia />} />
					<Route path="/china" element={<China />} />
					<Route path="/macau" element={<Macau />} />
					<Route path="/maldives" element={<Maldives />} />
					<Route path="/newzealand" element={<Newzealand />} />
					<Route path="/laos" element={<Laos />} />
					<Route path="/iceland" element={<Iceland />} />
					<Route path="/myanmar" element={<Myanmar />} />
					<Route path="/brunei" element={<Brunei />} />
					<Route path="/taiwan" element={<Taiwan />} />
					<Route path="/reserved" element={<Reserved />} />
					<Route path="/carousel" element={<Carousel />} />
					<Route path="/card" element={<Card />} />
					<Route path="/getintouch" element={<GetInTouch />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
