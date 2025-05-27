import Image from 'next/image';
import { features } from './data';
import FeatureItem from './FeatureItem';
import ProductTabs from '../ProductTabs';

export default function TilliPayFeatureSection() {
	return (
		<section className='px-4 sm:px-6 lg:px-10'>
			<ProductTabs />
			{/* Section Heading */}
			<h2 className='text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-10 lg:mb-12'>
				Build Your Payment Integration with tilliPay
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
				<div className='flex flex-1 justify-center items-center mt-4'>
					<Image
						src='/images/docs/introduction/build-your-payment-integration-with-tillipay.png'
						alt='tilliPay integration diagram'
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
