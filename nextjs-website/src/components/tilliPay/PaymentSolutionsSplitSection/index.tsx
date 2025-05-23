import B2CPaymentFeatureCard from './B2CPaymentFeatureCard';
import DigitalPaymentsHighlight from './DigitalPaymentsHighlight';

export default function PaymentSolutionsSplitSection() {
	return (
		<div className='flex flex-col 2xl:flex-row gap-25'>
			<B2CPaymentFeatureCard />
			<DigitalPaymentsHighlight />
		</div>
	);
}
