import React from 'react';
import './BarberServices.css';

export default () => {
	return (
		<div id="testimonials-container" className="screen-content">
			<div className="videos-header">
				<img id="film-roll" alt="film roll" src={require('../../images/scissors-52x50.png')} />
				<h1>Barber Services</h1>
				<h4>Any Haircut from Past to Present</h4>
				<p>
					At Gordiany’s Hair Salon we have a rare talent on our staff of fine hairstylists. Larysa Gordiany,
					co-owner and Master Barber Stylist, has added a host of men’s barber services. She can create any
					style for all ages. We invite you to drop by our barber studio located in beautiful Los Patios in
					San Antonio. We carry Johnny B and American Crew products for the best style possible.
				</p>
			</div>
		
			<div className="testimonials-col-2">
				<div className="contact-form-container"></div>
			</div>
		</div>
	);
};
