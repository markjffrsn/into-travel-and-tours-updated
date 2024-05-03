import '../css/socialAccounts.css';

export default function SocialAccounts({ link, icon }) {
	return (
		<>
			<a
				href={link}
				target="_blank"
				className="d-flex align-items-center justify-content-center text-white border rounded-circle"
			>
				{icon}
			</a>
		</>
	);
}
