'use client'

import ReactLenis from '@studio-freight/react-lenis';
import Lenis from '@studio-freight/lenis';

type LenisRef = {
	wrapper?: HTMLElement;
	content?: HTMLElement;
	lenis?: Lenis;
};

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function SmoothScrolling({ children }) {

	const lenisRef = useRef<LenisRef>();

	useEffect(() => {
		function update(time) {
			lenisRef.current?.lenis?.raf(time * 1000)
		}

		gsap.ticker.add(update);
	
		return () => {
			gsap.ticker.remove(update)
		}
	})

	return (
		<ReactLenis ref={lenisRef} autoRaf={false} root>
			{children}
		</ReactLenis>
	)
}