import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

export function useCommandPalette() {
	const [open, setOpen] = useState(false);

	useHotkeys('meta+k, ctrl+k', () => {
		setOpen((open) => !open);
	});

	return { open, setOpen };
}
