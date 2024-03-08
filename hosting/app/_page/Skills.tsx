
import './_Skills/style.css'

import GenerativeArt from './_Skills/GenerativeArt';
import ThreeD from './_Skills/ThreeD';
import Database from './_Skills/Database';
import Motion from './_Skills/Motion';
import Animation from './_Skills/Animation';
import Programming from './_Skills/Programming';

type Props = {}

export default function Skills({ }: Props) {

	return <>
		<section id='Skills'>
			<Programming/>
			{/* <Motion/> */}
			<Database/>
			<Animation/>
			{/* <GenerativeArt/> */}
			<ThreeD/>
		</section>
	</>
}