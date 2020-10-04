import React, { useState } from 'react';
import './CoolButton.css';

export default ({ text = 'Learn More' }) => {
	const [touched, setTouch] = useState(false);

	const toggleTouched = () => {
		setTouch((prevState) => !prevState.touched);
	};

	const handleMouseUp = () => {
		// Handle smooth animation when clicking without holding
		setTimeout(() => {
			setTouch(false);
		}, 150);
	};
	const className = touched ? 'coolbtn touched' : 'coolbtn';

	return (
		<button className={className} onMouseDown={toggleTouched} onMouseUp={handleMouseUp}>
			{text}
		</button>
	);
};
