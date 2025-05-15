import LongArrowUpRightSVG from '@/assets/svgs/LongArrowRightSVG';
import Link from 'next/link';

// TODO: Swap out with correct links
const links = [
	{ label: 'Join our Slack', href: 'https://docs.tilli.com/slack' },
	{ label: 'Contact Developer Support', href: 'https://docs.tilli.com/support' },
	{ label: 'System Status', href: 'https://docs.tilli.com/support' },
	{ label: 'Submit a ticket', href: 'https://docs.tilli.com/support' },
];

export default function Section6() {
	return (
		<div className='text-off-black space-y-4 pl-20 py-20 w-full max-w-7xl flex flex-col'>
			<h2 className='text-6xl pb-2'>Support</h2>
			{links.map(({ label, href }) => (
				<Link className='flex items-center gap-4 hover:text-[#448DE6]' key={label} href={href}>
					{label} <LongArrowUpRightSVG className='size-5' stroke='currentColor' />
				</Link>
			))}
		</div>
	);
}
