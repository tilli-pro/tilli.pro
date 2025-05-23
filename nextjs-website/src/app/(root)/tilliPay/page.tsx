import Hero from '@/components/tilliPay/Hero';
import PaymentSolutionsSplitSection from '@/components/tilliPay/PaymentSolutionsSplitSection';

export default async function TilliPayPage() {
	return (
		<main className='min-h-screen @container flex flex-col px-12 xl:px-32 py-14 space-y-10'>
			<Hero />
			<PaymentSolutionsSplitSection />
		</main>
	);
}
