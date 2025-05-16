import LongArrowUpRightSVG from '@/assets/svgs/LongArrowRightSVG';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Fragment } from 'react';

interface CardProps {
	title: string;
	subtitle: string;
	items: { label: string; href: string }[];
}

export default function Card({ title, subtitle, items }: CardProps) {
	return (
		<div className='flex bg-[#FCFCFC] hover:[background:var(--gradient-card-hover)] flex-col border border-foreground-muted rounded shadow-sm p-6 min-w-0'>
			<span className='text-foreground mb-2'>{subtitle}</span>
			<h3 className='text-2xl mb-14'>{title}</h3>

			<ul className='flex-1 space-y-4 mb-6'>
				{items.map(({ label, href }, index) => (
					<Fragment key={label}>
						<li>
							<Link className='flex items-center justify-between px-4 group hover:text-[#448DE6]' href={href}>
								<span>{label}</span>
								<LongArrowUpRightSVG className='size-5' stroke='currentColor' />
							</Link>
						</li>
						{index !== items.length - 1 && <hr className='border-foreground-muted py-1' />}
					</Fragment>
				))}
			</ul>

			<Button className='mt-10 bg-transparent hover:[background:var(--gradient-card-button-hover)]' variant='outline'>
				View All
			</Button>
		</div>
	);
}
