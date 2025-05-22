import TillipaySVG from '@/assets/branding/TillipaySVG';
import TilliPayWordmark from '@/assets/branding/TilliPayWordmark';
import GradientLinkButton from '@/components/GradientLinkButton';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from 'lucide-react';

export default function HeroLeft() {
	return (
		<>
			<div className='flex items-center gap-2'>
				<TillipaySVG tFill='#02B1FF' pFill='#335EF6' className='size-6' />
				<TilliPayWordmark size={20} />
			</div>
			<h2 className='text-4xl @6xl:text-6xl leading-tight bg-[image:var(--gradient-title-gradient)] bg-clip-text text-transparent'>
				Bill Payments <br className='hidden @xl:block' /> Made Easy
			</h2>
			<p className='text-lg'>
				tilliPay helps you collect, manage, and automate payments in one seamless platform—built to meet the needs of
				modern service providers and their customers.
			</p>
			<div className='flex items-center gap-4'>
				<GradientLinkButton
					href='/tilliPay/demo'
					linkClassName='p-[1.5px] [background:var(--gradient-gradient-4)]'
					backgroundColor='white'
					divClassName='h-10 gap-4 px-6'
				>
					<p className='whitespace-nowrap'>View our Products</p> <ChevronRightIcon strokeWidth={1.5} size={24} />
				</GradientLinkButton>
				<Button
					variant='outline'
					className='font-normal text-base hover:text-white hover:opacity-90 gap-4 [background:var(--gradient-gradient-4)] !px-6 !py-2 text-white rounded-full h-11'
				>
					Book a Demo
					<ChevronRightIcon className='size-[24px]' strokeWidth={1.5} />
				</Button>
			</div>
		</>
	);
}
