import React, { useState, useEffect } from 'react';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import data from './data';
import SubHeading from '../Subheading/subheading';
import './testimonials.scss';
import charles from '../../Assets/Images/charles.jpg'
import zuck from '../../Assets/Images/zuck.jpg'
import eric from '../../Assets/Images/eric.jpg'

function Testimonials() {

	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = data.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index]);


	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => clearInterval(slider);
	}, [index]);

	return (
		<section className='section opportunity'>
			<SubHeading text='Opportunity Statements' headingClass='reviews' />
			<div className='section-center'>
				{data.map((person, personIndex) => {
					const { id, img, name, job, text } = person;

					let position = 'nextSlide';
					if (personIndex === index) {
						position = 'activeSlide';
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === data.length - 1)
					) {
						position = 'lastSlide';
					}

					const getImage = (img) => {
						if (img === 'charles')
							return charles;
						if (img === 'zuck')
							return zuck;
						if (img === 'eric')
							return eric;
						return img;
					}

					return (
						<article className={position} key={id}>
							<img src={getImage(img)} className='person-img' alt={name} />
							<h4 className='name'>{name}</h4>
							<p className='title'>{job}</p>
							<p className='text'>{text}</p>

							<FaQuoteRight className='icon accent' />
						</article>
					);
				})}

				<button className='prev' onClick={() => setIndex(index - 1)}>
					<FaChevronLeft />
				</button>

				<button className='next' onClick={() => setIndex(index + 1)}>
					<FaChevronRight />
				</button>
			</div>
		</section>
	);
}

export default Testimonials;
