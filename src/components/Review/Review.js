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
		<div style={{ backgroundColor }} className={backgroundColor === '#fff' ? "review-container" : "review-container-2"}>
			<h4 style={{ fontSize: headerSize, fontWeight: headerWeight }}>
        <span>
        {header}
        <img src={require("../../images/5-stars-300x53.png")} alt="five stars" />
        </span>
      </h4>
      
			<p>
				<i>{text}</i>
			</p>
		</div>
	);
};
