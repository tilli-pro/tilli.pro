import InvoiceViewCommentsSVG from '@/assets/widget-svgs/InvoiceViewCommentsSVG';
import InvoiceSummaryCard from './InvoiceSummaryCard';
import { Status } from '@/components/StatusBadge';

export default function B2CPaymentFeatureCard() {
	return (
		<div className='pt-10 relative border [background-image:var(--gradient-card-bg)] border-b-figma-gray-light rounded-lg p-6 w-full 2xl:w-3/5 space-y-6 overflow-hidden'>
			<h3 className='text-2xl [background-image:var(--gradient-card-title)] bg-clip-text text-transparent'>
				B2C Payment Solutions
			</h3>

			<InvoiceViewCommentsSVG className='absolute -bottom-18 right-0 w-80 z-10' />

			<p className='max-w-lg z-20 relative'>
				Our B2C payment solutions are built with the customers in mind. tilliPay’s B2C payment solution provides immediate
				and innovative customer payment options coupled with a unified customer experience.
			</p>

			<InvoiceSummaryCard
				imgSrc='/images/person1.png'
				invoiceNumber='Invoice #249112'
				dueDate='12/01/2025'
				status={Status.Pending}
			/>
			<InvoiceSummaryCard
				imgSrc='/images/person2.png'
				invoiceNumber='Invoice #249113'
				dueDate='05/05/2025'
				status={Status.Paid}
			/>
		</div>
	);
}
