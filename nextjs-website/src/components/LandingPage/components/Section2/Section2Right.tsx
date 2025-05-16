import { Button } from '@/components/ui/button';

export default function Section2Right() {
	return (
		<div className='flex flex-col gap-6 max-w-lg'>
			<p>
				Tilli is the unified platform designed to help organizations streamline payments, communication, and client
				services. With enterprise-grade security, automation, and an intuitive interface, Tilli empowers teams to manage
				every touchpoint — from invoicing and reminders to insights and support — all in one place.
			</p>
			<Button variant='outline' className='w-72'>
				Explore our Products
			</Button>
		</div>
	);
}
