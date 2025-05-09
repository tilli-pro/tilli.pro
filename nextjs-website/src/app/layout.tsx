import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';

const sora = Sora({
	variable: '--font-sora',
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
			<body className={`${sora.variable} font-sans antialiased`}>{children}</body>
		</html>
	);
}
