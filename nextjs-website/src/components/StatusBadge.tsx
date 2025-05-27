import { CircleCheckIcon, CircleXIcon, ClockIcon } from 'lucide-react';

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

export default function StatusBadge({ status }: { status: Status }) {
	const { icon, bg, text } = iconMap[status];

	return (
		<div className={`rounded-lg px-2 py-1 flex items-center gap-2 ${bg} ${text}`}>
			{icon}
			<span className='capitalize text-sm font-inter'>{status}</span>
		</div>
	);
}
