import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import TilliWordmark from '@/assets/branding/TilliWordmark';

export default function Header() {
	return (
		<div className='w-full sticky top-0 z-[9998] bg-white/20 p-3 flex items-center justify-between px-8 md:px-32 py-6 backdrop-blur-sm'>
			{/* Logo */}
			<TilliWordmark size='xl' />

			{/* Center Links */}
			<nav>
				<ul className='flex gap-8'>
					<li>
						<Link href='/products'>Products</Link>
					</li>
					<li>
						<Link href='/services'>Services</Link>
					</li>
					<li>
						<Link href='/industries'>Industries</Link>
					</li>
					<li>
						<Link href='/docs'>Developers</Link>
					</li>
					<li>
						<Link href='/resources'>Resources</Link>
					</li>
				</ul>
			</nav>

			{/* Right hand links */}
			<div className='flex gap-2'>
				<Button className='flex items-center gap-1 text-brand-primary shadow-none bg-transparent hover:bg-transparent'>
					Pricing <ArrowUpRightIcon className='size-4' />
				</Button>
				<Button className='flex items-center gap-2 [background:var(--gradient-4)] text-white rounded-md px-3 py-2'>
					Free Trial <ArrowUpRightIcon className='size-4 text-white' />
				</Button>
			</div>
		</div>
	);
}
