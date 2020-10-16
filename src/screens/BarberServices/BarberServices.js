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
			<div>
				<h1>What Our Clients Say</h1>
				<p>
					Over our 25+ years we are proud to have made a real difference in the lives of our clients. We have
					received thousands of glowing reviews from our clients.
				</p>
				<p>
					Many of our clients have written to let us know how we have affected their lives, and we are
					extremely grateful that they have taken the time to share their thoughts and feelings with us.
				</p>
				<p>
					These are unpaid, unsolicited testimonies that speak volumes about how these men and women feel
					about the extraordinary services provided at Gordiany Hair Salon.
				</p>
				<p>Give us a call and make an appointment to come in see the difference.</p>
			</div>
			<div className="testimonials-col-2">
				<div className="contact-form-container"></div>
			</div>
		</div>
	);
};
