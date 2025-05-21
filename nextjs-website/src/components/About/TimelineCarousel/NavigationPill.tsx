import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationPillProps {
	year: string;
	isActive: boolean;
	onClick: () => void;
}

export default function NavigationPill({ year, isActive, onClick }: NavigationPillProps) {
	return (
		<Button
			className={cn('rounded-full p-[1px] bg-white', {
				'[background-image:var(--gradient-light-blue)]': isActive,
				'border border-[#98B2E9] text-[#98B2E9] hover:bg-[#98B2E9] hover:text-white': !isActive,
			})}
			onClick={onClick}
		>
			{/* for active pill force create a gap between pill content and border */}
			<span
				className={cn('bg-white rounded-full p-[3px]', {
					'bg-transparent': !isActive,
				})}
			>
				{/* pill content */}
				<span
					className={cn('block rounded-full px-4 py-1', {
						'[background-image:var(--gradient-light-blue)] text-white': isActive,
					})}
				>
					{year}
				</span>
			</span>
		</Button>
	);
}
