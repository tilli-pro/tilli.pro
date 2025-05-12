import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import GlobalHotkeys from '@/hooks/GlobalHotkeys';

const sora = Sora({
	variable: '--font-sora',
	subsets: ['latin'],
});

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'tilli',
	// TODO: add description
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${sora.variable} ${inter.variable} antialiased`}>
				{children}
				<GlobalHotkeys />
			</body>
		</html>
	);
}
