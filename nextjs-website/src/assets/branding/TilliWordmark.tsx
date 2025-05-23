'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
interface TilliWordmarkProps {
	as?: React.ElementType;
	size?: 'sm' | 'md' | 'lg' | 'xl' | number;
	className?: string;
}

const TilliWordmark: React.FC<TilliWordmarkProps> = ({ as = 'div', className, size = 'lg' }) => {
	const Component = as;
	const router = useRouter();

	return (
		<Component
			className={cn(
				className,
				{
					'text-base': size === 'sm',
					'text-lg': size === 'md',
					'text-2xl': size === 'lg',
					'text-4xl': size === 'xl',
					'[font-size:var(--custom-text-size)]': typeof size === 'number',
				},
				'cursor-pointer'
			)}
			style={{ '--custom-text-size': typeof size === 'number' ? `${size}px` : undefined }}
			onClick={() => router.push('/')}
		>
			tilli
		</Component>
	);
};

export default TilliWordmark;
