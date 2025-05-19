import { values } from './data';

export default function ProductValuesSection() {
	return (
		<div className='flex flex-col @4xl:flex-row gap-6'>
			{values.map(({ icon, title, description }) => (
				<div key={title} className='bg-pink-100 flex-1 flex flex-col gap-4 border-figma-gray-light border rounded p-8'>
					<span className='text-2xl'>{icon}</span>
					<p className='text-2xl'>{title}</p>
					<p>{description}</p>
				</div>
			))}
		</div>
	);
}
