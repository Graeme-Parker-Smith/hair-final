import React, { useState, useEffect } from 'react';
import './Hero.css';

export default () => {
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
			<div className="hero-content-area">
				<h1>Mountain Travel</h1>
				<h3>Unmissable Adventure Tours Around The World</h3>
				<a href="#" className="btn">
					Contact Us Now
				</a>
				<img id="hero-img" src={require('../../images/gordiany-logo.png')} alt="logo" height="105" />
			</div>
		</section>
	);
};
