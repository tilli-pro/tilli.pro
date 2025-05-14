import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function LinkCard({ emoji, label, link }: { emoji: string; label: string; link: string }) {
	return (
		<Link href={link}>
			<div className='bg-[#FCFCFC] w-103 border border-foreground-muted group flex items-center py-6 px-8 rounded hover:border-[#448DE6] hover:[background:var(--gradient-button-shadow)] transition-colors cursor-pointer shadow-sm'>
				<div className='text-2xl'>{emoji}</div>
				<span className='ml-4'>{label}</span>
				<ArrowRightIcon className='ml-auto size-5 opacity-0 group-hover:opacity-100 text-[#448DE6] transition-opacity' />
			</div>
		</Link>
	);
}
