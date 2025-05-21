import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function InfoCardsSection() {
	return (
		<div className='gap-10 grid grid-cols-1 @2xl:grid-cols-2'>
			{cards.map((card) => (
				<div key={card.title} className='flex-1 border border-figma-gray-light rounded p-8 flex flex-col justify-between'>
					<div>
						<h2 className='text-2xl mb-4'>{card.title}</h2>
						<p className='mb-8 font-inter'>{card.description}</p>
					</div>

					<Button variant='outline' asChild className='font-inter w-fit border-black'>
						<Link href={card.buttonHref}>
							<span>{card.buttonText}</span>
							<ArrowUpRightIcon className='size-5' />
						</Link>
					</Button>
				</div>
			))}
		</div>
	);
}

// this data is gonna be fetched w sanity eventually
const cards = [
	{
		title: 'Customer stories',
		description: 'Find out why the fastest growing businesses choose tilli',
		buttonText: 'Talk to our team now',
		buttonHref: '#',
	},
	{
		title: 'Stay in the loop',
		description:
			'Explore insights on smarter payments, customer engagement, and operational automation—straight from the tilli team.',
		buttonText: 'Read the latest',
		buttonHref: '#',
	},
];
