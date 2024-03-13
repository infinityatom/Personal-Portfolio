import Link from "next/link"

import '@/ProjectPreview.css'
import './style.css'
import Image from "next/image"

type Props = {}

export default function VuiaLoftApartments({ }: Props) {
	return <div className='ProjectPreview vuia'>
		<header>
			<h1>Vuia loft apartments</h1>
			<dl>
				<div>
					<dt>Technology</dt>
					<dd>React</dd>
				</div>
				<div>
					<dt>Year</dt>
					<dd>2000</dd>
				</div>
				<div>
					<dt>Client</dt>
					<dd>SC Orso Bruno</dd>
				</div>
			</dl>
			<div>
				<Image
					src='/projects/vuia_loft_apartments/frame-1.png'
					alt='hmmm'
					fill
				/>
			</div>
		</header>
		<main>
			<div>
				<Image
					src='/projects/vuia_loft_apartments/frame-2.png'
					alt='hmmm'
					fill
				/>
			</div>
			<div>
				<Image
					src='/projects/vuia_loft_apartments/frame-8.png'
					alt='hmmm'
					fill
				/>
			</div>
			<div>
				<Image
					src='/projects/vuia_loft_apartments/frame-6.png'
					alt='hmmm'
					fill
				/>
			</div>
			<div>
				<Image
					src='/projects/vuia_loft_apartments/frame-5.png'
					alt='hmmm'
					fill
				/>
			</div>
		</main>
	</div>
}