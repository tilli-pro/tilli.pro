import { ExternalLinkIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cardData } from './data';
import Card from './Card';
import LinkedinOutlineSVG from '@/assets/svgs/LinkedinOutlineSVG';

export default function LeadershipTeam() {
	return (
		<div className='space-y-20 px-6 sm:px-12 lg:px-40'>
			{/* Header section with title and CTA */}
			<div className='flex flex-col items-center gap-4 sm:grid sm:grid-cols-3 sm:items-center'>
				<div className='hidden sm:block' />

				<h2 className='col-span-1 text-center text-4xl'>Leadership Team</h2>

				<div className='flex justify-center sm:justify-end'>
					<Button className='w-fit rounded-full text-white [background:var(--gradient-gradient-4)]'>
						We're Hiring
						<ExternalLinkIcon className='ml-2 h-4 w-4' />
					</Button>
				</div>
			</div>

			{/* Team member cards */}
			<div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4'>
				{cardData.map((card) => (
					<Card key={card.name} {...card} />
				))}
			</div>
			<Button className='!h-fit rounded !p-[2px] bg-[linear-gradient(51deg,_#448DE6_-25.88%,_#98B2E9_91.97%)]'>
				<LinkedinOutlineSVG className='size-8' />
			</Button>
		</div>
	);
}
