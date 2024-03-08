'use client'

import { useRef } from 'react';

import 'reactflow/dist/style.css';
import { ReactFlowProvider } from 'reactflow';

import './_Database/style.css';

import DiagramFlow from './_Database/DiagramFlow';

export default function Database() {
	const cardRef = useRef<HTMLDivElement>()

	return (
		<article id='Database'>
			<div className='Card' ref={cardRef}>
				<h1 className='title'>Database</h1>
				<p className='description'>Whether it's for small-scale projects or large enterprises, I prioritize data integrity, security, and scalability.<br />
					<br />My expertise spans various database management systems (DBMS), such as SQL and NoSQL, ensuring reliable, high-performance solutions tailored to your requirements.
				</p>
			</div>
			<ReactFlowProvider>
				<DiagramFlow cardRef={cardRef} />
			</ReactFlowProvider>
		</article>
	)
}