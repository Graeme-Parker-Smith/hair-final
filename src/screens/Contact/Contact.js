import React from 'react';
import CoolButton from '../../components/CoolButton/CoolButton';
import './Contact.css';

export default () => {
	return (
		<div className="screen-content-2">
			<div className="contact-page">
				<div className="contact-card">
					<h1>Contact Us</h1>
					<p>Schedule your appontment today.</p>
					<p>
						Because we are a private studio, we can offer an unparalleled level of care that places an
						unwavering focus on your individual concerns, comfort, and confidentiality.
					</p>
					<p>Take the first step to a new you.</p>
					<h2>Seeing is believing!</h2>
					<p>
						You can either call us at <strong>(210) 788-9130</strong> or fill out the request on the right
						and send it to us.
					</p>
				</div>
				<div className="contact-form-container">
					<h2>Call (210) 788-9130</h2>
					<h2>or Send Us a Request</h2>
					<form>
						<div className="names-container">
							<div className="names-container-label">
								<span>Name:</span>
								<span>*</span>
							</div>
							<div>
								<input type="text" id="fname" name="fname" />
								<br />
								<label className="mini-label" for="fname">
									First
								</label>
							</div>
							<div>
								<input type="text" id="lname" name="lname" />
								<br />
								<label className="mini-label" for="lname">
									Last
								</label>
							</div>
						</div>

						<br />
						<div className="names-container-label">
							<span>Email:</span>
							<span>*</span>
						</div>
						<input type="email" id="email" name="email" />
						<br />
						<label for="email"></label>
						<br />

						<div className="phone-container">
							<div className="names-container-label">
								<span>Phone:</span>
								<span>*</span>
							</div>
							<div>
								<input type="tel" id="area-code" name="area-code" />
								<br />
								<label className="mini-label" for="area-code">
									Area Code
								</label>
							</div>
							{/* <br /> */}
							<div>-</div>
							<div>
								<input type="text" id="number" name="number" />
								<br />
								<label className="mini-label" for="number">
									Phone Number
								</label>
								<br />
							</div>
						</div>

						<br />
						<div className="comment-container">
							<div className="names-container-label">
								<span>How can we help?</span>
								<span>*</span>
							</div>
							<textarea id="comment" name="comment"></textarea>
						</div>
						<br />

						<div className="preference">
							<span>Best Time to Call:</span>
							<div>
								<div>
									<label>Mornings</label>
									<input type="checkbox" />
								</div>
								<div>
									<label>Evenings</label>
									<input type="checkbox" />
								</div>
							</div>
						</div>
					</form>
					<div className="submit">
						{/* <input type="submit" value="Submit" /> */}
						<CoolButton text="Submit" />
						<CoolButton text="Reset" />
					</div>
				</div>
        <img alt="salon" className="studio-img" src={require('../../images/Studio.jpg')} />
        <img alt="salon" className="salon-img" src={require('../../images/Salon.jpeg')} />
			</div>
		</div>
	);
};
