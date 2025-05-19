import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import EmailSignUpInput from '@/components/EmailSignUpInput';

export default function HeroSectionLeft() {
	return (
		<div className='absolute z-10 top-60 left-20 flex flex-col gap-6'>
			<h2 className='sm:text-6xl text-4xl leading-tight'>
				Smarter Financial <br /> Solutions for Every <br /> Industry
			</h2>
			<p>
				Simplify payments, reduce processing time, and manage invoices <br /> effortlessly—all in one place with tilliX.
			</p>
			<EmailSignUpInput />
			<Link href='/schedule' className='flex items-center gap-2'>
				Schedule a time with our product specialist <ArrowUpRightIcon className='size-4' />
			</Link>
		</div>
	);
}
