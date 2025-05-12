import { Button } from '@/components/ui/button';

export default function Section2Right() {
	return (
		<div className='flex flex-col gap-6 max-w-lg'>
			<p>
				Tilli is the unified platform designed to help organizations streamline payments, communication, and client
				services. With enterprise-grade security, automation, and an intuitive interface, Tilli empowers teams to manage
				every touchpoint — from invoicing and reminders to insights and support — all in one place.
			</p>
			<Button className='border border-black bg-transparent text-black transition-colors w-72 hover:bg-transparent'>
				Explore our Products
			</Button>
		</div>
	);
}
