import '../css/card.css';
import { Link } from 'react-router-dom';

export default function Card({
	imgSrc,
	imgAlt,
	cardCaption,
	disableClass,
	btnDisableClass,
	overlayClass,
	LinkTo,
}) {
	const disabled = `card ${disableClass} pb-4`;
	const overlay = `overlay ${overlayClass}`;

	return (
		<>
			<div className={disabled}>
				<div className="img-container">
					<img
						className="card-img-top"
						src={imgSrc}
						alt={imgAlt}
						loading="lazy"
						draggable="false"
					/>
					<div className={overlay}>
						<h3>{cardCaption.availability}</h3>
					</div>
				</div>
				<div className="card-body px-4">
					<h2 className="card-title mt-2">{cardCaption.title}</h2>
					<p className="card-text mt-2">{cardCaption.text}</p>
					<Link to={LinkTo} className={btnDisableClass}>
						Learn more
					</Link>
				</div>
			</div>
		</>
	);
}
