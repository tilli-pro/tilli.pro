import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import TiiliSVG from '@/assets/TiiliSVG';

export default function Header() {
	return (
		<div className='w-full sticky top-0 z-10 bg-white opacity-20 p-3 text-black flex items-center justify-between px-8 md:px-32 py-6'>
			{/* Logo */}
			<TiiliSVG fill='#000' />

			{/* Navigation */}
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
						<Link href='/developers'>Developers</Link>
					</li>
					<li>
						<Link href='/resources'>Resources</Link>
					</li>
				</ul>
			</nav>

			{/* Buttons */}
			<div className='flex gap-4'>
				<button className='flex items-center gap-1'>
					Pricing <ArrowUpRightIcon className='size-4' />
				</button>
				<Button className='flex items-center gap-2 bg-pink-500 text-white rounded-md px-3 py-2'>
					Free Trial <ArrowUpRightIcon className='size-4 text-white' />
				</Button>
			</div>
		</div>
	);
}
