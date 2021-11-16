import Header from '../../components/Header/header';
import Services from '../../components/Services/services';
import Closing from '../../components/Closing/closing.jsx';
import Footer from '../../components/Footer/footer';
import Testimonials from '../../components/Testimonials/testimonials';
import Navigation from '../../components/Navigation/navigation';
import OurMission from '../../components/Our-Mission/our-mission';
import './home.scss';
import { animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect } from 'react';

const scrollToTop = () => {
	scroll.scrollToTop();
};

function Home() {

	const [visible, setVisible] = useState(false);

	const scrollFunction = () => {
		const lowEnough = (document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20)
		const wideEnough = window.innerWidth >= 500;
		(lowEnough && wideEnough) ? setVisible(true) : setVisible(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollFunction);
		return () => {
			window.removeEventListener('scroll', scrollFunction);
		};
	}, []);

	return (
		<div className='page-container'>
			<Navigation />
			<Header id='head' />
			<OurMission id='about-us' />
			<Services id='services' />
			<Testimonials />
			<Closing />
			<Footer />
			<button
				className={`${visible ? 'back-to-top show' : 'back-to-top'}`}
				onClick={scrollToTop}>
				Back to Top
			</button>
		</div>
	);
}

export default Home;
