import TiiliSVG from '@/assets/branding/TiiliSVG';
import DocsTextSVG from './assets/header/svgs/DocsTextSVG';
import Link from 'next/link';
import GithubLogoSVG from './assets/header/svgs/GithubLogoSVG';
import { MoonIcon } from 'lucide-react';

export default function DocsPageFooter() {
	return (
		<div className='bg-pink-100 text-off-black w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
			{/* left */}
			<div className='flex flex-col gap-10'>
				<div className='flex items-center gap-6'>
					<TiiliSVG fill='#000' />
					<DocsTextSVG height={30} width={75} />
				</div>
				<div className='flex items-center gap-6 whitespace-nowrap'>
					<Link href='https://tilli.pro' className='hover:underline'>
						tilli.pro
					</Link>
					<Link href='https://tilli.pro/privacy' className='hover:underline'>
						Privacy Policy
					</Link>
					<Link href='https://tilli.pro/terms' className='hover:underline'>
						Terms
					</Link>
					<Link href='https://tilli.pro/contact' className='hover:underline'>
						Contact Support
					</Link>
				</div>
				<div className='flex items-center gap-6'>
					<GithubLogoSVG className='size-8' />
					<MoonIcon strokeWidth={1.5} className='size-7' />
				</div>
			</div>
			{/* right */}
		</div>
	);
}
