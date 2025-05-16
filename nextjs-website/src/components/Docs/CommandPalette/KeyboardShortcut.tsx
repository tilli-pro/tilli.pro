import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface KeyboardShortcutProps {
	keys: string[] | ReactNode;
	className?: string;
}

export function KeyboardShortcut({ keys, className }: KeyboardShortcutProps) {
	const kbdClass = cn('rounded border px-1.5 font-mono text-xs', className);

	if (Array.isArray(keys)) {
		return (
			<div className='flex items-center gap-1'>
				{keys.map((key) => (
					<kbd key={key} className={kbdClass}>
						{key}
					</kbd>
				))}
			</div>
		);
	}

	return <kbd className={kbdClass}>{keys}</kbd>;
}
