import { Button } from '@/components/ui/button';
import GithubLogoSVG from './assets/header/svgs/GithubLogoSVG';
import { MoonIcon, SunIcon } from 'lucide-react';
import Link from 'next/link';
// import { useTheme } from 'next-themes';
import TiiliSVG from '@/assets/branding/TiiliSVG';
import DocsTextSVG from './assets/header/svgs/DocsTextSVG';
import DocsCommandPalette from './CommandPalette';

export default function DevDocsHeader() {
	// const { theme, setTheme } = useTheme();

	return (
		<header className='w-full border-b bg-background'>
			<div className='flex items-center justify-between px-6 py-3 max-w-7xl mx-auto'>
				{/* Logo and Docs */}
				<div className='flex items-center gap-2'>
					<TiiliSVG fill='#000' />
					<DocsTextSVG />
				</div>

				{/* Actions */}
				<div className='flex items-center gap-2'>
					<DocsCommandPalette />
					<Link href='https://github.com/tilli-pro' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
						<GithubLogoSVG className='size-7' />
					</Link>
					<Button
						variant='ghost'
						size='icon'
						// onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						aria-label='Toggle theme'
					>
						{/* {theme === 'dark' ? <Sun className='size-5' /> : <Moon className='size-5' />} */}
						<MoonIcon className='size-5' />
					</Button>
				</div>
			</div>
		</header>
	);
}
