import React, { useState, useEffect, useRef } from 'react';
import './FlippableCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({ before = require('../../images/before.png'), after = require('../../images/after.png') }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [height, setHeight] = useState(200);
	const ref = useRef(null);
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	useEffect(() => {
		// initialize animation library
		AOS.init({
			duration: 1500,
			mirror: true,
			offset: 150,
		});
		AOS.refresh();

		// set container height dynamically to avoid overlapping with other elements
		setTimeout(() => {
			setHeight(ref.current.clientHeight);
		}, 300);

		// flip card on a timed interval
		const interval = setInterval(() => {
			setIsFlipped((prevState) => !prevState);
		}, 3000);

		// clear interval on component unmount
		return () => {
			clearInterval(interval);
		};
	}, []);
	useEffect(() => {
		setHeight(ref.current.clientHeight);
	}, [isFlipped, setIsFlipped]);
	return (
		<div
			style={{ height, minHeight: 200 }}
			onClick={handleClick}
			className={isFlipped ? 'flip-container flip' : 'flip-container'}
		>
			<div data-aos="fade-up" className="flipper">
				<div className="back">
					<img ref={ref} alt="card front" src={before} />
				</div>
				<div className="front">
					<img alt="card back" src={after} />
				</div>
			</div>
		</div>
	);
};
