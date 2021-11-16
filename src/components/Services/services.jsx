import './services.scss';
import SubHeading from '../Subheading/subheading';
import ServiceCard from '../Service-Card/service-card';
import { servicesData } from './services-data';

function Services() {
	return (
		<section className='services'>
			<div className='services-text-box'>
				<SubHeading text='Realverse' />
				<p>
					For the Realverse to work in everyone's best interest <span className="accent-text">it must be decentralized</span>
				</p>
			</div>
			<div className='services-cards'>
				{servicesData.map(service => {
					return <ServiceCard key={service.id} {...service} />;
				})}
			</div>
		</section>
	);
}

export default Services;
