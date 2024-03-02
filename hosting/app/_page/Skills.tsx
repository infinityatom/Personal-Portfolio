'use client'

import './_Skills/Skills.css'
import './_Skills/Card.css'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';

type Props = {}

export default function Skills({ }: Props) {

	let spline: Application

	function onLoadSpline(splineApp: Application) {
		const camera = splineApp.findObjectById('3355d990-5967-4339-8f2b-890e1c3901b5')

		if (camera == undefined) {
			return
		}
		spline = splineApp
	}

	useGSAP(() => {
		gsap.to('#GenerativeArt .Card', {
			y: '-100vh',
			ease: 'power4.in',
			scrollTrigger: {
				trigger: "#GenerativeArt",
				start: "bottom bottom",
				end: "bottom start",
				markers: true,
				pin: true,
				pinSpacing: false,
				scrub: true,
			},
			onUpdate: function() {
				if (spline == undefined) {
					return
				}
				spline.setVariable('CameraState', this.ratio)
			}
		})
	})


	return <>
		<section id='Skills'>
			<article id='Motion'>
				<div className='Card'>
					<h1 className='title'>Motio</h1>
					<p className='description'>The integration of motion elements into applications stands as one of my favored strategies for enhancing the overall user experience</p>
				</div>
			</article>
			<article id='Database'>
				<div className='Card'>
					<h1 className='title'>Databas</h1>
					<p className='description'>Whether it's for small-scale projects or large enterprises, I prioritize data integrity, security, and scalability.<br />
						<br />My expertise spans various database management systems (DBMS), such as SQL and NoSQL, ensuring reliable, high-performance solutions tailored to your requirements.</p>
				</div>
			</article>
			<article id='Animation'>
				<div className='Card'>
					<h1 className='title'>Animation</h1>
					<p className='description'>My formal expertise lies outside the realms of design or artistic endeavors, I harbor a sincere inclination toward infusing artistic elements into my professional endeavors.</p>
				</div>
			</article>
			<article id='GenerativeArt'>
				<div className='Card'>
					<h1 className='title'>Generative art</h1>
					<p className='description'>While my experience with generative art remains relatively limited, I have managed to leverage my existing knowledge and skills to craft innovative and captivating creations.</p>
				</div>
				<div className='SplineContainer'>
					<Spline
						className='Spline'
						scene="https://prod.spline.design/q8kMFB4IxJasfwON/scene.splinecode"
						onLoad={onLoadSpline}
					/>
				</div>
			</article>
		</section>

	</>
}