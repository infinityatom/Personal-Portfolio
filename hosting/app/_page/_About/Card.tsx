import React, { ReactNode } from 'react'

import './Card.css'

type Props = {
	number: string
	title: string
	description: string
}

export default function Card({ number, title, description }: Props) {
	return (
		<div className='Card'>
			<div className='top'>
				<h1 className='number'>{number}</h1>
				<h2 className='title'>{title}</h2>
			</div>
			<p className='description'>{description}</p>
		</div>
	)
}