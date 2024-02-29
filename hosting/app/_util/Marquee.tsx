'use client'

import React, { ReactNode, cloneElement, isValidElement, useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/ScrollTrigger"

import './Marquee.css'

type Props = {
	children?: ReactNode | undefined
	speed?: number
	direction?: number
}

export default function Marquee({ speed = 0.025, direction = -1, children }: Props) {

	const first = useRef(null);
	const second = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		requestAnimationFrame(animation);

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,
				scrub: 0.25,
				onUpdate: e => direction = e.direction * -1
			},
			x: '-=300px'
		})
	})

	function animation() {
		gsap.set(first.current, { xPercent: xPercent })
		gsap.set(second.current, { xPercent: xPercent })

		xPercent += speed * direction;

		if (xPercent <= -100) {
			xPercent += 100;
		}

		if (xPercent >= 0) {
			xPercent -= 100;
		}

		requestAnimationFrame(animation);
	}

	return (
		<div className='Marquee'>
			<div ref={slider}>
				<div ref={first}>
					{children}
				</div>
				<div ref={second}>
					{isValidElement(children) && cloneElement(children)}
				</div>
			</div>
		</div>
	)
}