import React, { useEffect } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CoolButtom from '../CoolButton/CoolButton';

export default () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
			mirror: true,
			offset: 150,
		});
		AOS.refresh();
	}, []);
	// const [state, setState] = useState({
	// 	currentImage: 0,
	// 	images: [require('../../images/gordiany-logo.png'), require('../../images/slider_2.jpg')],
	// 	classes: '',
	// });

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setState((state) => {
	// 			return {
	// 				...state,
	// 				currentImage: state.currentImage < state.images.length - 1 ? state.currentImage + 1 : 0,
	// 			};
	// 		});
	// 	}, 4500);

	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, []);

	return (
		<section className="hero">
			<div className="background-image">
				<div className="hero-content-area">
					<span style={{fontSize: 10, marginBottom: 50}}>Demo Site. Not (yet) for commercial use.</span>
					<img
						data-aos="fade-up"
						id="hero-img"
						src={require('../../images/gordiany-logo.png')}
						alt="logo"
						height="105"
					/>
					<address
						data-aos="zoom-in-up"
						data-aos-delay="500"
						data-aos-easing="ease-in-sine"
						data-aos-duration="750"
					>
						<div>
							<p>Call Today for an APPOINTMENT</p>
							<h2 style={{ borderBottom: '1px solid gray', borderTop: '1px solid gray', padding: 20, }}>
								<a href="tel:2107889130">(210) 788-9130</a>
							</h2>
						</div>
					</address>
					<div>
						<p data-aos="fade-up" data-aos-delay="1500">
							Or
						</p>
						<div data-aos="fade-up" data-aos-delay="2500">
							<a href="#contact-form">
								<CoolButtom text="Click Here" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
