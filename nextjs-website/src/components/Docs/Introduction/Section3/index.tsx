import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { features, productTabs } from './data';
import FeatureItem from './FeatureItem';

export default function Section3() {
	return (
		<section className='px-10 py-20 text-off-black'>
			{/* Product Tabs */}
			<div className='mb-6 flex flex-col gap-4'>
				<span className='text-black/50 text-lg'>SEE IT IN ACTION</span>
				<div className='flex gap-6 mb-10'>
					{productTabs.map((label) => (
						<Button
							key={label}
							size='lg'
							variant='outline'
							className='rounded-full border-off-black shadow-sm text-off-black'
						>
							{label}
						</Button>
					))}
				</div>
			</div>

			{/* Section Heading */}
			<h2 className='text-5xl mb-12'>Build Your Payment Integration with Tillipay</h2>

			{/* Content Grid */}
			<div className='flex flex-col md:flex-row justify-between gap-10'>
				{/* Features List */}
				<div className='max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8'>
					{features.map((feature) => (
						<FeatureItem key={feature.title} feature={feature} />
					))}
				</div>

				{/* Image */}
				<div className='flex flex-1 justify-center'>
					<Image
						src='/images/docs/introduction/build-your-payment-integration-with-tillipay.png'
						alt='Tillipay integration diagram'
						width={375}
						height={375}
						className='max-w-full h-auto'
					/>
				</div>
			</div>
		</section>
	);
}
