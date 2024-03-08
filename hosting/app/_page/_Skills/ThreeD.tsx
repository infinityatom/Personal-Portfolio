'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

import Spline from '@splinetool/react-spline'
import { Application } from '@splinetool/runtime'

import './ThreeD.css'

type Props = {}

export default function ThreeD({}: Props) {
	let spline: Application

	function onLoadSpline(splineApp: Application) {
		const camera = splineApp.findObjectById('3355d990-5967-4339-8f2b-890e1c3901b5')

		if (camera == undefined) {
			return
		}
		spline = splineApp
	}

	useGSAP(() => {
		gsap.to('#ThreeD .Card', {
			y: '-100vh',
			ease: 'power4.in',
			scrollTrigger: {
				trigger: "#ThreeD",
				start: "clamp(bottom bottom)",
				end: "clamp(bottom start)",
				pin: true,
				pinSpacing: false,
				scrub: true,
			},
			onUpdate: function () {
				if (spline == undefined) {
					return
				}
				spline.setVariable('CameraState', this.ratio)
			}
		})
	})

	return (
		<article id='ThreeD'>
				<div className='Card'>
					<h1 className='title'>3D 🥳😁</h1>
					<p className='description'>Taking a flat sketch and turning it into a vibrant 3D world? That's the kind of creative alchemy I live for. 3D animation is a constant learning curve, but seeing my ideas transformed into something truly spectacular is the ultimate reward.</p>
				</div>
				<div className='SplineContainer'>
					<Spline
						className='Spline'
						scene="https://prod.spline.design/q8kMFB4IxJasfwON/scene.splinecode"
						// scene='/animations/vaporwave_background.spline'
						onLoad={onLoadSpline}
					/>
				</div>
			</article>
	)
}