import React from 'react';
import './Card.css';

export default (props) => {
	return (
		<div className="card">
			<img className="card-img" src={require(`../../images/${props.imgName}.jpg`)} alt="beautiful hair" />
			<p>{props.text}</p>
      <button>Learn More</button>
		</div>
	);
};
