import { SidebarProvider } from '@/components/ui/sidebar';
import { DocsSidebar } from '@/components/Sidebar';
import { Sora, Inter } from 'next/font/google';
import { Metadata } from 'next';
import DocsHeader from '@/components/Docs/Header';
import '../../globals.css';

const sora = Sora({
	variable: '--font-sora',
	subsets: ['latin'],
});

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'tilli Developers',
	description: 'tilli Developers Documentation',
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body className={`${sora.variable} ${inter.variable} antialiased`}>
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
