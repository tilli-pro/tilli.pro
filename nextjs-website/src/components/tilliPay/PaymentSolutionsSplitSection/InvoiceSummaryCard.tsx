import Image from 'next/image';
import { CircleCheckIcon, CircleXIcon, ClockIcon } from 'lucide-react';

interface InvoiceSummaryCardProps {
	imgSrc: string;
	invoiceNumber: string;
	dueDate: string;
	status: Status;
}

export default function InvoiceSummaryCard({ imgSrc, invoiceNumber, dueDate, status }: InvoiceSummaryCardProps) {
	return (
		<div className='bg-[#F4F4F4] border border-[#E6E6E6] w-100 rounded-lg p-4 flex items-center gap-8'>
			<Image src={imgSrc} alt='invoice view' width={100} height={100} className='size-16 object-cover rounded-full' />
			<div className='space-y-1'>
				<p className='font-medium'>{invoiceNumber}</p>
				<p className='font-inter text-sm'>Due Date: {dueDate}</p>
				<div className='flex items-center gap-2'>
					<p className='font-inter text-sm'>Status:</p>
					<Badge status={status} />
				</div>
			</div>
		</div>
	);
}

export enum Status {
	Overdue = 'overdue',
	Paid = 'paid',
	Pending = 'pending',
}

const iconMap: Record<Status, { icon: React.ReactNode; bg: string; text: string }> = {
	[Status.Overdue]: {
		icon: <CircleXIcon className='size-4' />,
		bg: 'bg-[rgba(255,165,0,0.20)]',
		text: 'text-[#FFA500]',
	},
	[Status.Paid]: {
		icon: <CircleCheckIcon className='size-4' />,
		bg: 'bg-[rgba(0,128,0,0.20)]',
		text: 'text-[#008000]',
	},
	[Status.Pending]: {
		icon: <ClockIcon className='size-4' />,
		bg: 'bg-[rgba(30,144,255,0.20)]',
		text: 'text-[#1E90FF]',
	},
};

const Badge = ({ status }: { status: Status }) => {
	const { icon, bg, text } = iconMap[status];

	return (
		<div className={`rounded-lg px-2 py-1 flex items-center gap-2 ${bg} ${text}`}>
			{icon}
			<span className='capitalize text-sm font-inter'>{status}</span>
		</div>
	);
};
