'use client';

import ULogo from '@/assets/ULogo';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

const gradientBG =
	'bg-[linear-gradient(106deg,rgba(108,239,239,0.80)_0%,rgba(70,72,255,0.80)_65.07%,rgba(113,47,255,0.80)_100%)]';

const options = [
	{ label: 'Get Started today', icon: '🚀' },
	{ label: 'Book a Demo', icon: '📚' },
	{ label: 'Ask a question', icon: '🧑‍💼' },
	{ label: 'Learn more about tilli', icon: '💻' },
];

export default function WelcomePopover() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button className={`size-12 fixed bottom-30 right-10 z-10 shadow-lg ${gradientBG}`}>
					<ULogo className='size-6' />
				</Button>
			</PopoverTrigger>

			<PopoverContent
				align='end'
				sideOffset={16}
				className='w-96 text-white font-inter overflow-hidden rounded-md shadow-2xl p-0'
			>
				<div className={`${gradientBG} py-6 px-9`}>
					<h2 className='text-2xl font-bold flex items-center gap-2'>
						Hi{' '}
						<span role='img' aria-label='wave'>
							👋
						</span>
					</h2>
					<h3 className='text-xl font-semibold mb-3'>Welcome to tilli.</h3>
					<p className='mb-2'>How can we help you today?</p>
				</div>

				<div className='bg-white flex flex-col gap-4 px-12 py-9 pb-12'>
					{options.map(({ label, icon }) => (
						<Button key={label} className='py-6'>
							{label} <span className='ml-2'>{icon}</span>
						</Button>
					))}
				</div>

				<hr />

				<div className='bg-white px-6 py-3'>
					<p className='text-center text-foreground text-sm'>Learn more about tilli&apos;s privacy policy</p>
				</div>
			</PopoverContent>
		</Popover>
	);
}
