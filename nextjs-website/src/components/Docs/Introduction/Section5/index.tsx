import LongArrowUpRightSVG from '@/assets/svgs/LongArrowRightSVG';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Fragment } from 'react';
const quickLinks = [
	{ label: 'Building smarter billing with tilliX', href: '#' },
	{ label: 'How we simplified payment links', href: '#' },
	{ label: 'Personalizing comms at scale', href: '#' },
	{ label: 'Our onboarding process', href: '#', highlight: true },
];

const popularGuides = [
	{ label: 'Generate your first payment link', href: '#' },
	{ label: 'Setup recurring invoices with tilliX', href: '#' },
	{ label: 'WhatsApp with Nudge', href: '#' },
	{ label: 'Implementing fallback logic', href: '#' },
];

const popularRepos = [
	{ label: '@tilliHQ/tillix-node-sdk', href: '#' },
	{ label: '@tilliHQ/monay-js-sdk', href: '#' },
	{ label: '@tilliHQ/nudge-api-wrapper', href: '#' },
	{ label: '@tilliHQ/tilli-sandbox-tools', href: '#' },
];

interface CardProps {
	title: string;
	subtitle: string;
	items: { label: string; href: string }[];
}

const Card = ({ title, subtitle, items }: CardProps) => {
	return (
		<div className='flex bg-[#FCFCFC] hover:[background:var(--gradient-card-hover)] flex-col border border-foreground-muted rounded text-off-black shadow-sm p-6 min-w-0'>
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
};

export default function Section5() {
	return (
		<section className='w-full px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
				<Card title='A Quick Link Title' subtitle='Quick Link' items={quickLinks} />
				<Card title='Popular guides' subtitle='Most visited docs' items={popularGuides} />
				<Card title='Popular repos' subtitle='@tillihq on GitHub' items={popularRepos} />
			</div>
		</section>
	);
}
