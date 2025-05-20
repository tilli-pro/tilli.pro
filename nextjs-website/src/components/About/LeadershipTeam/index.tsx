import { ExternalLinkIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cardData } from './data';
import Card from './Card';
import LinkedinOutlineSVG from '@/assets/svgs/LinkedinOutlineSVG';

export default function LeadershipTeam() {
	return (
		<div className='@5xl:space-y-20 space-y-10 pb-30 px-6 @5xl:px-12 @7xl:px-24'>
			{/* Header section with title and CTA */}
			<div className='flex flex-col gap-6 text-center @5xl:grid @5xl:grid-cols-3 items-center'>
				<div className='hidden @5xl:block' />

				<h2 className='text-3xl 5xl:text-4xl 5xl:col-span-1'>Leadership Team</h2>

				<div className='flex justify-center @5xl:justify-end @5xl:col-span-1'>
					<Button className='w-fit rounded-full text-white [background:var(--gradient-gradient-4)]'>
						We're Hiring
						<ExternalLinkIcon className='ml-2 size-4' />
					</Button>
				</div>
			</div>

			{/* Team member cards */}
			<div className='grid grid-cols-1 @6xl:gap-12 gap-10 @7xl:gap-12 @3xl:grid-cols-2 @6xl:grid-cols-4'>
				{cardData.map((card) => (
					<div key={card.name} className='relative group'>
						<Card {...card} />

						{/* LinkedIn button (visible on hover) */}
						<Button
							className='absolute -bottom-5 @6xl:-bottom-14 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 !h-fit rounded !p-[2px] bg-[linear-gradient(51deg,_#448DE6_-25.88%,_#98B2E9_91.97%)]'
							aria-label={`View ${card.name}'s LinkedIn`}
						>
							<LinkedinOutlineSVG className='size-8' />
						</Button>
					</div>
				))}
			</div>
		</div>
	);
}
