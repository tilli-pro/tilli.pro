import Link from 'next/link';
import Ellipse11 from './assets/Ellipse11';
import { Input } from '../ui/input';
import { ArrowUpRightIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Ellipse10 from './assets/Ellipse10';
import Ellipse7 from './assets/Ellipse7';
import Ellipse7Left from './assets/Ellipse7Left';
import Header from '../Header';
import Ellipse8 from './assets/Ellipse8';
import Ellipse9 from './assets/Ellipse9';
import Ellipse12 from './assets/Ellipse7Top';
import Ellipse7Top from './assets/Ellipse7Top';

// TODO: fix the elipses. they are not aligned properly at all
export default function Section1() {
	return (
		<div className='relative h-screen'>
			<Header />
			<div className='flex flex-col py-10 px-10'>
				<div className='absolute z-10 top-70 left-20 flex flex-col gap-6'>
					<h2 className='sm:text-6xl text-4xl'>
						Smarter Financial <br /> Solutions for Every <br /> Industry
					</h2>
					<p>
						Simplify payments, reduce processing time, and manage invoices <br /> effortlessly—all in one place with
						tilliX.
					</p>
					<div className='relative w-fit'>
						<Input className='w-xs rounded-full bg-white' placeholder='Enter email address' />
						<Button className='absolute right-0 bottom-0 rounded-full rounded-l-none [background:var(--gradient-light-blue)]'>
							Sign up
						</Button>
					</div>
					<Link href='/schedule' className='flex items-center gap-2'>
						Schedule a time with our product specialist <ArrowUpRightIcon className='size-4' />
					</Link>
				</div>

				{/* top middle */}
				<Ellipse7Top className='absolute -top-50 left-220 -translate-x-1/2' />
				{/* <Ellipse11 className='absolute -top-50 left-1/2 -translate-x-1/2' /> */}

				{/* left middle */}
				<Ellipse7Left className='absolute top-2 -left-20' />
				{/* <Ellipse8 className='absolute top-0 left-50' /> */}

				{/* right middle */}
				<Ellipse10 className='absolute top-40 right-0' />
				{/* <Ellipse9 className='absolute top-50 right-0 border-blue-500 border-2' /> */}
				<Ellipse12 className='absolute top-50 -right-140' />

				<p className='text-center absolute bottom-10 left-1/2 -translate-x-1/2'>
					Supporting by business across the globe
				</p>
			</div>
		</div>
	);
}
