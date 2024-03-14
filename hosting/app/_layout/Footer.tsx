
import './Footer.css';

export default function Footer() {
	return (
		<footer id='AppFooter'>

			<div>
				<a
					className='get_in_touch'
					type='button'
					href="mailto:infinityatom42@gmail.com"
				>Get in touch</a>

				<div className='platforms'>
					<h3>Elsewhere</h3>
					<nav>
						<h2><a href='https://www.figma.com/@infinity_atomic'>Figma</a></h2>
						<h2><a href='https://github.com/infinityatom'>Github</a></h2>
						<h2><a href='https://www.linkedin.com/in/riccardo-bodnarescu-91a197183'>Linkedin</a></h2>
					</nav>
				</div>

				<div className='version'>
					<h3>VERSION</h3>
					<h2>v0.0.8 © 2024</h2>
				</div>

				<div className='last_update'>
					<h3>Last update</h3>
					<h2>14/03/2024</h2>
				</div>
			</div>

		</footer>
	);
}