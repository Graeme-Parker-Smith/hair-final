import React, { useState, useEffect } from 'react';
import './ImageChanger.css';

export default () => {
	const [state, setState] = useState({
		currentImage: 0,
		images: [require('../../images/gordiany-logo.png'), require('../../images/slider_2.jpg')],
		classes: '',
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setState((state) => {
				return {
					...state,
					currentImage: state.currentImage < state.images.length - 1 ? state.currentImage + 1 : 0,
				};
			});
		}, 4500);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="ImageChanger">
			<div style={{backgroundColor: 'black'}} className="slider-container">
				<div className="img-wrapper">
					<img className="img" src={state.images[0]} alt="beautiful hair" />
					<img
						className="img crossfade"
						style={{ marginTop: '-36.5%', opacity: state.currentImage === 1 ? '100%' : '0%', transition: 'opacity 1s' }}
						src={state.images[1]}
						alt="beautiful hair"
					/>
				</div>
			</div>
			<div className="banner">
				<span>The Gordiany Difference</span>
			</div>
		</div>
	);
};
