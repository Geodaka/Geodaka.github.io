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
							The Geodaka project is a geospatial augmented reality (AR) global platform.
							Digital mapping (GIS), game engine, and virtual reality (scanning/modeling)
							technologies are merged into one comprehensive world mapping DApp
							creating a digital earth twin Metaverse known as the <span className='accent valueAccent'>REALVERSE</span>.

						</p>
						{/* <button className={'theme-button'}>
							Go Now
						</button> */}
						<h2 className='valueProp'>A geospatial augmented reality platform mapping the unmapped</h2>
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
