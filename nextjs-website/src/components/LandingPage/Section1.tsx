import Link from 'next/link';
import Ellipse11 from './assets/Ellipse11';
import { Input } from '../ui/input';
import { ArrowUpRightIcon } from 'lucide-react';
import { Button } from '../ui/button';

export default function Section1() {
	return (
		<div className='relative flex flex-col gap-6 py-10 px-8'>
			<div className='flex flex-col gap-6'>
				<h2 className='sm:text-6xl text-4xl'>
					Smarter Financial <br /> Solutions for Every <br /> Industry
				</h2>
				<p>
					Simplify payments, reduce processing time, and manage invoices <br /> effortlessly—all in one place with
					tilliX.
				</p>
				<div className='relative w-fit'>
					<Input className='w-xs rounded-full' placeholder='Enter email address' />
					<Button className='absolute right-0 bottom-0 rounded-full rounded-l-none [background:var(--gradient-light-blue)]'>
						Sign up
					</Button>
				</div>
				<Link href='/' className='flex items-center gap-2'>
					Schedule a time with our product specialist <ArrowUpRightIcon className='size-4' />
				</Link>
			</div>

			<Ellipse11 className='absolute top-0 right-0' />

			<p className='text-center'>Supporting by business across the globe</p>
		</div>
	);
}
