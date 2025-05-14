import { ArrowRightIcon } from 'lucide-react';
import LongArrowRightSVG from '@/assets/svgs/LongArrowRightSVG';

// Static card data
const cards = [
	{ emoji: 'ℹ️', label: 'Users Guide' },
	{ emoji: '🖥️', label: 'Developers Guide' },
	{ emoji: '👨‍💻', label: 'Technology Partners' },
];

const infoCards = [
	{
		emoji: '🚀',
		title: 'Quick Start',
		subtitle: 'Launch your first integration in minutes.',
		items: ['API key setup', 'Environment setup', 'API Call', 'Authentication overview'],
		cta: 'Get Started',
	},
	{
		emoji: '❓',
		title: 'FAQS',
		subtitle: 'Launch your first integration in minutes.',
		items: [
			'Troubleshooting failed payments',
			'Understanding ____',
			'Supported channels in Nudge',
			'Managing billers in tilliX',
		],
		cta: 'View FAQS',
	},
	{
		emoji: '📖',
		title: 'Learn',
		subtitle: 'Launch your first integration in minutes.',
		items: [
			'Design patterns and usage guidelines',
			'Handling errors and retries',
			'Rate limits and pagination',
			'API structure and object models',
		],
		cta: 'Explore Concepts',
	},
];

export default function Section2() {
	return (
		<div className='text-black py-20 px-10 space-y-10'>
			<h2 className='text-5xl'>tilli Documentation</h2>

			<div className='flex gap-2 justify-between'>
				{cards.map((card) => (
					<Card key={card.label} {...card} />
				))}
			</div>

			<div className='flex gap-6 justify-between mt-8'>
				{infoCards.map((card) => (
					<InfoCard key={card.title} {...card} />
				))}
			</div>
		</div>
	);
}

const Card = ({ emoji, label }: { emoji: string; label: string }) => (
	<div className='bg-[#FCFCFC] w-103 border border-foreground-muted group flex items-center py-6 px-8 rounded hover:border-[#448DE6] hover:[background:var(--gradient-button-shadow)] transition-colors cursor-pointer shadow-sm'>
		<div className='text-2xl'>{emoji}</div>
		<span className='ml-4'>{label}</span>
		<ArrowRightIcon className='ml-auto size-5 opacity-0 group-hover:opacity-100 text-[#448DE6] transition-opacity' />
	</div>
);

interface InfoCardProps {
	emoji: string;
	title: string;
	subtitle: string;
	items: string[];
	cta: string;
}

const InfoCard = ({ emoji, title, subtitle, items, cta }: InfoCardProps) => (
	<div className='bg-[#FCFCFC] w-103 border border-foreground-muted flex flex-col px-8 py-12 rounded-lg shadow-sm'>
		<div className='flex flex-col gap-1 mb-4'>
			<span className='text-3xl mb-2'>{emoji}</span>
			<span className='text-lg'>{title}</span>
			<div className='text-foreground'>{subtitle}</div>
		</div>

		<ul className='flex flex-col gap-2 mb-6'>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>

		<div className='mt-auto font-medium flex items-center gap-1 cursor-pointer hover:text-[#448DE6]'>
			{cta}
			{title === 'Quick Start' && <LongArrowRightSVG className='ml-2' />}
		</div>
	</div>
);
