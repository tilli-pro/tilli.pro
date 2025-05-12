import Link from 'next/link';
import { Input } from '../ui/input';
import { ArrowUpRightIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Header from '../Header';
import Elipses from './components/Elipses';
import WelcomePopover from '../WelcomePopover';
import AddAccountWidgetSVG from '@/assets/widget-svgs/AddAccountWidgetSVG';
import LongInvoiceWidgetSVG from '@/assets/widget-svgs/LongInvoiceWidgetSVG';
import GlassComponent1SVG from '@/assets/widget-svgs/GlassComponent1SVG';
import PartiallyPaidInvoicesWidgetSVG from '@/assets/widget-svgs/PartiallyPaidInvoicesWidgetSVG';
import MacbookDisplayingInvoicesPage from '@/components/LandingPage/components/MacbookDisplayingInvoicesPage';

export default function Section1() {
	return (
		<div className='relative h-screen overflow-hidden'>
			{/* Header */}
			<Header />

			{/* Main content */}
			<div className='flex flex-col py-10 px-10'>
				{/* Left section (text) */}
				<div className='absolute z-10 top-60 left-20 flex flex-col gap-6'>
					<h2 className='sm:text-6xl text-4xl leading-tight'>
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
						<Button className='absolute right-0 bottom-0 rounded-full rounded-l-none [background:var(--gradient-sign-up-btn-in-section-1)]'>
							Sign up
						</Button>
					</div>
					<Link href='/schedule' className='flex items-center gap-2'>
						Schedule a time with our product specialist <ArrowUpRightIcon className='size-4' />
					</Link>
				</div>

				{/* Right section (widgets) */}
				{/* TODO: fix the widgets to be aligned exactly like in figma */}
				<PartiallyPaidInvoicesWidgetSVG className='z-20 size-100 absolute top-60 right-0' />
				<AddAccountWidgetSVG className='z-5 size-100 absolute bottom-40 left-150 w-fit backdrop-blur-xl' />
				<LongInvoiceWidgetSVG className='z-5 size-20 absolute top-90 left-148 w-fit backdrop-blur-xl' />
				<GlassComponent1SVG className='z-10 size-100 absolute bottom-40 -right-10' />
				<MacbookDisplayingInvoicesPage className='z-10 absolute bottom-40 right-40' />

				{/* Bottom section (text) */}
				<p className='text-center absolute bottom-10 left-1/2 -translate-x-1/2'>
					Supported by businesses across the globe
				</p>
			</div>

			{/* Welcome popover */}
			<WelcomePopover />

			{/* Elipses (background) */}
			<Elipses />
		</div>
	);
}
