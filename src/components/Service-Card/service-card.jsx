import './service-card.scss';

function ServiceCard({ cardClass, iconClass, title, description }) {
	return (
		<div className={cardClass}>
			<i className={iconClass}></i>
			<h3>{title}</h3>
			<p>
				{description}
			</p>
		</div>
	);
}

export default ServiceCard;
