import React, { useState, useEffect, useRef } from 'react';
import './FlippableCard.css';

export default ({ before = require('../../images/before.png'), after = require('../../images/after.png') }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [height, setHeight] = useState(0);
	const ref = useRef(null);
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	useEffect(() => {
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
			<div className="flipper">
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
