import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function LinkedInSVG({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto', className)}
			fill='#000'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 310 310'
			width='30'
			height='30'
			xmlSpace='preserve'
			{...props}
		>
			<path d='M72.16 99.73H9.927a5 5 0 00-5 5v199.928a5 5 0 005 5H72.16a5 5 0 005-5V104.73a5 5 0 00-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 00-5-5h-59.599a5 5 0 00-5 5v199.928a5 5 0 005 5h62.097a5 5 0 005-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 005 5H305a5 5 0 005-5V194.995c0-49.565-9.451-100.234-79.546-100.234z' />
		</svg>
	);
}

export default LinkedInSVG;
