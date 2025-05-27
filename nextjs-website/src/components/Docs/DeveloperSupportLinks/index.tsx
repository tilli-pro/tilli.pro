import LongArrowUpRightSVG from '@/assets/svgs/LongArrowRightSVG';
import Link from 'next/link';
import { links } from './data';

export default function DeveloperSupportLinks() {
	return (
		<div className='space-y-4 pl-10 sm:pl-20 sm:py-20 w-full max-w-7xl flex flex-col'>
			<h2 className='text-5xl pb-4'>Learn More</h2>
			{links.map(({ label, href }) => (
				<Link
					className='flex items-center w-fit gap-4 border-b border-transparent hover:border-figma-gray-medium text-figma-gray-medium transition-colors duration-200'
					key={label}
					href={href}
				>
					{label} <LongArrowUpRightSVG className='size-5' stroke='currentColor' />
				</Link>
			))}
		</div>
	);
}
