import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { navColumns, bottomLinks } from './data';
import { cn } from '@/lib/utils';

export default function RightSection() {
	return (
		<div className='flex flex-col justify-between flex-1'>
			<div className='md:flex md:justify-between grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12'>
				{navColumns.map((col) => (
					<div key={col.title}>
						<h4 className='mb-3 text-lg'>{col.title}</h4>
						<ul className='space-y-1 text-sm text-figma-gray-medium'>
							{col.title === 'Developers'
								? col.links.map((link, idx) =>
										'extra' in link ? (
											<li key={idx}>
												<span className={cn(link.className, 'font-semibold')}>{link.label}</span>
												<div className='ml-0.5'>
													<Link href={link.href}>{link.extra}</Link>
												</div>
											</li>
										) : null
								  )
								: col.links.map((link, idx) => (
										<li key={idx}>
											<Link href={link.href}>{link.label}</Link>
										</li>
								  ))}
						</ul>
					</div>
				))}
			</div>

			{/* Bottom Row */}
			<div className='flex flex-col md:flex-row justify-between items-end mt-12 gap-8'>
				{/* Links */}
				<div className='space-y-2 text-xl'>
					{bottomLinks.map((link) => (
						<Link key={link.label} href={link.href} className={cn(link.className, 'flex items-end gap-2')}>
							{link.label} <ArrowUpRightIcon strokeWidth={1.5} />
						</Link>
					))}
				</div>
				{/* Headquarters */}
				<div className='text-right'>
					<h4 className='font-semibold mb-2 text-xl'>Headquarters</h4>
					<address className='not-italic text-figma-gray-medium text-sm'>
						8260 Greensboro Dr,
						<br />
						Suite 270, McLean VA, 22102
					</address>
				</div>
			</div>
		</div>
	);
}
