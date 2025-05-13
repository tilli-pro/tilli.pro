import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import { KeyboardShortcut } from './KeyboardShortcut';

const variantsConfig = {
	header: {
		buttonClassName: 'hidden h-8 justify-between w-70 border px-2 py-4 hover:bg-border hover:text-primary sm:flex',
		searchIconClassName: 'size-5',
		keyboardShortcutClassName: 'bg-border py-0.5',
	},
	sidebar: {
		buttonClassName: 'mx-auto w-fit p-0 text-foreground-muted font-inter hover:bg-transparent flex',
		searchIconClassName: 'size-4',
		keyboardShortcutClassName: 'bg-white py-1 px-2.5 text-sm ml-1',
	},
};

interface CommandPaletteTriggerProps {
	setOpen: (open: boolean) => void;
	variant?: 'header' | 'sidebar';
}

export default function CommandPaletteTrigger({ setOpen, variant = 'header' }: CommandPaletteTriggerProps) {
	const openCommandPalette = () => setOpen(true);
	const config = variantsConfig[variant];

	return (
		<Button onClick={openCommandPalette} className={config.buttonClassName} variant='ghost'>
			<div className='flex items-center'>
				<SearchIcon className={config.searchIconClassName} />
				<span className='mx-2'>Search documentation...</span>
			</div>

			<KeyboardShortcut keys={['⌘ K']} className={config.keyboardShortcutClassName} />
		</Button>
	);
}
