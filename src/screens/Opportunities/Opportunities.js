import React from 'react';
import './Opportunities.css';

export default () => {
	return (
		<div id="opportunities-container" className="screen-content">
			<img alt="opportunities" src={require('../../images/Opporunities-300x251.png')} />
			<img
				alt="opportunities"
				src={require('../../images/bigstock-group-of-people-show-ok-or-con-227391322-300x200.jpg')}
			/>
			<div className="opp-text">
				<h2>Affordable booth rental for a self-contractor</h2>
				<p>
					Gordiany Hair is a well-established, popular hair salon in beautiful San Antonio, Texas. We have
					been in business for over 20 years. Offering 2 professional booth rentals for professional
					independent contractors.
				</p>
				<p>Click here or on photo to read and download the opportunity details.</p>
			</div>
		</div>
	);
};
