import './closing.scss';
import * as environment from '../../environment';

function Closing() {
	return (
		<section className='closing'>
			<div className='closing-logo'>Contact Us</div>
			<div className='support'>
				Email: {`${environment.CONTACT_EMAIL}`}
			</div>
			{/* <ul>
				<li>
					<a href='https://www.facebook.com/'>
						<i className='fab fa-facebook-square'></i>
					</a>
					&nbsp;
				</li>
				<li>
					<a href='https://twitter.com/'>
						<i className='fab fa-twitter-square'></i>
					</a>
					&nbsp;
				</li>
				<li>
					<a href='https://www.linkedin.com/'>
						<i className='fab fa-linkedin'></i>
					</a>
					&nbsp;
				</li>
				<li>
					<a href='https://www.pinterest.com/'>
						<i className='fab fa-pinterest-square'></i>
					</a>
					&nbsp;
				</li>
			</ul> */}
		</section>
	);
}

export default Closing;
