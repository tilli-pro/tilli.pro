import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from 'lucide-react';

export default function TryTilliPayCTA() {
	return (
		<div className='bg-white relative z-10 flex flex-col xl:flex-row items-center justify-between gap-4 xl:absolute xl:bottom-0 w-full py-15'>
			<div className='space-y-4'>
				<h2 className='text-4xl z-20'>All-In-One Payments, Done Right</h2>
				<p className='font-inter'>
					Everything your team needs to accept, track, and manage payments—without jumping between tools.
				</p>
			</div>

			<Button className='[background:var(--gradient-gradient-4)] rounded-full'>
				Try tilliPay <ExternalLinkIcon className='ml-2 size-4' />
			</Button>
		</div>
	);
}
