import Hero from '@/components/tilliPay/Hero';
import Image from 'next/image';
import { BellRingIcon } from 'lucide-react';
import InvoiceViewCommentsSVG from '@/assets/widget-svgs/InvoiceViewCommentsSVG';

export default async function TilliPayPage() {
	return (
		<main className='min-h-screen @container flex flex-col px-12 xl:px-32 py-14 space-y-60'>
			<Hero />

			<div className='flex gap-30'>
				{/* left */}
				<div className='border border-b-figma-gray-light rounded-lg p-10 w-3/5'>
					<h3>B2C Payment Solutions</h3>
					<p>
						Our B2C payment solutions are built with the customers in mind. tilliPay’s B2C payment solution provides
						immediate and innovative customer payment options coupled with a unified customer experience.
					</p>
					<InvoiceViewCommentsSVG />
				</div>
				{/* right */}
				<div className='border border-b-figma-gray-light rounded-lg p-10 w-2/5'>
					<h3>An Online Payment Platform for the New Age</h3>
					<p>
						Accept multiple payment methods, create offers, and seamlessly onboard customers — tilliPay’s Digital
						Payment Solution has it all.
					</p>

					<div className='bg-[#325ef6]/20 rounded-lg p-2 w-fit'>
						<BellRingIcon className='size-10 text-[#325EF6]' strokeWidth={1.5} />
					</div>

					<Image src='/images/invoice-view1.png' alt='invoice view' width={1000} height={1000} />
				</div>
			</div>
		</main>
	);
}
