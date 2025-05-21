'use client';

import { useState } from 'react';
import { milestones } from './data';
import NavigationPill from './NavigationPill';
import Controls from './Controls';
import Image from 'next/image';

const MILESTONES_VISIBLE = 4;

export default function TimelineCarousel() {
	const [current, setCurrent] = useState(0);
	const maxIdx = Math.max(milestones.length - MILESTONES_VISIBLE, 0);

	const prev = () => setCurrent((idx) => Math.max(idx - 1, 0));
	const next = () => setCurrent((idx) => Math.min(idx + 1, maxIdx));
	const handleClick = () => setCurrent((prev) => prev + 1);

	const visibleMilestones = milestones.slice(current, current + MILESTONES_VISIBLE);

	return (
		<div className='py-8 space-y-6 font-inter'>
			<Controls current={current} maxIdx={maxIdx} prev={prev} next={next} />

			{/* Timeline pills */}
			<div className='grid grid-cols-4'>
				{visibleMilestones.map((m, i) => (
					<div className='relative flex' key={m.year}>
						<div className='absolute top-1/2 left-0 right-0 border-t border-[#448DE6]' />
						<NavigationPill year={m.year} isActive={i === 0} onClick={handleClick} />
					</div>
				))}
			</div>

			{/* Content Row */}
			<div className='grid grid-cols-4'>
				{visibleMilestones.map((m) => (
					<div key={m.year} className='space-y-2 mr-20'>
						<h3 className='font-medium'>{m.title}</h3>
						<p>{m.description}</p>
						{m.imageSrc && (
							<Image
								className='mt-4 object-cover rounded-lg'
								src={m.imageSrc}
								alt={m.title}
								height={200}
								width={200}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
