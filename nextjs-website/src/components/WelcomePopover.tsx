import ULogo from '@/assets/branding/TilliUSVG';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

export default function WelcomePopover() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button className='size-12 fixed bottom-30 right-10 z-10 shadow-lg [background:var(--gradient-welcome-popover-trigger)]'>
					<ULogo className='size-6' />
				</Button>
			</PopoverTrigger>

			<PopoverContent
				align='end'
				sideOffset={16}
				className='w-96 text-white font-inter bg-white overflow-hidden rounded-md shadow-2xl p-0'
			>
				<PopoverHeader />
				<PopoverOptions />
				<PopoverFooter />
			</PopoverContent>
		</Popover>
	);
}

const PopoverHeader = () => {
	return (
		<div className='[background:var(--gradient-welcome-popover-content-header)] py-6 px-9'>
			<h2 className='text-2xl font-bold flex items-center gap-2'>
				Hi{' '}
				<span role='img' aria-label='wave'>
					👋
				</span>
			</h2>
			<h3 className='text-xl font-semibold mb-3'>Welcome to tilli.</h3>
			<p>How can we help you today?</p>
		</div>
	);
};

type Option = {
	label: string;
	icon: string;
};

const options: Option[] = [
	{ label: 'Get Started today', icon: '🚀' },
	{ label: 'Book a Demo', icon: '📚' },
	{ label: 'Ask a question', icon: '🧑‍💼' },
	{ label: 'Learn more about tilli', icon: '💻' },
];

const PopoverOptions = () => {
	return (
		<div className='bg-white flex flex-col gap-4 px-14 py-9 pb-12'>
			{options.map(({ label, icon }) => (
				<Button key={label} className='py-6'>
					{label} <span className='ml-2'>{icon}</span>
				</Button>
			))}
		</div>
	);
};

const PopoverFooter = () => {
	return (
		<>
			<hr />
			<div className='bg-white px-6 py-3'>
				<p className='text-center text-foreground text-sm'>Learn more about tilli&apos;s privacy policy</p>
			</div>
		</>
	);
};
