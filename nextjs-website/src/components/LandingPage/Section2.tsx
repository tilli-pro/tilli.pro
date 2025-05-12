import Image from 'next/image';

const tenantLogos = [
	{
		src: '/images/tenant-logos/washington-gas.png',
		alt: 'Washington Gas',
	},
	{
		src: '/images/tenant-logos/new-york-power-authority.png',
		alt: 'New York Power Authority',
	},
	{
		src: '/images/tenant-logos/howard-county.png',
		alt: 'Howard County',
	},
	{
		src: '/images/tenant-logos/anglian-water.png',
		alt: 'Anglian Water',
	},
	{
		src: '/images/tenant-logos/frontier.png',
		alt: 'Frontier',
	},
	{
		src: '/images/tenant-logos/northeast-ohio-natural-gas.png',
		alt: 'Northeast Ohio Natural Gas',
	},
	{
		src: '/images/tenant-logos/freeman.png',
		alt: 'Freeman',
	},
];

export default function Section2() {
	return (
		<div className='flex w-full gap-4 justify-between items-center pl-6 py-8'>
			{tenantLogos.map((logo, index) => (
				<Image key={index} className='h-18 w-auto' src={logo.src} alt={logo.alt} width={150} height={0} />
			))}
		</div>
	);
}
