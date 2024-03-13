'use client'

import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas'

import './Animation.css'

import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Animation() {

	const { rive: skeleton, RiveComponent: SkeletonComponent } = useRive({
		src: '/animations/animations.riv',
		artboard: 'Boo-skeleton',
		stateMachines: 'default',
		shouldDisableRiveListeners: true,
		autoplay: true
	});

	const skeletonAnimation = useStateMachineInput(skeleton, 'default', 'hidden', true)

	const { rive: jigglyPuff, RiveComponent: JigglyPuffComponent } = useRive({
		src: '/animations/animations.riv',
		artboard: 'Jiggly-puff',
		stateMachines: 'default',
		shouldDisableRiveListeners: true,
		autoplay: true
	});
	const jigglyPuffPressed = useStateMachineInput(jigglyPuff, 'default', 'touched');

	useGSAP(() => {
		ScrollTrigger.create({
			trigger: '.skeleton',
			start: 'bottom bottom',
			end: 'bottom top',
			onToggle: (event) => {
				if (skeletonAnimation) {
					skeletonAnimation.value = !event.isActive
				}
			}
		});
	}, [skeletonAnimation])

	return (
		<article id='Animation'>
			<div className="Card">
				<h1 className='title'>Animation</h1>
				<p className='description'>My formal expertise lies outside the realms of design or artistic endeavors, I harbor a sincere inclination toward infusing artistic elements into my professional endeavors.</p>
				<Rive
					src='/animations/animations.riv'
					artboard='Rabbit'
					stateMachines='default'
					className='rabbit'
					shouldDisableRiveListeners={true}
				/>
			</div>
			<SkeletonComponent className='skeleton' />
			<JigglyPuffComponent
				className='jiggly-puff'
				onClick={() => jigglyPuffPressed.fire()}
			/>
		</article>
	)
}