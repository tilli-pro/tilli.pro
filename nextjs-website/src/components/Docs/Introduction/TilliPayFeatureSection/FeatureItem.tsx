import { Feature } from './data';

interface FeatureItemProps {
	feature: Feature;
}

export default function FeatureItem({ feature }: FeatureItemProps) {
	const { Icon, title, desc } = feature;

	return (
		<div className='flex gap-6'>
			<Icon size={32} className='text-xl flex-shrink-0' />
			<div className='space-y-2'>
				<p className='text-lg'>{title}</p>
				<p>{desc}</p>
			</div>
		</div>
	);
}
