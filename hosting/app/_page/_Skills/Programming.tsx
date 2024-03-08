
import Marquee from '@/_util/Marquee'
import React from 'react'

import Image from 'next/image'

import './Programming.css'

type Props = {}

const images = [
	'adobe_illustrator',
	'adobe_photoshop',
	'c_lang',
	'c_plus_plus',
	'c_sharp',
	'css',
	'dart_lang',
	'figma',
	'git',
	'github',
	'go_lang',
	'html_5',
	'java_script',
	'java',
	'mysql',
	'nodejs',
	'npm',
	'php',
	'postman',
	'python',
	'react',
	'rive',
	'spline',
	'swift',
	'type_script',
	'unreal_engine',
	'visual_studio_code',
	'xcode'
]

export default function Programming({ }: Props) {
	return (
		<article id='Programming'>
			<h1 className='title'>Programming</h1>
			<Marquee direction={1} speed={0.01} scrollSpeed={150}>
				<div className="images">
					{images.map((image, i) => 
						<Image
							className='logos'
							src={`./logos/${image}.svg`}
							width={100}
							height={100}
							alt='logo'
							key={i}
						/>
					)}
				</div>
			</Marquee>
			<p className='description'>I am proficient in a variety of programming languages and tools, each with its own strengths and weaknesses.</p>
		</article>
	)
}