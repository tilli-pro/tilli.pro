import Link from 'next/link';
import { Input } from '../ui/input';
import { ArrowUpRightIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Header from '../Header';
import Elipses from './components/Elipses';
import WelcomePopover from '../WelcomePopover';
import PartiallyPaidInvoicesWidgetSvg from '@/assets/widget-svgs/PartiallyPaidInvoicesWidgetSvg';

export default function Section1() {
	return (
		<div className='relative h-screen overflow-hidden'>
			<Header />

			{/* Left section */}
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
						<Input
							className='placeholder:text-[#D9D9D9] w-xs rounded-full border border-[#D9D9D9] bg-white/50'
							placeholder='Enter email address'
						/>
						<Button className='absolute right-0 bottom-0 rounded-full rounded-l-none [background:var(--gradient-light-blue)]'>
							Sign up
						</Button>
					</div>
					<Link href='/schedule' className='flex items-center gap-2'>
						Schedule a time with our product specialist <ArrowUpRightIcon className='size-4' />
					</Link>
				</div>

				<PartiallyPaidInvoicesWidgetSvg className='size-100 absolute top-1/2 right-0 -translate-y-1/2' />

				<Elipses />

				<p className='text-center absolute bottom-10 left-1/2 -translate-x-1/2'>
					Supported by businesses across the globe
				</p>
			</div>

			<WelcomePopover />
		</div>
	);
}
