import '../css/contact.css';
import Images from './Images';
import * as Icon from 'react-bootstrap-icons';
import SocialAccounts from './SocialAccounts';
import Aos from 'aos';
import { useEffect } from 'react';
import Accounts from './SocialLinks';

export default function ContactContent() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<>
			<div className="container-bg-container px-sm-0 px-3">
				<div className="hero-container container">
					<div className="hero-text">
						<h1 className="mb-0">How can we help you?</h1>
						<p className="mt-3 mt-md-4 mx-0">
							Have a question? Give us a call! We strive to be in constant
							communication with our clients until the job is done.
						</p>
					</div>
				</div>
				<div className="position-relative overflow-hidden">
					<div className="container">
						<div className="row flex-md-nowrap">
							<div className="col-md-6 col-12  d-sm-block d-none watermark-container">
								<img
									src={Images.logoLight}
									alt="Watermark"
									className="watermark"
								/>
							</div>
							<div
								className="col-md-6 col-12 offset-lg-2 offset-0 sidebar px-md-0 px-4"
								data-aos="fade-up"
							>
								<h2>Contact Information</h2>
								<div className="d-flex align-items-center gap-2 mt-4 mb-2 sidebar-container">
									<Icon.GeoAlt size={20} />
									<h4 className="my-0">Office</h4>
								</div>
								<p>
									Purok 3, Brgy. Pintong Bukawe <br />
									San Mateo, Rizal Philippines 1850
								</p>
								<div className="d-flex align-items-center gap-2 mt-3 mb-2 sidebar-container">
									<Icon.Clock size={20} />
									<h4 className="my-0">Hours</h4>
								</div>
								<p>
									Monday - Friday: 10am - 7pm <br />
									Saturday - Sunday: Closed
								</p>
								<div className="sidebar-social-links mt-5 mb-5 d-flex flex-column gap-3">
									<span className="">Follow us on</span>
									<div className="d-flex gap-2 social-account-contact">
										<SocialAccounts
											padding=""
											margin="mt-2 mb-5"
											link={Accounts.facebook}
											icon={<Icon.Facebook />}
										/>
										<SocialAccounts
											padding=""
											margin="mt-2 mb-5"
											link={Accounts.instagram}
											icon={<Icon.Instagram />}
										/>
										<SocialAccounts
											padding=""
											margin="mt-2 mb-5"
											link={Accounts.tiktok}
											icon={<Icon.Tiktok />}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
