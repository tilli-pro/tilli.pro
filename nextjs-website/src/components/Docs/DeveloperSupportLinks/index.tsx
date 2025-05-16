import LongArrowUpRightSVG from '@/assets/svgs/LongArrowRightSVG';
import Link from 'next/link';
import { links } from './data';

export default function DeveloperSupportLinks() {
	return (
		<div className='text-off-black space-y-4 pl-10 sm:pl-20 sm:py-20 w-full max-w-7xl flex flex-col'>
			<h2 className='text-6xl pb-2'>Support</h2>
			{links.map(({ label, href }) => (
				<Link className='flex items-center gap-4 hover:text-[#448DE6]' key={label} href={href}>
					{label} <LongArrowUpRightSVG className='size-5' stroke='currentColor' />
				</Link>
			))}
		</div>
	);
}
