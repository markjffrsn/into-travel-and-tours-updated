import '../css/companyIntroduction.css';
import Aos from 'aos';
import { useEffect } from 'react';
import Images from './Images';

export default function CompanyIntroduction({ id }) {
	// Animate on scroll
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<>
			<div className="company-intro-container" id={id}>
				<div className="about-container container">
					<div className="row">
						<div
							className="col-lg-6 col-12 meet-us intro-content p-lg-5 p-4"
							data-aos="fade-down"
						>
							<div className="meet-us-content">
								<h2 className="meet-us-title">Meet Us</h2>
								<p>
									Into Travel and Tours is an{' '}
									<span>accredited Travel and Tour Agency </span>
									based in the Philippines. Founder early of this year, 2023
									with two pioneer members. Into Travel and Tours, consists of
									young professionals with a minimum of 9 years of combined
									experience mainly in the field of Travel and Tourism,
									Logistics and Supply Chain Management. We exist due to our
									passion and eagerness to explore different places, interact
									with diverse cultures and create new memories in each place we
									get the chance to visit. With the growing travel demands
									globally, we saw the need for more travel experts that can
									provide hassle-free, quality business travel and tourism
									experience. Thus, Into Travel and Tours pays to be “Always at
									its best” in dealing with customer needs and situational
									challenges.
								</p>
							</div>
							<img src={Images.circle} alt="circle object" loading="lazy" />
						</div>
						<div
							className="col-lg-3 col-12 vision intro-content"
							style={{
								padding: '43px',
							}}
							data-aos="fade-up"
						>
							<img src={Images.circle} alt="circle object" loading="lazy" />
							<div className="vision-content">
								<p>
									We undertake to be one of the leading online travel agencies
									being recognized globally. Servicing both corporate and
									leisure travels through our excellent customer service.
								</p>
								<h6>OUR</h6>
								<h2 className="vision-title">Vision</h2>
							</div>
						</div>
						<div
							className="col-lg-3 col-12 mission intro-content"
							style={{
								padding: '43px',
							}}
							data-aos="fade-up"
						>
							<div className="mission-content">
								<h6>OUR</h6>
								<h2 className="mission-title">Mission</h2>
								<p>
									To focus on extending our expertise and delivering a
									hassle-free yet affordable service to our clients. We strive
									to offer personalized travel services that meet our client’s
									unique needs and preferences. Always at its best.
								</p>
							</div>
							<img src={Images.circle} alt="circle object" loading="lazy" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
