'use client'

import Rive, { Alignment, Layout } from '@rive-app/react-canvas'

import './Animation.css'

export default function Animation() {
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
			<Rive
				src='/animations/animations.riv'
				artboard='Boo-skeleton'
				stateMachines='default'
				className='skeleton'
				shouldDisableRiveListeners={true}
			/>
			<Rive
				src='/animations/animations.riv'
				artboard='Jiggly-puff'
				stateMachines='default'
				className='jiggly-puff'
				shouldDisableRiveListeners={true}
			/>
		</article>
	)
}