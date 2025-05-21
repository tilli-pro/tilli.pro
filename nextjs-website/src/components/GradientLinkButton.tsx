import Link from 'next/link';
import { cn } from '@/lib/utils';

interface GradientLinkButtonProps {
	backgroundColor: string;
	children: React.ReactNode;
	href: string;
	linkClassName?: string;
	divClassName?: string;
}

export default function GradientLinkButton({
	backgroundColor,
	children,
	href,
	linkClassName,
	divClassName,
}: GradientLinkButtonProps) {
	return (
		<Link href={href} className={cn('inline-block rounded-full', linkClassName)}>
			<div
				className={cn(
					'flex items-center justify-between gap-4 font-inter rounded-full px-5 py-2 transition-colors',
					`bg-${backgroundColor}`,
					divClassName
				)}
			>
				{children}
			</div>
		</Link>
	);
}
