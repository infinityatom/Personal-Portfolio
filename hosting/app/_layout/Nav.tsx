'use client'

import './Nav.css';

import * as NavMenu from '@radix-ui/react-navigation-menu';

import { MouseEvent } from 'react';
import Link from 'next/link';

import { useLenis } from "@studio-freight/react-lenis";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Nav() {
	const lenisInstance = useLenis(() => { });

	function scrollTo(event: MouseEvent<HTMLAnchorElement>) {
		const scrollToOptions = {
			offset: 0,
			lerp: 0.1,
			duration: 1.5,
			immediate: false,
			lock: false,
			force: false,
		};

		let href = event.currentTarget.getAttribute('href');

		if (href == '#' || href == '/') {
			lenisInstance.scrollTo(0, scrollToOptions);
		} else {
			if( href.charAt(0) === '/' )
			href = href.slice(1);
			lenisInstance.scrollTo(href, scrollToOptions);
			console.log(href)
		}
	}

	// useGSAP(() => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	ScrollTrigger.create({
	// 		trigger: document.documentElement,
	// 		markers: true,
	// 		start: 0,
	// 		end: window.innerHeight,
	// 		onLeave: () => { console.log('leave') },
	// 		onEnterBack: () => { console.log('enter') },
	// 	})
	// });

	return (
		<NavMenu.Root className='AppNav' orientation='horizontal'>

			<NavMenu.Link asChild>
				<Link className='logo Link' scroll={false} onClick={scrollTo} href='/'>© Coded by Riccardo</Link>
			</NavMenu.Link>

			<NavMenu.List className='List'>
				<NavMenu.Item className='Item'>
					<NavMenu.Link asChild>
						<Link className='Link' scroll={false} onClick={scrollTo} href='/#About'>About</Link>
					</NavMenu.Link>
				</NavMenu.Item>
				<NavMenu.Item className='Item'>
					<NavMenu.Link asChild>
						<Link className='Link' scroll={false} onClick={scrollTo} href='/#Projects'>Projects</Link>
					</NavMenu.Link>
				</NavMenu.Item>
				<NavMenu.Item className='Item'>
					<NavMenu.Link asChild>
						<Link className='Link' scroll={false} onClick={scrollTo} href='/#Skills'>Skills</Link>
					</NavMenu.Link>
				</NavMenu.Item>
				<NavMenu.Item className='Item'>
					<NavMenu.Link asChild>
						<a
							className='Link'
							href="mailto:infinityatom42@gmail.com"
						>Lets Chat</a>
					</NavMenu.Link>
				</NavMenu.Item>
			</NavMenu.List>
		</NavMenu.Root>
	);
}
