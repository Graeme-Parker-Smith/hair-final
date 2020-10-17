import React from 'react';
import './BarberServices.css';

export default () => {
	return (
		<div id="barber-services-container" className="screen-content">
			<div>
				<div>
					<div className="barber-header">
						<img id="scissors-img" alt="scissors" src={require('../../images/scissors-52x50.png')} />
						<h1>Barber Services</h1>
					</div>
					<h4>Any Haircut from Past to Present</h4>
					<p>
						At Gordiany’s Hair Salon we have a rare talent on our staff of fine hairstylists. Larysa
						Gordiany, co-owner and Master Barber Stylist, has added a host of men’s barber services. She can
						create any style for all ages. We invite you to drop by our barber studio located in beautiful
						Los Patios in San Antonio. We carry Johnny B and American Crew products for the best style
						possible.
					</p>
				</div>
				<div className="barber-services-content">
					<p>
						<strong>Larysa does it all!</strong>
					</p>
					<ul>
						<li>Buzz cut</li>
						<li>Trendy and High Fashion</li>
						<li>Military</li>
						<li>Conservative Businessman</li>
						<li>Long/Romantic</li>
					</ul>
					<p>
						<strong>Men's Barber Services</strong>
					</p>
					<ul>
						<li>
							Gordiany’s men’s cut includes a precision haircut, head massaging shampoo, a brush of powder
							around your neck and a splash of aftershave.
						</li>
						<li>Young man’s cut. Basic haircut for youngsters.</li>
						<li>Head Shave. We’ll make your head as smooth as a baby’s bottom</li>
						<li>
							Signature 7 Step Facial Shave. Includes hot steam towels, deep cleansing facial massage,
							moisturizing
						</li>
						<li>
							Lotions, and a great close shave. So soothing we may have to wake you up when we’re done.
						</li>
						<li>Beard Trims. Groom and re-line to keep it sharp.</li>
						<li>Hi-lighting – Creative accents for the young or the young at heart.</li>
						<li>Camouflage – Hair coloring that blends the gray away.</li>
						<li>Father and Son package cuts.</li>
						<li>First time sample cut.</li>
					</ul>
					<p>
						Groom’s wedding packages are also available. Barber services packages make great Birthday and
						Holiday gifts too!
					</p>
					<p>Get our Barber Services Flyer and share</p>
				</div>
			</div>
			<div className="barber-services-image-container">
				<img
					style={{ width: '245px' }}
					alt="hair style example"
					src={require('../../images/Barber-Services-4-245x300.jpg')}
				/>
				<img
					style={{ width: '211px' }}
					alt="hair style example"
					src={require('../../images/barber-services-211x300.png')}
				/>
				<img
					style={{ width: '300px' }}
					alt="hair style example"
					src={require('../../images/Barber-Services-1-300x300.jpg')}
				/>
			</div>

			<div className="testimonials-col-2">
				<div className="contact-form-container"></div>
			</div>
		</div>
	);
};
