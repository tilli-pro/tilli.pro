import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function ULogo({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto size-14', className)}
			xmlns='http://www.w3.org/2000/svg'
			width={24}
			height={28}
			viewBox='0 0 24 28'
			fill='none'
			{...props}
		>
			<path d='M23.677.5l.163 13.493c.102 8.37-9.091 8.46-9.091 8.46l-.187-15.46L23.677.5z' fill='#fff' />
			<path
				d='M9.224 3.078l.172 14.238c.071 5.89 5.387 5.091 5.387 5.091s-.181 4.916-5.265 4.98c-5.084.062-9.225-2.588-9.296-8.479L.109 9.583l9.115-6.505z'
				fill='#fff'
			/>
		</svg>
	);
}

export default ULogo;
