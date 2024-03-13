import Link from "next/link"

import '@/ProjectPreview.css'
import './style.css'
import Image from "next/image"

type Props = {}

export default function HomeApp({ }: Props) {
	return <>
		<div className='ProjectPreview HomeApp'>
			<header>
				<h1>HomeApp</h1>
				<dl>
					<div>
						<dt>Technology</dt>
						<dd>SwiftUI</dd>
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
				{Array.from({ length: 6 }, (_, i) =>
					<div key={i}>
						<Image
							src={`/projects/home_app/s${i + 1}.png`}
							alt='hmmm'
							fill
						/>
					</div>
				)}
			</main>
		</div>
	</>
}