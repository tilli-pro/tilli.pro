import Image from 'next/image';
import AppsInDocSVG from './assets/introduction/AppsInDocSVG';
import GradientBackgroundSVG from './assets/introduction/GradientBackgroundSVG';
import Terminal1SVG from './assets/introduction/Terminal1SVG';
import Terminal2SVG from './assets/introduction/Terminal2SVG';

export default function HeroSection() {
	return (
		<div className='flex flex-col @lg:flex-row gap-20 px-10 @sm:py-40 py-20'>
			{/* left */}
			<div className='space-y-6 flex-1 max-w-sm @sm:max-w-lg'>
				<h2 className='text-figma-gray-dark'>Welcome Developers 👋</h2>
				<h2 className='text-4xl @sm:text-7xl'>Build with tilli</h2>
				<p className='text-lg'>The tools you need to integrate billing, payments, and messaging—fast.</p>
				<div className='space-y-2'>
					<p className='text-lg'>Building blocks for developers</p>
					<p>
						Build, customize, and scale with Tilli&apos;s modern APIs for billing, payments, and communications.
						Whether you&apos;re integrating tilliX, tilliPay, or Nudge, our platform is built to get you up and
						running—fast.
					</p>
				</div>
			</div>

			{/* right */}
			<div className='flex-1 relative hidden @6xl:block'>
				{/* background */}
				<div className='relative h-full w-[85%] rounded-xl overflow-hidden'>
					<GradientBackgroundSVG className='size-full z-10' />
					<Image
						src='/images/Noise.png'
						alt='noise'
						width={1000}
						height={1000}
						className='size-full z-10 top-0 left-0 absolute mix-blend-soft-light'
					/>
				</div>
				{/* widgets absolutely positioned */}
				<span className='text-7xl z-50 absolute -top-5 -left-8 blur-[2px]'>✨</span>
				<span className='text-7xl z-50 absolute bottom-27 right-19 blur-[2px]'>🖥️</span>
				<AppsInDocSVG className='size-fit z-30 absolute top-0 right-28' />
				<Terminal1SVG className='size-125 z-5 absolute -top-19 left-5' />
				<Terminal2SVG className='size-100 z-30 absolute -bottom-40 right-15' />
			</div>
		</div>
	);
}
