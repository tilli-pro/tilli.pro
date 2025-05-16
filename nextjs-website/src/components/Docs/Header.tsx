import { Button } from '@/components/ui/button';
import GithubLogoSVG from './assets/header/svgs/GithubLogoSVG';
import { MoonIcon, SunIcon } from 'lucide-react';
import Link from 'next/link';
// import { useTheme } from 'next-themes';
import DocsTextSVG from './assets/header/svgs/DocsTextSVG';
import DocsCommandPalette from './CommandPalette';
import TilliWordmark from '@/assets/branding/TilliWordmark';

export default function DocsHeader() {
	// const { theme, setTheme } = useTheme();

	return (
		<header className='w-full border-b'>
			<div className='flex items-center justify-between px-6 py-3 mx-auto max-w-[95rem]'>
				{/* Left - Logo and Docs SVG */}
				<div className='flex items-center gap-4'>
					<TilliWordmark size="xl" />
					<DocsTextSVG />
				</div>

				{/* Right - Command Palette Trigger, GitHub Link, and Theme Toggle */}
				<div className='flex items-center justify-between gap-8'>
					<DocsCommandPalette />

					<div className='flex items-center gap-2'>
						<Link href='https://github.com/tilli-pro' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
							<GithubLogoSVG className='size-7' />
						</Link>
						<Button
							variant='ghost'
							size='icon'
							// onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							aria-label='Toggle theme'
							className='text-black'
						>
							{/* {theme === 'dark' ? <Sun className='size-5' /> : <Moon className='size-5' />} */}
							<MoonIcon className='size-5' strokeWidth={1.5} />
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
