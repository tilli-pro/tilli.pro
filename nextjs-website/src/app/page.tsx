import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function IndexPage() {
	return (
		<main className='min-h-screen flex flex-col'>
			<Header />
			<Footer />
		</main>
	);
}
