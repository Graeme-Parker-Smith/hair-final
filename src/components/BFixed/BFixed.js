import React from 'react';
import './BFixed.css';

export default ({ bgImage, ...props }) => {
	return (
		<div
			className="BFixed-container"
			// style={{ backgroundImage:  }}
			style={{
				backgroundImage: bgImage
					? 'url(' + bgImage + ')'
					: 'url(' + require('../../images/bgHairWash.jpg') + ')',
				minHeight: '100vh',
				backgroundColor: '#ffffff',
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				padding: '50px'
			}}
		>
			{props.children}
		</div>
	);
};
