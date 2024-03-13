import Link from "next/link"

import '@/ProjectPreview.css'
import './style.css'
import Image from "next/image"

type Props = {}

export default function Timico({ }: Props) {
	return <>
		<div className='ProjectPreview Timico'>
			<header>
				<h1>Timico</h1>
				<dl>
					<div>
						<dt>Technology</dt>
						<dd>Flutter</dd>
					</div>
					<div>
						<dt>Year</dt>
						<dd>2000</dd>
					</div>
					<div>
						<dt>Client</dt>
						<dd>Personal Portfolio</dd>
					</div>
				</dl>
			</header>
			<main>
				{Array.from({ length: 5 }, (_, i) =>
					<div key={i}>
						<Image
							src={`/projects/timico/frame-${i + 1}.png`}
							alt='hmmm'
							fill
						/>
					</div>
				)}
			</main>
		</div>
	</>
}