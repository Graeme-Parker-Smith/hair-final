import React from 'react';
import './Card.css';
import CoolButton from '../CoolButton/CoolButton';

export default ({ imgName = false, header = 'Hello', text = 'Hello', hasButton = false, headerSize = '16px', headerWeight = 700 }) => {
	return (
		<div className="card">
			{imgName && <img className="card-img" src={require(`../../images/${imgName}.jpg`)} alt="beautiful hair" />}
			<h4 style={{fontSize: headerSize, fontWeight: headerWeight}}>{header}</h4>
			<p>{text}</p>
			{/* <div className="btn-outline" >Learn More</div> */}
			{hasButton && <CoolButton />}
		</div>
	);
};
