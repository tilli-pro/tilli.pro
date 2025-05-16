import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import { KeyboardShortcut } from './KeyboardShortcut';
import { cn } from '@/lib/utils';

const variantsConfig = {
	header: {
		buttonClassName: 'hidden h-8 justify-between w-70 border px-2 py-4 hover:bg-border sm:flex',
		searchIconClassName: 'size-5',
		keyboardShortcutClassName: 'bg-border py-0.5',
		buttonLeftContainerClassName: '',
		keys: ['⌘ K'],
	},
	sidebar: {
		buttonClassName: 'p-0 font-inter hover:bg-transparent group', // FIXME: for some reason, the group is applying to the whole DocsSidebar
		searchIconClassName: 'size-4 stroke-[1.5]',
		keyboardShortcutClassName: 'bg-white py-0.5 text-sm ml-1 group-hover:text-brand-black',
		buttonLeftContainerClassName: 'group-hover:text-brand-black',
		keys: (
			<div className='flex items-center gap-2 justify-between'>
				<span className='font-light'>⌘</span>
				<span>K</span>
			</div>
		),
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
		<Button className={config.buttonClassName} variant='ghost' onClick={openCommandPalette}>
			<div className={cn('flex items-center text-figma-gray-medium', config.buttonLeftContainerClassName)}>
				<SearchIcon className={config.searchIconClassName} />
				<span className='mx-2'>Search documentation...</span>
			</div>

			<KeyboardShortcut keys={config.keys} className={config.keyboardShortcutClassName} />
		</Button>
	);
}
