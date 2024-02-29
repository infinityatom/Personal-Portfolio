
import './Globals.css';

import Footer from './_layout/Footer';
import Nav from './_layout/Nav';

import './firebase'

import { Roboto, Sofia_Sans } from 'next/font/google';
const roboto = Roboto({
	variable: '--roboto',
	weight: ['400'],
	subsets: ['latin']
});

const sofia_sans = Sofia_Sans({
	variable: '--sofia-sans',
	subsets: ['latin']
});

import SmoothScrolling from './_util/SmoothScrolling';
import DevAlert from './_util/DevAlert';
import { Metadata, Viewport } from 'next';

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
				<SmoothScrolling>
					{/* <DevAlert/> */}
					<Nav />
					{children}
					<Footer />
				</SmoothScrolling>
			</body>
		</html>
	);
}
