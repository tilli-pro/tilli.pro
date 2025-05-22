import InvoiceViewCommentsSVG from '@/assets/widget-svgs/InvoiceViewCommentsSVG';
import DigitalPaymentsHighlight from './DigitalPaymentsHighlight';

export default function PaymentSolutionsSplitSection() {
	return (
		<div className='flex gap-25'>
			{/* left */}
			<div className='border border-b-figma-gray-light rounded-lg p-10 w-3/5'>
				<h3>B2C Payment Solutions</h3>
				<p>
					Our B2C payment solutions are built with the customers in mind. tilliPay’s B2C payment solution provides
					immediate and innovative customer payment options coupled with a unified customer experience.
				</p>
				<InvoiceViewCommentsSVG />
			</div>

			<DigitalPaymentsHighlight />
		</div>
	);
}
