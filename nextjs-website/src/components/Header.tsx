import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
	return (
		<div className='w-full sticky top-0 z-10 bg-white opacity-50 p-3 text-black flex items-center justify-between'>
			<h1 className='text-4xl font-bold'>Insert logo here</h1>
			<nav>
				<ul className='flex gap-4'>
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
			<div className='flex gap-4'>
				<button className='flex items-center gap-2'>
					Pricing <ArrowUpRightIcon className='size-4' />
				</button>
				{/* TODO: insert gradient background */}
				<button className='flex items-center gap-2 bg-pink-500 rounded-md px-3 py-2'>
					Free Trial <ArrowUpRightIcon className='size-4 text-white' />
				</button>
			</div>
		</div>
	);
}
