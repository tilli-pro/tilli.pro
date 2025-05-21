import { ClipboardIcon } from 'lucide-react';
import GradientLinkButton from '../GradientLinkButton';

export default function JoinUsSection() {
	return (
		<div className='flex flex-col md:flex-row items-center justify-between @lg:px-20 gap-10'>
			<h1 className='text-2xl @2xl:text-5xl leading-tight'>
				Join us and shape the future of <br className='hidden @2xl:block' /> modern business tools.
			</h1>

			<GradientLinkButton
				href='/careers'
				backgroundColor='white'
				linkClassName='p-[1.5px] [background:var(--gradient-gradient-4)]'
				divClassName='hover:bg-blue-50'
			>
				<span className='whitespace-nowrap'>See Our Open Roles</span>
				<ClipboardIcon size={20} strokeWidth={1.75} />
			</GradientLinkButton>
		</div>
	);
}
