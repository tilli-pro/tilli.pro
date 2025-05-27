import type { JSX, SVGProps } from 'react';

import { cn } from '@/lib/utils';

/** generated JSX with transform.tools -- @see https://transform.tools/svg-to-jsx */

function EllipseSVG({ className, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & { className?: string }) {
	return (
		<svg
			className={cn('h-full w-auto size-14', className)}
			width={1705}
			height={587}
			viewBox='0 0 1705 587'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g filter='url(#filter0_f_1202_18782)' fillRule='evenodd' clipRule='evenodd' fillOpacity={0.2}>
				<path
					d='M775.953 762.227c321.057 3.179 621.307-98.462 710.227-253.243 81.57-141.999-117.25-273.783-358.89-358.316-224.542-78.55-516.884-105.316-740.959-26.435C151.56 206.879 63.079 358.164 147.087 495.725c88.862 145.508 325.536 263.499 628.866 266.502z'
					fill='url(#paint0_radial_1202_18782)'
				/>
				<path
					d='M775.953 762.227c321.057 3.179 621.307-98.462 710.227-253.243 81.57-141.999-117.25-273.783-358.89-358.316-224.542-78.55-516.884-105.316-740.959-26.435C151.56 206.879 63.079 358.164 147.087 495.725c88.862 145.508 325.536 263.499 628.866 266.502z'
					fill='#fff'
				/>
			</g>
			<g filter='url(#filter1_f_1202_18782)' fillRule='evenodd' clipRule='evenodd' fillOpacity={0.2}>
				<path
					d='M822.495 819.612c-168.999 1.703-350.69-28.715-403.798-109.443-53.773-81.739 53.923-161.776 191.823-212.772 140.915-52.111 328.121-83.328 470.27-32.075 144.28 52.02 159.73 153.344 98.6 237.182-54.07 74.165-199.895 115.526-356.895 117.108z'
					fill='url(#paint1_radial_1202_18782)'
				/>
				<path
					d='M822.495 819.612c-168.999 1.703-350.69-28.715-403.798-109.443-53.773-81.739 53.923-161.776 191.823-212.772 140.915-52.111 328.121-83.328 470.27-32.075 144.28 52.02 159.73 153.344 98.6 237.182-54.07 74.165-199.895 115.526-356.895 117.108z'
					fill='#fff'
				/>
			</g>
			<defs>
				<filter
					id='filter0_f_1202_18782'
					x={-83.9883}
					y={-123.24}
					width={1788.77}
					height={1085.54}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={100} result='effect1_foregroundBlur_1202_18782' />
				</filter>
				<filter
					id='filter1_f_1202_18782'
					x={304.59}
					y={339.16}
					width={1008.61}
					height={580.52}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation={50} result='effect1_foregroundBlur_1202_18782' />
				</filter>
				<radialGradient
					id='paint0_radial_1202_18782'
					cx={0}
					cy={0}
					r={1}
					gradientUnits='userSpaceOnUse'
					gradientTransform='rotate(17.448 -77.893 237.062) scale(2081.91 2866.14)'
				>
					<stop offset={0.03} stopColor='#934AFF' />
					<stop offset={0.31} stopColor='#325EF6' />
					<stop offset={0.815} stopColor='#fff' />
				</radialGradient>
				<radialGradient
					id='paint1_radial_1202_18782'
					cx={0}
					cy={0}
					r={1}
					gradientUnits='userSpaceOnUse'
					gradientTransform='matrix(-1156.42954 346.48354 -458.4861 -1530.25127 1241.45 415.571)'
				>
					<stop offset={0.03} stopColor='#934AFF' />
					<stop offset={0.31} stopColor='#325EF6' />
					<stop offset={0.815} stopColor='#fff' />
				</radialGradient>
			</defs>
		</svg>
	);
}

export default EllipseSVG;
