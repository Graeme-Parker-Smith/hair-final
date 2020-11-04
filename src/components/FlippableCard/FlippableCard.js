import React, { useState } from 'react';
import './FlippableCard.css';

export default ({ before = require('../../images/before.png'), after = require('../../images/after.png') }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	return (
		<div onClick={handleClick} className={isFlipped ? 'flip-container flip' : 'flip-container'}>
			<div className="flipper">
				<div className="back">
					<img alt="card front" src={before} />
				</div>
				<div className="front">
					<img alt="card back" src={after} />
				</div>
			</div>
		</div>
	);
};
