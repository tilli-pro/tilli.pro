import Image from 'next/image';

export default function WhatWeDo() {
	return (
		<div className='flex flex-col @4xl:flex-row gap-20 @4xl:px-20 items-center'>
			{/* left */}
			<Image
				src='/images/about/what-we-do.png'
				alt='team meeting'
				width={200}
				height={200}
				className='w-full flex-1 @4xl:w-100 rounded'
			/>

			{/* right */}
			<div className='flex flex-col gap-4 flex-1'>
				<p className='text-figma-gray-medium'>WHAT WE DO</p>
				<p className='text-4xl'>
					More than messaging <br /> Communication that <br /> drives outcomes
				</p>

				<p>
					From utility providers to public sector giants, tilli gives teams the tools they need to automate
					communication around billing, payments, and account updates—without relying on developers or third-party
					integrations.
				</p>
			</div>
		</div>
	);
}
