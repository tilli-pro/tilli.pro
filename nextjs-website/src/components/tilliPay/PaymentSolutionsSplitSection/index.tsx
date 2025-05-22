import B2CPaymentFeatureCard from './B2CPaymentFeatureCard';
import DigitalPaymentsHighlight from './DigitalPaymentsHighlight';
import Image from 'next/image';
import InvoiceSummaryCard, { Status } from './InvoiceSummaryCard';

export default function PaymentSolutionsSplitSection() {
	return (
		<>
			<div className='flex gap-25'>
				<B2CPaymentFeatureCard />
				<DigitalPaymentsHighlight />
			</div>

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
		</>
	);
}
