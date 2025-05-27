import { cn } from '@/lib/utils';
interface TilliPayWordmarkProps {
	as?: React.ElementType;
	size?: 'sm' | 'md' | 'lg' | 'xl' | number;
	className?: string;
}

const TilliPayWordmark: React.FC<TilliPayWordmarkProps> = ({ as = 'div', className, size = 'lg' }) => {
	const Component = as;

	return (
		<Component
			className={cn(className, {
				'text-base': size === 'sm',
				'text-lg': size === 'md',
				'text-2xl': size === 'lg',
				'text-4xl': size === 'xl',
				'[font-size:var(--custom-text-size)]': typeof size === 'number',
			})}
			style={{ '--custom-text-size': typeof size === 'number' ? `${size}px` : undefined }}
		>
			tilliPay
		</Component>
	);
};

export default TilliPayWordmark;
