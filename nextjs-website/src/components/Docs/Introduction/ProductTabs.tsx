import { productTabs } from './TilliPayFeatureSection/data';
import { Button } from '@/components/ui/button';

export default function ProductTabs() {
	return (
		<div className='mb-4 sm:mb-6 flex flex-col gap-3 sm:gap-4'>
			<span className='text-black/50 text-base sm:text-lg'>SEE IT IN ACTION</span>
			<div className='flex flex-wrap gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10'>
				{productTabs.map((label) => (
					<Button
						key={label}
						size='lg'
						variant='outline'
						className='rounded-full border-brand-block shadow-sm whitespace-nowrap'
					>
						{label}
					</Button>
				))}
			</div>
		</div>
	);
}
