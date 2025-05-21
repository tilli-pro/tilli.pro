'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { milestones } from './data';
import { cn } from '@/lib/utils';
import NavigationPill from './NavigationPill';
import Controls from './Controls';
const ITEMS_VISIBLE = 4;

export default function TimelineCarousel() {
	const [current, setCurrent] = useState(0);

	const maxIdx = Math.max(milestones.length - ITEMS_VISIBLE, 0);

	const prev = () => setCurrent((idx) => Math.max(idx - 1, 0));
	const next = () => setCurrent((idx) => Math.min(idx + 1, maxIdx));

	return (
		<div className='w-full py-8 space-y-10 font-inter'>
			<Controls current={current} maxIdx={maxIdx} prev={prev} next={next} />

			{/* Navigation Pills */}
			<div className='flex items-center justify-between'>
				<div className='relative flex-1 mx-4'>
					<div className='absolute inset-0 flex items-center'>
						<div className='w-full border-t border-[#448DE6]'></div>
					</div>
					<div className='relative flex justify-between z-10 gap-2'>
						{milestones.slice(current, current + ITEMS_VISIBLE).map((m, i) => (
							<NavigationPill
								key={m.year}
								year={m.year}
								isActive={i === 0}
								onClick={() => setCurrent(current + i)}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Milestone Content Slider */}
			<div className='overflow-hidden'>
				<div
					className='flex transition-transform duration-300'
					style={{
						width: `${(milestones.length / ITEMS_VISIBLE) * 100}%`,
						transform: `translateX(-${(current / milestones.length) * 100}%)`,
					}}
				>
					{milestones.map((m) => (
						<div
							key={m.year}
							className='flex-1 flex-shrink-0 px-4 box-border flex flex-col items-center text-center space-y-4'
						>
							<h3>{m.title}</h3>
							<p>{m.description}</p>
							<img src={m.imageSrc} alt={m.title} className='w-40 h-40 object-cover rounded-lg' />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
