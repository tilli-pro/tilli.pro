import { ArrowRightIcon } from 'lucide-react';

export default function Section2() {
	return (
		<div className='text-black py-20 px-10'>
			<h2 className='text-5xl'>tilli Documentation</h2>

			<div className='flex gap-4'>
				{/* 3 mini cards/links */}
				<div className='flex-1 bg-[#FCFCFC] group flex items-center p-4 rounded-lg hover:border-[#448DE6] transition-colors cursor-pointer'>
					<div>ℹ️</div>
					<span className='ml-2 flex-grow'>Users Guide</span>
					{/* Only visible when hovered over the card */}
					<ArrowRightIcon className='size-4 opacity-0 group-hover:opacity-100 text-[#448DE6] transition-opacity' />
				</div>
				<div className='flex-1'></div>
				<div className='flex-1'></div>
			</div>
		</div>
	);
}
