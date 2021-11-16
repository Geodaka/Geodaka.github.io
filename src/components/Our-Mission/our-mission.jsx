import './our-mission.scss';
import SubHeading from '../Subheading/subheading';
import linkImage from '../../Assets/Images/linkImage.png';

function OurMission() {
	return (
		<div className="our-mission-container">
			<h1 className='whatIsGeodaka'>
				<span className='theme'>Geodaka</span> will be the <span className='accent'>link </span>
				between the <span className='theme'>physical world</span> and the
				<span className='accent'> virtual world </span>
			</h1>
			<div className='linkImageWrapper'>
				<img src={linkImage} alt='product mock linkImage' className="linkImage" />
			</div>
			<section className='our-mission'>
				<div className='heading otherStyle'>
					<SubHeading text='The Problem' />
					<div className='headingImage headingImage1'>
					</div>
				</div>
				<div className='our-mission-content'>
					<p className='our-mission-content-text'>
						Legacy geospatial mapping applications do not provide an open-source, de-centralized
						mapping platform for digital land creation, registration and ownership of real space in the virtual world.
						<br />
						<br />
						No direct representation, platform or link exists between the real world and the digital world.
						Current Metaverse projects create fantasy worlds that do not represent real world digital property
						registration, ownership, property rights and other real world assets.
						<br />
						<br />
						The developing world is unmapped and has no means of property registration and deed certificate of title.
						The developed world is underserved by centralized monopoly corporate and government GIS mapping applications.
					</p>
				</div>
			</section>
			<section className='our-mission reverse'>
				<div className='our-mission-content'>
					<p className='our-mission-content-text'>
						<p>
							Geodaka is creating the <span className='bold'>REALVERSE</span>. A digital twin of the earth powered by the Cardano blockchain.
							The Geodaka Project Cardano Native Token EEE (ISO) which enables the <span className='bold'>REALVERSE</span> will become the
							<span className='italic'>'where'</span> for the cardano blockchain ecosystem and the basis of geospatial virtual commerce AKA: V-Comverse.
						</p>
						<span className='bold'>EVERYWHERE</span>
						<p>
							The Realverse will be the digital mapping platform, network and direct link between the real
							world and the virtual world.
						</p>
						<span className='bold'>EVERYTHING</span>
						<p>
							Real property can be digitally represented in duplicate, at the same geographic coordinates of the
							real world creating digital twin environments, lands, towns and cities in the same exact digital space.
						</p>
						<span className='bold'>EVERYONE</span>
						<p>
							The Geodaka Realverse will be the means by which anyone with an internet connection can post the
							<span className='italic'>'where'</span> aspects of their property, service or business and communicate
							instantly to the smart, virtual world.  This functionality will bring digital property rights,
							benefits and privileges to all creating world-wide V-Commerce, changing the face of the planet,
							enhancing the lives of all.
						</p>
					</p>
				</div>
				<div className='heading'>
					<SubHeading text='Our Solution' headingClass='accent' />
					<div className='headingImage headingImage2'>
					</div>
				</div>
			</section>
			<section className='our-mission'>
				<div className='heading'>
					<SubHeading text='The Plan' />
					<div className='headingImage headingImage3'>
					</div>
				</div>
				<div className='our-mission-content'>
					<p className='our-mission-content-text'>
						The Geodaka project developers are initiating an (ISO) symbol EEE native utility token on the Cardano
						Blockchain and creating a Metaverse NFT Game called Geomonopoly.  Revenues will be utilized to build
						the mapping Dapp and game foundations of the <span className='bold'>REALVERSE</span> project.
						<br />
						<br />
						The end result will be a high definition metaverse duplicate of the entire known human occupation
						of the planet.  Every highway, byway, town and city and all the infrastructure will be accurately
						digitally duplicated and interactively ‘live’ existing in the Realverse.  The Realverse will be the
						digital equivalent of the real thing, and hence will become an extremely useful tool linking the real
						world and virtual world.
						<br />
						<br />
						The Realverse will be created through GIS mapping technology, satellite imagery, street mapping,
						digital terrain models, 3D buildings and infrastructure. Once a worldwide base map is completed,
						billions of real world property boundaries lines are added creating the 3D Geo-Parcel property
						network layer.
						<br />
						<br />
						Want to lean more? <a href='' className='whitepaperLink italic'>Read our whitepaper for more information  </a>
					</p>
				</div>
			</section>
		</div>
	);
}

export default OurMission;
