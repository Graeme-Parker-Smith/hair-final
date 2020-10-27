import React, { useState } from 'react';
import './FlippableCard.css';

export default () => {
	const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	return (
		<div onClick={handleClick} className={isFlipped ? "flip-container flip" : "flip-container"}>
			<div className="flipper">
				<div className="front">
					<img alt="card front" src={require('../../images/after.png')} />
				</div>
				<div className="back">
					<img alt="card back" src={require('../../images/before.png')} />
				</div>
			</div>
		</div>
	);
};
