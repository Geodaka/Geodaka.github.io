import React from 'react';
import './particle.scss';
import ParticlesBackground from 'react-tsparticles';

function GeodakaParticles() {
	return (
		<ParticlesBackground
			className='tsparticles'
			options={{
				background: {
					color: {
						value: '#0033ad',
					},
				},
				fpsLimit: 15,
				interactivity: {
					events: {
						onHover: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.8,
							size: 40,
						},
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: '#FF7676',
					},
					links: {
						color: '#FF7676',
						distance: 110,
						enable: true,
						opacity: 0.5,
						width: 3,
					},
					collisions: {
						enable: false,
					},
					move: {
						direction: 'none',
						enable: true,
						random: false,
						straight: false,
						bounce: false
					},
					number: {
						density: {
							enable: true,
							value_area: 800,
						},
						value: 150,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						random: true,
						value: 7,
					},
				},
			}} />
	);
}

export default GeodakaParticles;
