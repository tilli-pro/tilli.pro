import Image from 'next/image';
import { cn } from '@/lib/utils';
function MacbookDisplayingInvoicesPage({ className }: { className?: string }) {
	return (
		<div className={cn('relative  w-fit', className)}>
			<Image
				className='h-auto'
				height={750}
				width={750}
				src='/images/MacBook-Pro-16"-5th-Gen-Silver.png'
				alt='Macbook Pro 16" 5th Gen Silver'
			/>
			<Image
				className='w-auto absolute bottom-13 right-19'
				height={600}
				width={550}
				src='/images/invoices-page.png'
				alt='Invoices page'
			/>
		</div>
	);
}

export default MacbookDisplayingInvoicesPage;
