import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function MacbookDisplayingInvoicesPage({ className }: { className?: string }) {
	return (
		<div className={cn('relative w-full  aspect-[755/471]', className)}>
			{/* Responsive "screen" area */}
			<div className='absolute top-[12%] left-[12.5%] w-[75%] h-[76%] rounded-[0.5rem] overflow-hidden'>
				<Image src='/images/invoices-page.png' alt='Invoices Page' fill className='object-cover bg-pink-400' priority />
			</div>

			{/* MacBook frame */}
			<Image
				src='/images/MacBook-Pro-16inch-5th-Gen-Silver.png'
				alt='MacBook Frame'
				fill
				className='object-contain'
				priority
			/>
		</div>
	);
}
