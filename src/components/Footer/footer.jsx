import './footer.scss';
import * as environment from '../../environment';

function Footer() {
	return (
		<footer>
			<hr />
			<p>
				Built by <a href='/'>{`${environment.ORGANIZATION_NAME}`}</a>
			</p>
		</footer>
	);
}

export default Footer;
