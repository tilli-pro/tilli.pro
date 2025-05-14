import { ArrowRightIcon } from 'lucide-react';

export default function Section2() {
	return (
		<div className='text-black py-20 px-10 space-y-10'>
			<h2 className='text-5xl'>tilli Documentation</h2>

			<div className='flex gap-4 justify-between'>
				{/* 3 mini cards/links */}
				<div className='w-72 bg-gradient-button-shadow border border-foreground-muted group flex items-center p-6 rounded-lg hover:border-[#448DE6] transition-colors cursor-pointer'>
					<div>ℹ️</div>
					<span className='ml-4'>Users Guide</span>
					<ArrowRightIcon className='size-4 opacity-0 group-hover:opacity-100 text-[#448DE6] transition-opacity' />
				</div>
				<div className='flex-1 w-72'></div>
				<div className='flex-1 w-72'></div>
			</div>
		</div>
	);
}
