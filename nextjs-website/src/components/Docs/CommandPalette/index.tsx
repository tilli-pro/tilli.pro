'use client';

import { CommandInput, CommandList, CommandItem, CommandDialog } from '@/components/ui/command';
import { useCommandPalette } from './useCommandPalette';
import { Input } from '@/components/ui/input';

export default function DocsCommandPalette() {
	const { open, setOpen, handleKeyDown } = useCommandPalette();

	return (
		<>
			{/* trigger */}
			<div className='relative'>
				<Input
					onKeyDown={handleKeyDown}
					onClick={() => setOpen(true)}
					readOnly
					placeholder='Search documentation...'
					className='pr-20 text-xl py-5 shadow-sm placeholder:text-foreground-muted'
				/>
				<div className='absolute right-4 top-1/2 -translate-y-1/2 flex items-center'>
					<kbd className='pointer-events-none select-none rounded border px-2 py-1 text-xs font-mono text-foreground-muted border-foreground-muted'>
						⌘ K
					</kbd>
				</div>
			</div>

			{/* Command dialog */}
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder='Type a command or search...' />
				<CommandList>
					<CommandItem>Quick Start</CommandItem>
					<CommandItem>API Reference</CommandItem>
					<CommandItem>FAQ</CommandItem>
					<CommandItem>Contact Support</CommandItem>
				</CommandList>
			</CommandDialog>
		</>
	);
}
