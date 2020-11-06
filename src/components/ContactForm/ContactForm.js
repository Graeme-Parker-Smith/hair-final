import React, { useEffect } from 'react';
import './ContactForm.css';
import CoolButton from '../CoolButton/CoolButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
			mirror: true,
			offset: 150,
		});
		AOS.refresh();
	}, []);
	return (
		<div data-aos="fade-up" id="contact-form" className="contact-form-container">
			<h2 data-aos="fade-up">Call (210) 788-9130</h2>
			<h2 data-aos="fade-up">or Send Us a Request</h2>
			<form data-aos="fade-up">
				<div data-aos="fade-up" className="names-container">
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
				<div data-aos="fade-up" className="names-container-label">
					<span>Email:</span>
					<span>*</span>
				</div>
				<input type="email" id="email" name="email" />
				<br />
				<label for="email"></label>
				<br />

				<div data-aos="fade-up" className="phone-container">
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
					<div data-aos="fade-up">
						<input type="text" id="number" name="number" />
						<br />
						<label className="mini-label" for="number">
							Phone Number
						</label>
						<br />
					</div>
				</div>

				<br />
				<div data-aos="fade-up" className="comment-container">
					<div className="names-container-label">
						<span>How can we help?</span>
						<span>*</span>
					</div>
					<textarea id="comment" name="comment"></textarea>
				</div>
				<br />

				<div data-aos="fade-up" className="preference">
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
			<div data-aos="fade-up" className="submit">
				{/* <input type="submit" value="Submit" /> */}
				<CoolButton text="Submit" />
				<CoolButton text="Reset" />
			</div>
		</div>
	);
};
