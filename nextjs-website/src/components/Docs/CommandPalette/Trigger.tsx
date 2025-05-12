import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import { KeyboardShortcut } from './KeyboardShortcut';

interface CommandPaletteTriggerProps {
	setOpen: (open: boolean) => void;
}

export default function CommandPaletteTrigger({ setOpen }: CommandPaletteTriggerProps) {
	const openCommandPalette = () => setOpen(true);

	return (
		<Button
			onClick={openCommandPalette}
			className='hidden h-8 justify-between border px-2 py-4 text-muted-foreground hover:bg-border hover:text-primary sm:flex'
			variant='ghost'
		>
			<div className='flex items-center'>
				<SearchIcon className='size-5' />
				<span className='ml-2 mr-10'>Search documentation...</span>
			</div>

			<KeyboardShortcut keys={['⌘ K']} className='bg-border py-0.5' />
		</Button>
	);
}
