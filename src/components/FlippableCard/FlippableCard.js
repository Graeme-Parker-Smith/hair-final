import React, { useState, useEffect, useRef } from 'react';
import './FlippableCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
export default ({ before = require('../../images/before.png'), after = require('../../images/after.png') }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [height, setHeight] = useState(0);
	const ref = useRef(null);
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	useEffect(() => {
		AOS.init({
			duration: 1500,
			mirror: true,
			offset: 150,
		});
		AOS.refresh();

		setTimeout(() => {
			setHeight(ref.current.clientHeight);
		}, 300);
		const interval = setInterval(() => {
			setIsFlipped(prevState => !prevState);
		}, 3000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div
		style={{ height, float: 'right' }}
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
