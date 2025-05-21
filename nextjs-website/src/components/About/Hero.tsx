import { ChevronRightIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function AboutHero() {
	return (
		<div className='pt-10 @xl:pt-20 flex flex-col @xl:flex-row gap-10 items-center justify-between'>
			{/* left */}
			<div className='max-w-4xl space-y-8'>
				<h2 className='text-4xl @6xl:text-6xl leading-tight bg-[linear-gradient(283deg,#000_35.26%,#325EF6_124.44%)] bg-clip-text text-transparent'>
					Powering the Future <br className='hidden @xl:block' /> of Customer <br className='hidden @xl:block' />{' '}
					Communication
				</h2>
				<p>
					tilli is transforming how businesses connect with people—making every payment, <br /> reminder, and message
					seamless, secure, and human.
				</p>
				<Button className='rounded-full [background:var(--gradient-gradient-4)]' size='lg'>
					Talk to our team now <ChevronRightIcon />
				</Button>
			</div>

			{/* right */}
			<Image src='/images/about/team-collaboration.png' alt='About' width={200} height={200} className='w-100 rounded' />
		</div>
	);
}
