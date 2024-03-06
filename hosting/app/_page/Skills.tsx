
import './_Skills/Skills.css'
import './_Skills/Card.css'

import GenerativeArt from './_Skills/GenerativeArt';
import ThreeD from './_Skills/ThreeD';
import Database from './_Skills/Database';
import Motion from './_Skills/Motion';
import Animation from './_Skills/Animation';


type Props = {}

export default function Skills({ }: Props) {

	return <>
		<section id='Skills'>
			<Motion/>
			<Database/>
			<Animation/>
			{/* <GenerativeArt/> */}
			<ThreeD/>
		</section>
	</>
}