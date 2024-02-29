'use client'

import React from 'react'
import Image from 'next/image';
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

import './_Projects/style.css'
import * as Card from './_Projects/Card';

type Props = {}

export default function Projects({ }: Props) {
	const motionX = useMotionValue(30);
	const motionY = useMotionValue(24);
	const motionBoxShadow = useMotionTemplate`${motionY}px ${motionX}px 12px 0px rgba(0, 0, 0, 0.25)`;

	function convertOrientationToXY(beta: number, gamma: number) {
		const normalizedBeta = Math.max(-90, Math.min(90, beta));
		const x = normalizedBeta / 90; // range: -1 to 1


		const normalizedGamma = Math.max(-30, Math.min(30, gamma));
		const y = normalizedGamma / 30; // range: -1 to 1

		const betaSensitivity = 1 - Math.abs(normalizedBeta) / 90; // 0 when beta is 90, 1 otherwise
		// const y = normalizedGamma * betaSensitivity / 30; // range: -1 to 1

		return [x, y];
	}

	function handleOrientation(event: DeviceOrientationEvent) {
		let beta = event.beta
		let gamma = event.gamma

		const [newX, newY] = convertOrientationToXY(beta, gamma);

		motionX.set(newX * 50);
		motionY.set(newY * 50);
	}

	async function requestDeviceOrientation() {
		// @ts-ignore
		if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
			//iOS 13+ devices
			try {
				// @ts-ignore
				const permissionState = await DeviceOrientationEvent.requestPermission()
				if (permissionState === 'granted') {
					alert('Granted')
					window.addEventListener('deviceorientation', handleOrientation)
				} else {
					alert('Permission was denied')
				}
			} catch (error) {
				alert(error)
			}
		} else if ('DeviceOrientationEvent' in window) {
			//non iOS 13+ devices
			console.log("not iOS");
			window.addEventListener('deviceorientation', handleOrientation);
		} else {
			//not supported
			alert('Not supported')
		}
	}

	return (
		<section id='Projects'>
			{/* <button type="button" onClick={requestDeviceOrientation}>Grant acces</button> */}

			<div id='timico'>
				<Card.Root>
					<Card.Header>
						<Card.Title>Timico</Card.Title>
						<Card.Subtitle>Flutter</Card.Subtitle>
					</Card.Header>
					<Card.Content>
						<div>
							<Image
								src='/projects/timico.png'
								alt='Timico cover'
								width={360}
								height={740}
							/>
						</div>
					</Card.Content>
				</Card.Root>
				<div className='paragraph'>
					<p>
						While my journey in the world of development has included a few projects that I may not consider my best work, they have provided invaluable learning opportunities.
					</p>
				</div>
			</div>
			<div id='home_app'>
				<Card.Root>
					<Card.Header>
						<Card.Title>Home app</Card.Title>
						<Card.Subtitle>SwiftUI</Card.Subtitle>
					</Card.Header>
					<Card.Content>
						<div>
							<Image
								src='/projects/home_app.png'
								alt='SwiftUI cover'
								width={360}
								height={740}
							/>
						</div>
					</Card.Content>
				</Card.Root>
				<div className='paragraph'>
					<p>
						These experiences allowed me to confront complex challenges head-on, refine my problem-solving skills, and develop a deeper understanding of the intricacies of software development.
					</p>
				</div>
			</div>
			<div id='vuia_loft_apartments'>
				<Card.Root>
					<Card.Header>
						<Card.Title>Vuia loft apartments</Card.Title>
						<Card.Subtitle>React</Card.Subtitle>
					</Card.Header>
					<Card.Content>
						<div>
							<Image
								src='/projects/vuia_loft_apartments_2.png'
								alt='Vuia Loft apartment cover'
								fill
								sizes="789px"
							/>
						</div>
						<div>
							<Image
								src='/projects/vuia_loft_apartments_1.png'
								alt='Vuia Loft apartment cover'
								fill
								sizes="723px"
							/>
						</div>
					</Card.Content>
				</Card.Root>
			</div>
		</section>
	)
}