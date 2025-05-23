import Link from 'next/link';
import { cn } from '@/lib/utils';

interface GradientLinkButtonProps {
	children: React.ReactNode;
	href: string;
	linkClassName?: string;
	divClassName?: string;
}

export default function GradientLinkButton({ children, href, linkClassName, divClassName }: GradientLinkButtonProps) {
	return (
		<Link href={href} className={cn('rounded-full', linkClassName)}>
			<div className={cn('flex items-center justify-between gap-4 font-inter rounded-full px-5 py-2', divClassName)}>
				{children}
			</div>
		</Link>
	);
}
