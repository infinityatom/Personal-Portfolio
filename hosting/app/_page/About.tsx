'use client'

import React, { useRef } from 'react'

import './_About/style.css'

import Card from './_About/Card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'

type Props = {}

export default function About({ }: Props) {

	// useGSAP(() => {
	// 	const CardWrapper = document.querySelector('.Cards')
	// 	const CardSections = gsap.utils.toArray('.container')
	// 	const Cards = gsap.utils.toArray('.Card')

	// 	let scrollContainer = gsap.to(CardSections, {
	// 		xPercent: -100 * (CardSections.length - 1),
	// 		// ease: 'none',
	// 		ease: "back.inOut(0.3)",
			
	// 		scrollTrigger: {
	// 			trigger: CardWrapper,
	// 			pin: true,
	// 			scrub: true,
	// 			end: '+=300%',
	// 			// markers: true,
	// 		},
	// 	})
	// })

	return (
		<section id='About'>
			<div>
				<h1>I am Passionate</h1>
				<p>"I put my heart and my soul into my work" and always willing to go the extra mile to deliver the best result.</p>

				<h1>Creative</h1>
				<p>I love to create interactive and immersive experiences using WebGL, GSAP, Three.js, and more.</p>

				<h1>Developer</h1>
				<p>I'm looking for new challenges in a creative agency or freelance projects to use & develop my skills.</p>
			</div>

			<div className='Cards'>
				<div className="container">
					<Card title='Front-end' number='01' description='Proficient in HTML, CSS, and JavaScript, with expertise in creating visually appealing and user-friendly web interfaces using frameworks like React.js and Vue.js.' />
				</div>
				<div className="container">
					<Card title='Back-end' number='02' description='Experienced in server-side programming using Node.js and Python, specializing in API development, database management (MongoDB, MySQL), and secure authentication methods.' />
				</div>
				<div className="container">
					<Card title='Mobile' number='03' description='Skilled in mobile app development, with proficiency in Swift, SwiftUI, and Dart, capable of designing cross-platform solutions and ensuring a seamless user experience.' />
				</div>
				<div className="container">
					<Card title='Adaptable' number='04' description='Well-versed in essential development tools like Git and GitHub, with a strong understanding of DevOps, Agile methodologies, testing practices, and cloud services, while prioritizing security best practices throughout the development process.' />
				</div>
			</div>

			{/* <div className='Cards'>
				<Card title='Front-end' number='01' description='Proficient in HTML, CSS, and JavaScript, with expertise in creating visually appealing and user-friendly web interfaces using frameworks like React.js and Vue.js.' />
				<Card title='Back-end' number='02' description='Experienced in server-side programming using Node.js and Python, specializing in API development, database management (MongoDB, MySQL), and secure authentication methods.' />
				<Card title='Mobile' number='03' description='Skilled in mobile app development, with proficiency in Swift, SwiftUI, and Dart, capable of designing cross-platform solutions and ensuring a seamless user experience.' />
				<Card title='Adaptable' number='04' description='Well-versed in essential development tools like Git and GitHub, with a strong understanding of DevOps, Agile methodologies, testing practices, and cloud services, while prioritizing security best practices throughout the development process.' />
			</div> */}

		</section>
	)
}