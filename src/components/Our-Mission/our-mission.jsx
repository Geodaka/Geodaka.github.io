import './our-mission.scss';
import SubHeading from '../Subheading/subheading';
import linkImage from '../../Assets/Images/linkImage.png';
import verticalLinkImage from '../../Assets/Images/linkImageVertical.png';

function OurMission() {
	return (
		<div className="our-mission-container">
			<div className='whatIsGeodakaContainer'>
				<h1 className='whatIsGeodaka'>
					<span className='theme'>Geodaka</span> will be the <span className='accent'>link </span>
					between the <span className='theme'>physical world</span> and the
					<span className='accent'> virtual world </span>
				</h1>
				<div className='linkImageWrapper'>
					<img src={linkImage} alt='product mock linkImage' className="linkImage" />
				</div>
				<div className='verticalLinkImageWrapper'>
					<img src={verticalLinkImage} alt='product mock linkImage' className="verticalLinkImage" />
				</div>
				<h1 className='whatIsGeodaka pushProblemDown'>
					<span className='accent'> Merging</span> the best in class<span className='theme'> geospatial</span> and
					<span className='accent'> blockchain  </span> technologies to  create a new
					<span className='theme'> real estate</span> virtual commerce <span className='accent'> platform</span>
				</h1>
			</div>
			<section className='our-mission topMission'>
				<div className='heading otherStyle'>
					<SubHeading text='The Problem' />
					<div className='headingImage headingImage1'>
					</div>
				</div>
				<div className='our-mission-content'>
					<p className='our-mission-content-text'>
						Legacy consumer mapping apps such as Google maps are centralized and monopolistic.
						They do not operate by the people - <span className='bold'>'for the people'</span>.
						<br />
						<br />
						No direct representation, platform or link exists between the <span className='bold'> real world </span>
						and the <span className='bold'>digital world</span>.
						<br />
						<br />
						The developing world is unmapped, unregistered and underepresented in the emerging <span className='bold'>virtual ecosystem</span>.
						Web3 and open source geospatial DApps are needed to improve the lives of <span className='bold'>all the citizens</span> of the planet.
					</p>
				</div>
			</section>
			<section className='our-mission reverse'>
				<div className='our-mission-content'>
					<p className='our-mission-content-text'>
						The Realverse digital AR twin of the planet creates a direct link between the real world and digital world.
						<span className='bold'> EVERYWHERE </span> on the planets surface, every public and private property is accurately
						recreated in the Realverse.
						<br />
						<br />
						Innovative technologies such as Mapbox, Unity and Vuforia are utilized to create, build and maintain the Realverse.
						The Cardano blockchain Web3 ecosystem is utilized for finance, exchange, tokenization, NFTs and smart contracts in the Realverse.
						<br />
						<br />
						<span className='bold'>EVERYTHING</span> like buildings, roads, property and infrastructure can be digitized and AR hosted for immersion in the Realverse.
						Mapping the unmapped creates opportunity for <span className='bold'>EVERYONE</span>. The entire world can be AR connected in the Realverse.
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
						The Geodaka project developers are initiating a native utility token (ICO/ISO) on the Cardano layer 1 blockchain.
						The token symbol <span className='bold'>$GKA</span> will be distributed onto a DEX in Q1 2022
						<br />
						<br />
						The utility and governance token will be delegated to stake pool operators completing an initial stake pool offering.
						The GKA token will be utilized to build and operate the <span className='bold'>geospatial DApp protocol</span>, apps, SPO delegation and rewards systems for participation.
						<br />
						<br />
						The GKA Cardano native token will be used to facilitate token exchange, NFT, governance, smart contracts and digital identity.
						Cardano SPOs will be utilized to operate the decentralized open source Web3 <span className='bold'>REALVERSE</span>.
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
