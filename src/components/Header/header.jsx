import './header.scss';
import appImg from '../../Assets/Images/product-mock.png';
import * as environment from '../../environment';
import ParticlesBackground from '../Particle/particle';

function Header() {
	return (
		<>
			<ParticlesBackground />
			<header className='app'>
				<div class='app-content'>
					<div className='app-text'>
						<h1>{`${environment.HEADER_MESSAGE}`}</h1>
						<h2 className='valueProp'>Making the surface of the planet a better place for all</h2>
						<p>
							The Geodaka dapp mapping platform and consumer application merges the technologies of
							global information systems, virtual game engines and the Web3 Cardano blockchain
							platform to create a digital twin metaverse Virtual Ecosystem of the entire world.
						</p>
						{/* <button className={'theme-button'}>
							Go Now
						</button> */}
					</div>
					<div className='imageWrapper'>
						<img src={appImg} alt='product mock' className="mock" />
					</div>

				</div>
			</header>
		</>
	);
}

export default Header;
