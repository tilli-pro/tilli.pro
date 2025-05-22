import Image from 'next/image';
import StatusBadge, { Status } from '@/components/StatusBadge';

interface InvoiceSummaryCardProps {
	imgSrc: string;
	invoiceNumber: string;
	dueDate: string;
	status: Status;
}

export default function InvoiceSummaryCard({ imgSrc, invoiceNumber, dueDate, status }: InvoiceSummaryCardProps) {
	return (
		<div className='bg-[#F4F4F4] border border-[#E6E6E6] w-100 rounded-lg p-2 flex items-center gap-8'>
			<Image src={imgSrc} alt='invoice view' width={100} height={100} className='ml-4 size-16 object-cover rounded-full' />
			<div className='space-y-1'>
				<p className='font-medium'>{invoiceNumber}</p>
				<p className='font-inter text-sm'>Due Date: {dueDate}</p>
				<div className='flex items-center gap-2'>
					<p className='font-inter text-sm'>Status:</p>
					<StatusBadge status={status} />
				</div>
			</div>
		</div>
	);
}
