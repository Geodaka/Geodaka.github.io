import React from 'react';
import './error.scss';
import ParticlesBackground from '../../components/Particle/particle';

function Error() {
	return (
		<>
			<ParticlesBackground />
			<div className='error'>
				<h1>404 page not found</h1>
			</div>
		</>
	);
}

export default Error;
