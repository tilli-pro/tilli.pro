import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { Input } from './ui/input';
import { type VariantProps } from 'class-variance-authority';

export default function EmailSignUpInput({
	inputClassName,
	buttonSize,
}: {
	inputClassName?: string;
	buttonSize?: VariantProps<typeof buttonVariants>['size'];
}) {
	return (
		<div className='relative w-fit'>
			<Input
				className={cn('placeholder:text-[#D9D9D9] w-xs rounded-full border border-[#D9D9D9] bg-white/50', inputClassName)}
				placeholder='Enter email address'
			/>
			<Button
				className={cn('absolute right-0 bottom-0 rounded-full rounded-l-none [background:var(--gradient-light-blue)]')}
				size={buttonSize}
			>
				Sign up
			</Button>
		</div>
	);
}
