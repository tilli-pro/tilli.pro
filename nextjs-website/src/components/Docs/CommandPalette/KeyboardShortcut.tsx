import { cn } from '@/lib/utils';

interface KeyboardShortcutProps {
	keys: string[];
	className?: string;
}

export function KeyboardShortcut({ keys, className }: KeyboardShortcutProps) {
	return (
		<div className='flex items-center gap-1'>
			{keys.map((key) => (
				<kbd key={key} className={cn('rounded border bg-muted px-1.5 font-mono text-xs', className)}>
					{key}
				</kbd>
			))}
		</div>
	);
}
