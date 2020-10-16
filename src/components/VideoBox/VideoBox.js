import React from 'react';
import './VideoBox.css';

export default ({ label = '', src = '' }) => {
  // const regex = /watch\?v=/gi;
  // const finalSrc = src.replace(regex, "embed");
	return (
		<div className="video-container">
			<iframe
				width="350"
				height="195"
				src={src}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				title="Youtube player"
				allowFullscreen
			></iframe>
			<h4 className="video-label">{label}</h4>
		</div>
	);
};
