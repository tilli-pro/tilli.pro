import { ArrowUpRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Section1Left() {
	return (
		<div className='absolute z-10 top-60 left-20 flex flex-col gap-6'>
			<h2 className='sm:text-6xl text-4xl leading-tight'>
				Smarter Financial <br /> Solutions for Every <br /> Industry
			</h2>
			<p>
				Simplify payments, reduce processing time, and manage invoices <br /> effortlessly—all in one place with tilliX.
			</p>
			<div className='relative w-fit'>
				<Input
					className='placeholder:text-[#D9D9D9] w-xs rounded-full border border-[#D9D9D9] bg-white/50'
					placeholder='Enter email address'
				/>
				<Button className='absolute right-0 bottom-0 rounded-full rounded-l-none [background:var(--gradient-sign-up-btn-in-section-1)]'>
					Sign up
				</Button>
			</div>
			<Link href='/schedule' className='flex items-center gap-2'>
				Schedule a time with our product specialist <ArrowUpRightIcon className='size-4' />
			</Link>
		</div>
	);
}
