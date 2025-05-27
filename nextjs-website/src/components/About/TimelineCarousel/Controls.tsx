import { cn } from '@/lib/utils';
import GradientChevronLeftSVG from '@/assets/svgs/GradientChevronLeft';
import GradientChevronRightSVG from '@/assets/svgs/GradientChevronRight';
import { Button } from '@/components/ui/button';

interface ControlsProps {
	current: number;
	maxIdx: number;
	prev: () => void;
	next: () => void;
}

export default function Controls({ current, maxIdx, prev, next }: ControlsProps) {
	return (
		<div className='flex items-center gap-14 pb-6'>
			{/* Left Button */}
			<Button
				variant='ghost'
				size='icon'
				className={cn({
					'opacity-50 pointer-events-none': current === 0,
				})}
				onClick={prev}
			>
				<GradientChevronLeftSVG className='scale-225' />
			</Button>

			{/* Right Button */}
			<Button
				variant='ghost'
				size='icon'
				className={cn({
					'opacity-50 pointer-events-none': current >= maxIdx,
				})}
				onClick={next}
			>
				<GradientChevronRightSVG className='scale-225' />
			</Button>
		</div>
	);
}
