'use client';

import { useHotkeys } from 'react-hotkeys-hook';

// import { useTheme } from '@tilli-pro/ui/theme';

export default function GlobalHotkeys() {
	// const { resolvedTheme: theme, setTheme } = useTheme();

	/** theme (toggle) */
	useHotkeys(
		'meta+alt+t, ctrl+alt+t',
		() => {
			// setTheme(theme === 'dark' ? 'light' : 'dark'); // TODO: handle system theme
		},
		{
			description: 'Toggle theme',
		}
	);

	return null;
}
