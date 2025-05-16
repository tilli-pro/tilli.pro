import TiiliSVG from '@/assets/branding/TiiliSVG';
import DocsTextSVG from './assets/header/svgs/DocsTextSVG';
import Link from 'next/link';
import GithubLogoSVG from './assets/header/svgs/GithubLogoSVG';
import { MoonIcon } from 'lucide-react';
import EmailSignUpInput from '@/components/EmailSignUpInput';

export default function DocsPageFooter() {
	return (
		<div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 px-8'>
			{/* left */}
			<div className='flex flex-col gap-10'>
				<div className='flex items-center gap-6'>
					<TiiliSVG fill='#000' />
					<DocsTextSVG height={30} width={75} />
				</div>
				<div className='flex items-center gap-6 whitespace-nowrap flex-wrap'>
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
			<div className='flex flex-col gap-2 justify-center'>
				<p className='font-medium'>Sign up for developer updates:</p>
				<p className='text-sm mb-4'>You can unsubscribe anytime. These are not marketing emails</p>
				<EmailSignUpInput buttonSize='lg' inputClassName='h-10' />
			</div>
		</div>
	);
}
