import Ellipses from '../Ellipses';
import HeroSectionLeft from './HeroSectionLeft';
import HeroSectionRight from './HeroSectionRight';

export default function HeroSection() {
	return (
		<div className='relative min-h-screen'>
			{/* Main content */}
			<HeroSectionLeft />
			<HeroSectionRight />

			{/* Bottom section (text) */}
			<p className='text-center absolute bottom-10 left-1/2 -translate-x-1/2'>Supported by businesses across the globe</p>

			{/* Ellipses (background) */}
			<Ellipses />
		</div>
	);
}
