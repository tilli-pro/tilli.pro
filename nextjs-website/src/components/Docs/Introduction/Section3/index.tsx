import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { features, productTabs } from './data';
import FeatureItem from './FeatureItem';

export default function Section3() {
	return (
		<section className='px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20 text-off-black'>
			{/* Product Tabs */}
			<div className='mb-4 sm:mb-6 flex flex-col gap-3 sm:gap-4'>
				<span className='text-black/50 text-base sm:text-lg'>SEE IT IN ACTION</span>
				<div className='flex flex-wrap gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10'>
					{productTabs.map((label) => (
						<Button
							key={label}
							size='default'
							variant='outline'
							className='rounded-full border-off-black shadow-sm text-off-black text-sm sm:text-base whitespace-nowrap'
						>
							{label}
						</Button>
					))}
				</div>
			</div>

			{/* Section Heading */}
			<h2 className='text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-10 lg:mb-12'>
				Build Your Payment Integration with Tillipay
			</h2>

			{/* Content Grid */}
			<div className='flex flex-col xl:flex-row justify-between gap-8 sm:gap-10'>
				{/* Features List */}
				<div className='w-full xl:max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-x-10 lg:gap-y-8'>
					{features.map((feature) => (
						<FeatureItem key={feature.title} feature={feature} />
					))}
				</div>

				{/* Image */}
				<div className='flex flex-1 justify-center items-center mt-4 xl:mt-0'>
					<Image
						src='/images/docs/introduction/build-your-payment-integration-with-tillipay.png'
						alt='Tillipay integration diagram'
						width={375}
						height={375}
						className='max-w-full h-auto w-full sm:w-[375px]'
						priority
					/>
				</div>
			</div>
		</section>
	);
}
