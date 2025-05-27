import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';

export default function OurMission() {
	return (
		<div className='flex flex-col @4xl:flex-row gap-20 @4xl:px-20 items-center'>
			{/* left */}
			<div className='flex flex-col gap-4 flex-1'>
				<p className='text-figma-gray-medium'>OUR MISSION</p>
				<p className='text-4xl'>
					We’re building better <br /> connections—at scale
				</p>

				<p>
					We believe communication should move business forward. That’s why tilli exists: to help organizations
					streamline billing, reach customers faster, and automate the right messages at the right time—without
					technical overhead.
				</p>
				<p>
					Whether it’s automating collections or improving customer satisfaction, we’re here to make every interaction
					count.
				</p>

				<Button variant='outline' className='w-fit rounded-full text-brand-black'>
					Our products
					<ExternalLinkIcon />
				</Button>
			</div>

			{/* right */}
			<Image
				src='/images/about/teamwork.png'
				alt='About'
				width={200}
				height={200}
				className='w-full flex-1 @4xl:w-100 rounded'
			/>
		</div>
	);
}
