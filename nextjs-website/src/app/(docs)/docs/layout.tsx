import { SidebarProvider } from '@/components/ui/sidebar';
import { DocsSidebar } from '@/components/Docs/Sidebar';
import DocsHeader from '@/components/Docs/Header';
import "../../globals.css";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
		<SidebarProvider>
			<div className='flex flex-col min-h-screen w-full'>
				<DocsHeader />
				<div className='flex flex-1'>
					<DocsSidebar />
					<main className='flex-1'>{children}</main>
				</div>
			</div>
		</SidebarProvider>
		</body>
		</html>
	);
}
