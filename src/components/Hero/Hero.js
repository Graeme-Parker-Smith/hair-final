import React, { useEffect }  from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
					<img data-aos="fade-up" id="hero-img" src={require('../../images/gordiany-logo.png')} alt="logo" height="105" />
				</div>
			</div>
		</section>
	);
};
