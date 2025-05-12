import { useEffect, useCallback, useState } from 'react';

export function useCommandPalette() {
	const [open, setOpen] = useState(false);

	// Open palette on ⌘K or Ctrl+K
	const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
		if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			setOpen(true);
		}
	}, []);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				setOpen(true);
			}
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, []);

	return { open, setOpen, handleKeyDown };
}
