import Image from 'next/image';
import About from './_page/About';
import Projects from './_page/Projects';
import Skills from './_page/Skills';

import './style.css';
import Marquee from './_util/Marquee';

export default function Page() {
	return <>
		<header id='AppHeader'>
			<div className='image-container'>
				<Image
					src='/images/programming_bg.jpg'
					alt='A drawing of a leptop ready for programming'
					quality={100}
					sizes='100vw'
					fill
				/>
			</div>
			<Marquee>
				<h1>Bodnarescu Riccardo -</h1>
			</Marquee>
		</header>

		<main id='AppMain'>
			<About />
			<Projects />
			<Skills />
		</main>
	</>
}
