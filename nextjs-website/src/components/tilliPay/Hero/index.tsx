import EllipseSVG from './EllipseSVG';
import MacbookDisplayingInvoicesPage from '../../LandingPage/components/HeroSection/MacbookDisplayingInvoicesPage';
import HeroLeft from './HeroLeft';
import TryTilliPayCTA from './TryTilliPayCTA';

export default function Hero() {
	return (
		<div className='relative z-10'>
			{/* Ellipse background (bottom half) */}
			{/* TODO: figure out how to export all the elipses as one svg then replace this @GeorgeIpsum @vuolo */}
			<EllipseSVG className='border-2 border-red-500 absolute bottom-0 w-full left-0 h-2/3 z-0 pointer-events-none' />

			{/* Foreground content */}
			<div className='relative z-10 flex flex-col items-center justify-center gap-4 @xl:max-w-2xl text-center mx-auto'>
				<HeroLeft />
				<MacbookDisplayingInvoicesPage className='w-250 mt-25' />
			</div>

			<TryTilliPayCTA />
		</div>
	);
}
