import React from 'react';
import './ImageChanger.css';

export default () => {
	return (
		<div className="ImageChanger">
			<div className="slider-container">
				<img className="img" src={require('../../images/pexels-chloe-kala-1321916.jpg')} alt="beautiful hair" />
			</div>
      <div className="banner">
        <span>The G Difference</span>
      </div>
		</div>
	);
};
