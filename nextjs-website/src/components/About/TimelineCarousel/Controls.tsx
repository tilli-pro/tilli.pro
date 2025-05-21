import { ChevronRightIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ChevronLeftIcon } from 'lucide-react';

interface ControlsProps {
	current: number;
	maxIdx: number;
	prev: () => void;
	next: () => void;
}

export default function Controls({ current, maxIdx, prev, next }: ControlsProps) {
	return (
		<div className='flex items-center gap-4 pb-6'>
			<ChevronLeftIcon
				className={cn('text-[#448DE6] cursor-pointer', {
					'opacity-50 pointer-events-none': current === 0,
				})}
				size={30}
				onClick={prev}
			/>
			<ChevronRightIcon
				className={cn('text-[#448DE6] cursor-pointer', {
					'opacity-50 pointer-events-none': current >= maxIdx,
				})}
				size={30}
				onClick={next}
			/>
		</div>
	);
}
