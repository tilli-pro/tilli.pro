import LongArrowUpRightSVG from '@/assets/svgs/LongArrowUpRightSVG';

interface InfoCardProps {
	emoji: string;
	title: string;
	subtitle: string;
	items: string[];
	cta: string;
}

export default function InfoCard({ emoji, title, subtitle, items, cta }: InfoCardProps) {
	return (
		<div className='bg-[#FCFCFC] size-full border border-foreground-muted flex flex-col px-8 py-12 rounded-lg shadow-sm'>
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

			<div className='mt-auto group font-medium flex items-center gap-1 cursor-pointer hover:text-[#448DE6]'>
				{cta}
				{title === 'Quick Start' && <LongArrowUpRightSVG className='ml-2' stroke='currentColor' />}
			</div>
		</div>
	);
}
