import B2CPaymentFeatureCard from './B2CPaymentFeatureCard';
import DigitalPaymentsHighlight from './DigitalPaymentsHighlight';

export default function PaymentSolutionsSplitSection() {
	return (
		<div className='flex gap-25'>
			<B2CPaymentFeatureCard />
			<DigitalPaymentsHighlight />
		</div>
	);
}
