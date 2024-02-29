
import './Globals.css';

import { Metadata, Viewport } from 'next';

import SmoothScrolling from './_util/SmoothScrolling';

import ClientConfig from './_util/ClientConfig';

import { Roboto, Sofia_Sans } from 'next/font/google';

import DevAlert from './_util/DevAlert';
import Footer from './_layout/Footer';
import Nav from './_layout/Nav';

const roboto = Roboto({
	variable: '--roboto',
	weight: ['400'],
	subsets: ['latin']
});

const sofia_sans = Sofia_Sans({
	variable: '--sofia-sans',
	subsets: ['latin']
});

export const viewport: Viewport = {
	width: 'device-width',
	height: 'device-height',
	initialScale: 1,
	viewportFit: 'cover',
	themeColor: 'translucent'
}

export const metadata: Metadata = {
	title: 'Riccardo Bodnarescu',
	description: 'Riccardo portfolio',
	creator: 'Riccardo portfolio',
	appleWebApp: {
		capable: true,
		statusBarStyle: 'black-translucent'
	},
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={`${roboto.variable} ${sofia_sans.variable}`}>
			<body>
				<ClientConfig />
				<SmoothScrolling>
					<DevAlert/>
					<Nav />
					{children}
					<Footer />
				</SmoothScrolling>
			</body>
		</html>
	);
}
