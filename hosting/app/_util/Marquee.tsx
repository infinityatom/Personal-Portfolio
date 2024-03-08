'use client'

import React, { ReactNode, cloneElement, isValidElement, useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import './Marquee.css'

type Props = {
	children: ReactNode
	speed?: number
	direction?: number
	scrollSpeed?: number
}

export default function Marquee({
	speed = 0.025,
	direction = -1,
	scrollSpeed = 300,
	children
}: Props) {

	const first = useRef(null);
	const second = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let d = direction

	useGSAP(() => {
		requestAnimationFrame(animation);

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: slider.current,
				scrub: 0.25,
				onUpdate: e => direction = e.direction * d
			},
			x: `+=${scrollSpeed*d}px`
		})
		gsap.set(first.current, { x: scrollSpeed*d*-1 })
		gsap.set(second.current, { x: scrollSpeed*d*-1 })
	}, [slider])

	function animation() {
		gsap.set(first.current, { xPercent: xPercent })
		gsap.set(second.current, { xPercent: xPercent })

		xPercent += speed * direction;

		if (d < 0) {
			if (xPercent <= -100) {
				xPercent += 100;
			}
	
			if (xPercent >= 0) {
				xPercent -= 100;
			}
		}

		if (d > 0) {
			if (xPercent >= 0) {
				xPercent -= 100;
			}
	
			if (xPercent <= -100) {
				xPercent += 100;
			}
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