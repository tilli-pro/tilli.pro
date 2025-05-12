import { Input } from '../ui/input';

export default function DocsSearchBar() {
	return (
		<div className='relative'>
			<Input
				placeholder='Search documentation...'
				className='pr-20 text-xl py-5 shadow-sm placeholder:text-foreground-muted'
			/>
			<div className='absolute right-4 top-1/2 -translate-y-1/2 flex items-center'>
				<kbd className='pointer-events-none select-none rounded border px-2 py-1 text-xs font-mono text-foreground-muted border-foreground-muted'>
					⌘ K
				</kbd>
			</div>
		</div>
	);
}
