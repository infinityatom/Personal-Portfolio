'use client'


import React, { useRef } from 'react'

import './_About/style.css'

import Card from './_About/Card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

type Props = {}

export default function About({ }: Props) {

	const infoRef = useRef<HTMLDivElement>(null)

	// useGSAP(() => {
	// 	let tl = gsap.timeline({
	// 		scrollTrigger: {
	// 			markers: true,
	// 			trigger: infoRef.current,
	// 			// pin: true,
	// 			// start: "top top",
	// 			// end: "+=500",
	// 			start: 'top bottom',
	// 			// end: 'bottom top',
	// 			scrub: true,
	// 		},
	// 	});

	// 	tl.from(
	// 		'h1, p',
	// 		{
	// 			stagger: 0.5,
	// 			y: 150,
	// 			ease: 'power4.inOut',
	// 		}
	// 	)
	// }, { scope: infoRef })

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

	// useGSAP(() => {
	// 	let paragraphs = gsap.utils.toArray<HTMLHeadingElement>('.paragraphTriggers')

	// 	paragraphs.forEach(paragraph => {
	// 		ScrollTrigger.create({
	// 			trigger: paragraph,
	// 			markers: true
	// 		})
	// 	});
	// })

	return (
		<section id='About'>
			<div className='info' ref={infoRef}>
				<Paragraph title='I am Passionate'>
					"I put my heart and my soul into my work" and always willing to go the extra mile to deliver the best result.
				</Paragraph>

				<Paragraph title='Creative'>
					I love to create interactive and immersive experiences using WebGL, GSAP, Three.js, and more.
				</Paragraph>

				<Paragraph title='Developer'>
					I'm looking for new challenges in a creative agency or freelance projects to use & develop my skills.
				</Paragraph>
			</div>

			{/* <div className='Cards'>
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
			</div> */}

			{/* <div className='Cards'>
				<Card title='Front-end' number='01' description='Proficient in HTML, CSS, and JavaScript, with expertise in creating visually appealing and user-friendly web interfaces using frameworks like React.js and Vue.js.' />
				<Card title='Back-end' number='02' description='Experienced in server-side programming using Node.js and Python, specializing in API development, database management (MongoDB, MySQL), and secure authentication methods.' />
				<Card title='Mobile' number='03' description='Skilled in mobile app development, with proficiency in Swift, SwiftUI, and Dart, capable of designing cross-platform solutions and ensuring a seamless user experience.' />
				<Card title='Adaptable' number='04' description='Well-versed in essential development tools like Git and GitHub, with a strong understanding of DevOps, Agile methodologies, testing practices, and cloud services, while prioritizing security best practices throughout the development process.' />
			</div> */}

		</section>
	)
}

type ParagraphProps = {
	title: string
	children: string
}

function Paragraph({ title, children }: ParagraphProps) {

	const titleRef = useRef(null)
	const descriptionRef = useRef(null)

	useGSAP(() => {
		const splitTitle = new SplitType(titleRef.current, { types: 'words,chars' })

		gsap.from('.char', {
			opacity: 0,
			stagger: 0.05,
			yPercent: 50,
			ease: 'back.out(2)',
			scrollTrigger: {
				trigger: descriptionRef.current,
				start: 'top bottom',
				end: 'bottom top',
				toggleActions: 'play reverse play reverse',
			},
		})
	}, { scope: titleRef })

	useGSAP(() => {
		const splitDescription = new SplitType(descriptionRef.current, { types: 'words,chars' })

		gsap.from('.char', {
			opacity: 0,
			stagger: 0.01,
			xPercent: 150,
			duration: 0.2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: descriptionRef.current,
				start: 'top 70%',
				end: 'bottom 15%',
				toggleActions: 'play reverse play reverse',
			},
		})
	}, { scope: descriptionRef })

	return <>
		<h1 ref={titleRef} >
			{title}
		</h1>
		<p ref={descriptionRef}>
			{children}
		</p>
	</>
}