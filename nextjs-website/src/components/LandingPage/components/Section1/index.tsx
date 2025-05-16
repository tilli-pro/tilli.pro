import Ellipses from '../Ellipses';
import WelcomePopover from '../../../WelcomePopover';
import Section1Left from './Section1Left';
import Section1Right from './Section1Right';

export default function Section1() {
	return (
		<div className='relative min-h-screen'>
			{/* Main content */}
			<Section1Left />
			<Section1Right />
			{/* Bottom section (text) */}
			<p className='text-center absolute bottom-10 left-1/2 -translate-x-1/2'>Supported by businesses across the globe</p>

			{/* Welcome popover */}
			<WelcomePopover />

			{/* Ellipses (background) */}
			<Ellipses />
		</div>
	);
}
