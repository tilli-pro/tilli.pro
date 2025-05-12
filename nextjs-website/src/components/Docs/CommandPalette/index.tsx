'use client';

import { CommandInput, CommandList, CommandItem, CommandDialog } from '@/components/ui/command';
import { useCommandPalette } from './useCommandPalette';
import CommandPaletteTrigger from './Trigger';

export default function DocsCommandPalette() {
	const { open, setOpen } = useCommandPalette();

	return (
		<>
			<CommandPaletteTrigger setOpen={setOpen} />

			{/* dialog */}
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
