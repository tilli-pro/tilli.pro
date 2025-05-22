import { BellRingIcon } from 'lucide-react';
import Image from 'next/image';

export default function DigitalPaymentsHighlight() {
	return (
		<div className='pt-10 h-140 relative border [background-image:var(--gradient-card-bg)] border-b-figma-gray-light rounded-lg p-6 w-2/5 space-y-6 overflow-hidden'>
			<h3 className='text-2xl [background-image:var(--gradient-card-title)] bg-clip-text text-transparent'>
				An Online Payment Platform for the New Age
			</h3>
			<p>
				Accept multiple payment methods, create offers, and seamlessly onboard customers — tilliPay’s Digital Payment
				Solution has it all.
			</p>

			<div className='bg-[#325ef6]/20 rounded-lg p-2 w-fit ml-10'>
				<BellRingIcon className='size-6 text-[#325EF6]' strokeWidth={1.5} />
			</div>

			<Image
				src='/images/invoice-view1.png'
				alt='invoice view'
				width={1000}
				height={1000}
				className='absolute -bottom-4 -right-35'
			/>
		</div>
	);
}
