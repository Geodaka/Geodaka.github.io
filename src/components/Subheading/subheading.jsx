import './subheading.scss';

function SubHeading({ text, headingClass }) {
	return (
		<div>
			<h2 className={headingClass}>{text}</h2>
		</div>
	);
}
export default SubHeading;
