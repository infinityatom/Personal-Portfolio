
import './Globals.css';

import { Metadata, Viewport } from 'next';

import SmoothScrolling from './_util/SmoothScrolling';

import ClientConfig from './_util/ClientConfig';

import { Roboto, Sofia_Sans, Work_Sans, IBM_Plex_Mono } from 'next/font/google';

import DevAlert from './_util/DevAlert';
import Footer from './_layout/Footer';
import Nav from './_layout/Nav';
import clsx from 'clsx';

const roboto = Roboto({
	variable: '--roboto',
	weight: ['400'],
	subsets: ['latin']
});

const sofia_sans = Sofia_Sans({
	variable: '--sofia-sans',
	subsets: ['latin']
});

const work_sans = Work_Sans({
	variable: '--work_sans',
	subsets: ['latin'],
	weight: ['400'],
	style: ['normal'],
});

const ibm_plex_mono = IBM_Plex_Mono({
	variable: '--ibm_plex_mono',
	subsets: ['latin'],
	weight: ['400'],
	style: ['normal']
})

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
		<html lang='en'
			className={clsx([
				roboto.variable,
				sofia_sans.variable,
				work_sans.variable,
				ibm_plex_mono.variable
			])}
		>
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
