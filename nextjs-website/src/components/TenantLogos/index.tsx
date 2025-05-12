import Image from 'next/image';
import { tenantLogos } from './tenant-logos';

export default function TenantLogos() {
	return (
		<div className='flex w-full gap-4 justify-between items-center pl-6 py-8'>
			{tenantLogos.map((logo, index) => (
				<Image key={index} className='h-18 w-auto' src={logo.src} alt={logo.alt} width={150} height={0} />
			))}
		</div>
	);
}
