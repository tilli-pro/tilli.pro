import Image from 'next/image';

export default function Section2() {
	return (
		<div className='flex w-full gap-4 justify-between pl-4 py-8'>
			<Image
				className='h-20 w-auto'
				src='/images/tenant-logos/washington-gas.png'
				alt='Washington Gas'
				width={200}
				height={0}
			/>
			<Image
				className='h-20 w-auto'
				src='/images/tenant-logos/new-york-power-authority.png'
				alt='New York Power Authority'
				width={200}
				height={0}
			/>
			<Image
				className='h-20 w-auto'
				src='/images/tenant-logos/howard-county.png'
				alt='Howard County'
				width={200}
				height={0}
			/>
			<Image className='h-20 w-auto' src='/images/tenant-logos/frontier.png' alt='Frontier' width={200} height={0} />
			<Image
				className='h-20 w-auto'
				src='/images/tenant-logos/northeast-ohio-natural-gas.png'
				alt='Northeast Ohio Natural Gas'
				width={200}
				height={0}
			/>
			<Image className='h-20 w-auto' src='/images/tenant-logos/freeman.png' alt='Freeman' width={200} height={0} />
		</div>
	);
}
