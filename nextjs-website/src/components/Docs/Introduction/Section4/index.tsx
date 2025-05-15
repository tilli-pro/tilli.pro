import Widget1SVG from './assets/Widget1SVG';
import Widget2SVG from './assets/Widget2SVG';
import Widget3SVG from './assets/Widget3SVG';

export default function Section4() {
	return (
		<div className='flex flex-col gap-4 justify-center items-center'>
			<div className='flex flex-col xl:flex-row gap-4'>
				<Widget1SVG />
				<Widget2SVG />
			</div>
			<Widget3SVG />
		</div>
	);
}
