import { ArrowRightIcon } from 'lucide-react';

const cards = [
	{ emoji: 'ℹ️', label: 'Users Guide' },
	{ emoji: '🖥️', label: 'Developers Guide' },
	{ emoji: '👨‍💻', label: 'Technology Partners' },
];

export default function Section2() {
	return (
		<div className='text-black py-20 px-10 space-y-10'>
			<h2 className='text-5xl'>tilli Documentation</h2>

			<div className='flex gap-2 justify-between'>
				{cards.map(({ emoji, label }) => (
					<Card key={label} emoji={emoji} label={label} />
				))}
			</div>
		</div>
	);
}

const Card = ({ emoji, label }: { emoji: string; label: string }) => {
	return (
		<div className='bg-[#FCFCFC] w-100 border hover:[background:var(--gradient-button-shadow)] border-foreground-muted group flex items-center py-6 px-8 rounded hover:border-[#448DE6] transition-colors cursor-pointer shadow-sm'>
			<div className='text-2xl'>{emoji}</div>
			<span className='ml-4'>{label}</span>
			<ArrowRightIcon className='ml-auto size-5 opacity-0 group-hover:opacity-100 text-[#448DE6] transition-opacity' />
		</div>
	);
};
