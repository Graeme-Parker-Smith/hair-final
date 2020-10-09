import React from 'react';
import './Review.css';

export default ({
	header = 'Hello',
	text = 'Hello',
	hasButton = false,
	headerSize = '16px',
	headerWeight = 700,
	backgroundColor = '#fff',
}) => {
	return (
		<div style={{ backgroundColor }} className="review-container">
			<h4 style={{ fontSize: headerSize, fontWeight: headerWeight }}>{header}</h4>
			<p>
				<i>{text}</i>
			</p>
		</div>
	);
};
