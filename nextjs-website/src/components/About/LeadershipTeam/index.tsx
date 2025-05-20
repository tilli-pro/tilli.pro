import { Button } from '@/components/ui/button';
import { cardData } from './data';
import Image from 'next/image';
import { ExternalLinkIcon } from 'lucide-react';

export default function LeadershipTeam() {
	return (
		<div className='space-y-20 px-40'>
			<div className='flex flex-col items-center gap-4 sm:grid sm:grid-cols-3 sm:items-center'>
				<div className='hidden sm:block' />

				{/* Centered title */}
				<h2 className='text-4xl text-center col-span-1'>Leadership Team</h2>

				{/* Right-aligned button on desktop, centered on mobile */}
				<div className='flex justify-center sm:justify-end'>
					<Button className='w-fit rounded-full [background:var(--gradient-gradient-4)] text-white'>
						We're Hiring
						<ExternalLinkIcon />
					</Button>
				</div>
			</div>

			{/* Grid of team members */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
				{cardData.map((card) => (
					<Card key={card.name} {...card} />
				))}
			</div>
		</div>
	);
}

const Card = ({ name, title, image }: { name: string; title: string; image: string }) => {
	return (
		<div
			className='
		h-full py-8 px-6 
		border-[6px] border-background 
		shadow-[inset_0_0_0_1px_#BDBDBD] 
    hover:shadow-none
		rounded-xl
		flex flex-col items-center text-center 
		[background-image:linear-gradient(180deg,rgba(244,244,244,0.5)_5.77%,#FFF_31.73%,#FFF_100%)] 
		transition-all duration-300 ease-in-out 
		hover:border-pink-200
	'
			// hover:border-[#8BACE8] TODO: figure out how to get figma gradient
		>
			<Image src={image} alt={name} width={120} height={120} className='w-auto rounded-full' />

			<div className='mt-8 space-y-2'>
				<h3 className='text-[1.2rem]'>{name}</h3>
				<p className='text-xl font-inter'>{title}</p>
			</div>
		</div>
	);
};
