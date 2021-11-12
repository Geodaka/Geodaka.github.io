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
						<p>
							Geodaka is a Geospatial Dapp platform utilizing geographic information systems, game engine
							technology and the Cardano blockchain platform to create a decentralized, open source metaverse
							digital twin of the real world.
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
