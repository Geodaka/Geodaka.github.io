import './our-mission.scss';
import SubHeading from '../Subheading/subheading';
import opportunityIcon from '../../Assets/Images/icon_opportunity.svg';
import techIcon from '../../Assets/Images/icon_technology.svg';
import researchIcon from '../../Assets/Images/icon_research.svg';

function OurMission() {
	return (
		<div className="our-mission-container">
			<section className='our-mission'>
				<div className='heading'>
					<SubHeading text='The Problem' />
					<img src={researchIcon} alt='Research'></img>
				</div>
				<div className='our-mission-content'>
					<p className='our-mission-content-text'>
						In the developing world, basic mapping functions and municipal assessors’ maps do not even exist. There
						is no base map of a given municipality and no registry of deeds. There is literally no public record of
						ownership.
						<br />
						<br />
						Without the proper systems in place, corruption becomes rampant. Home owners cannot
						build equity and capital to reinvest in business, development and property improvement. The entire
						economy stagnates and does not develop. It continues to corrupt and decay as power centralizes over time.
						<br />
						<br />
						The real estate industry is monopolized, regionalized, centralized, broken and corrupt. It
						is operated by malicious cartels, and not in the best interest of the free citizen buyers and sellers.
					</p>
				</div>
			</section>
			<section className='our-mission reverse'>
				<div className='our-mission-content'>
					<p className='our-mission-content-text'>
						There is a clear oppourtunity to develop a peer to peer system of verifying individual rights and assets such
						as property in a digital mirror of the physical world using block chain technology.
						<br />
						<br />
						We reject the idea that a centralized metaverse controlled by the likes of Mark Zuckerberg and
						friends can solve the problems caused by centralization of power which have plagued our society
						since the beginning of time.
						<br />
						<br />
						We envision a future where decentralized open source technologies like Geodaka can empower anyone
						anywhere to take control of their digital identitiy and presence without signing themselves up for
						the dystopian nightmare of digital slavery that centralized solutions will eventually become.
					</p>
				</div>
				<div className='heading'>
					<SubHeading text='Our Solution' headingClass='accent' />
					<img src={opportunityIcon} alt='Opportunity'></img>
				</div>
			</section>
			<section className='our-mission'>
				<div className='heading'>
					<SubHeading text='What We Do' />
					<img src={techIcon} alt='Technology'></img>
				</div>
				<div className='our-mission-content'>
					<p className='our-mission-content-text'>
						The Geodaka Realverse platform enables the digitization potential of everything, to help bring about
						positive global change everywhere on the planet.
						<br />
						<br />
						We are building a polygon property address layer similar to a typical assessors GIS parcel layer. It will be
						overlaid and combined with metadata on a 3D map of the world to create accurate digital twins of
						each real property parcel in any given municipality.
						<br />
						<br />
						The GeoParcels that are created and published can be registered and owned by the corresponding real world
						owner. This decentralized functionality creates digital land title registration for the unregistered helping to
						accomplish the same goal as banking the unbanked.
						<br />
						<br />
						All of our software and technology will be open source and serve as an alternative to centralized
						solutions like Google Maps and the metaverses currently being developed by Meta and Microsoft.
					</p>
				</div>
			</section>
		</div>
	);
}

export default OurMission;
