import { Button } from './ui/button';
import { Input } from './ui/input';

export default function EmailSignUpInput() {
	return (
		<div className='relative w-fit'>
			<Input
				className='placeholder:text-[#D9D9D9] w-xs rounded-full border border-[#D9D9D9] bg-white/50'
				placeholder='Enter email address'
			/>
			<Button className='absolute right-0 bottom-0 rounded-full rounded-l-none [background:var(--gradient-sign-up-btn-in-section-1)]'>
				Sign up
			</Button>
		</div>
	);
}
