import { Button } from '@/components/ui/button';

import SocialLinks from './SocialLinks';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LeftSection() {
	const router = useRouter();
	const thisYear = new Date().getFullYear();

	return (
		<div className='flex flex-col gap-20'>
			<div className='flex-1 flex flex-col gap-6'>
				<div className='flex items-center gap-2'>
					<h1 className='text-4xl font-bold text-blue-500'>Insert logo here</h1>
				</div>
				<p className='max-w-sm'>
					We’re devoted to creating a global consumer environment that feels more personalized and connected than ever
					before. Through cloud-based, customer-centric tools, we’re revolutionizing CPaaS and payment processing
					landscapes to create avenues that help businesses and people connect, collaborate, and make payments in
					real-time.
				</p>
				<Button
					asChild
					variant='outline'
					className='bg-transparent rounded-full w-40 border hover:text-white border-[#448DE6] hover:bg-transparent text-white'
					onClick={() => router.push('/about')}
				>
					<div>
						More about us <ChevronRightIcon className='size-5' />
					</div>
				</Button>
			</div>

			{/* Bottom Row */}
			<div className='flex justify-between items-end justify-self-end'>
				<SocialLinks />

				{/* Copyright */}
				<div className='text-xs flex flex-col mt-6 text-right gap-1'>
					<span>© {thisYear} — Copyright</span>
					<span>All Rights reserved</span>
					<div>
						<Link href='/terms' className='mx-1'>
							Terms
						</Link>
						<span className='mx-1'>|</span>
						<Link href='/privacy' className='mx-1'>
							Privacy
						</Link>
						<span className='mx-1'>|</span>
						<Link href='/cookies' className='ml-1'>
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
