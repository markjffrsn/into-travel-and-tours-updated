import { Link } from 'react-router-dom';
import Icons from './Icons';
import Accounts from './SocialLinks';
import '../css/footer.css';
import { Facebook, Instagram, Tiktok } from 'react-bootstrap-icons';
import SocialAccounts from './SocialAccounts';
import Images from './Images';

export default function Footer() {
	return (
		<>
			<footer className="pt-4">
				<div className="container px-4 pt-4 text-white">
					<div className="row align-items-center justify-content-around">
						<div className="col-md-6 col-12 w-fit pb-md-3 pb-5">
							<img
								src={Images.logoLight}
								alt="Company Logo"
								className="footer-logo"
							/>
						</div>
						<div className="col-md-6 col-12 my-auto">
							<div className="d-flex gap-5 justify-content-center">
								<div className="d-flex flex-column social-links-footer gap-3  flex-md-grow-1">
									<span>Usable Links</span>
									<Link className="footer-links tours-link" to="/tours">
										Tours
									</Link>
									<Link className="footer-links about-link" to="/about">
										About Us
									</Link>
									<Link className="footer-links contact-link" to="/contact">
										Contact Us
									</Link>
								</div>
								{/* <div className="d-flex flex-column social-links-footer gap-2">
									<span>Usable Links</span>
									<Link to="/tours">Tours</Link>
									<Link to="/about">About Us</Link>
									<Link to="/contact">Contact Us</Link>
								</div> */}
								<div className="d-flex flex-column social-links-footer gap-3 flex-md-grow-1">
									<span>Contact us on</span>
									<a
										className="footer-links email-link"
										href={Accounts.email}
										target="_blank"
									>
										Email
									</a>
									<a
										href="tel: +639426526092"
										className="contact-number footer-links"
									>
										+63 942 652 6092
									</a>
									<a
										className="footer-links whatsapp-link"
										href={Accounts.whatsapp}
										target="_blank"
									>
										Whatsapp
									</a>
								</div>
							</div>
						</div>
					</div>

					<hr className="hr m-0 mt-4" />

					<div className="d-flex align-items-center justify-content-around gap-5">
						<p className="m-0 fw-light copy-right">
							Copyright © 2023 Into Travel and Tours. All rights reserved.
						</p>
						<div className="social-account d-flex align-items-center gap-2 justify-content-center my-4">
							<SocialAccounts link={Accounts.facebook} icon={<Facebook />} />

							<SocialAccounts link={Accounts.instagram} icon={<Instagram />} />

							<SocialAccounts link={Accounts.tiktok} icon={<Tiktok />} />
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
