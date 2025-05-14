import Image from 'next/image';
import AppsInDocSVG from './assets/introduction/AppsInDocSVG';
import GradientBackgroundSVG from './assets/introduction/GradientBackgroundSVG';
import Terminal1SVG from './assets/introduction/Terminal1SVG';
import Terminal2SVG from './assets/introduction/Terminal2SVG';

export default function Section1() {
	return (
		<div className='text-black flex gap-10 p-20'>
			{/* left */}
			<div className='space-y-5 flex-1'>
				<h2 className='text-foreground'>Welcome Developers 👋</h2>
				<h2 className='text-6xl'>Build with tilli</h2>
				<p className='text-lg'>The tools you need to integrate billing, payments, and messaging—fast.</p>
				<p className='text-lg'>Building blocks for developers</p>
				<p>
					Build, customize, and scale with Tilli&apos;s modern APIs for billing, payments, and communications. Whether
					you&apos;re integrating TilliX, Monay, or Nudge, our platform is built to get you up and running—fast.
				</p>
			</div>
			{/* right */}
			<div className='flex-1 relative'>
				{/* background */}
				<div className='relative rounded-xl overflow-hidden'>
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
				<span className='text-7xl z-50 absolute -top-5 -left-8'>✨</span>
				<span className='text-7xl z-50 absolute bottom-30 -right-8'>🖥️</span>
				<AppsInDocSVG className='size-fit z-30 absolute top-0 right-0' />
				<Terminal1SVG className='size-125 z-5 absolute -top-18 left-5' />
				<Terminal2SVG className='size-100 z-30 absolute -bottom-36 -right-15' />
			</div>
		</div>
	);
}
