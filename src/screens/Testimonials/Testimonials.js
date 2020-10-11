import React from 'react';
import './Testimonials.css';
import Review from '../../components/Review/Review';
import CoolButton from '../../components/CoolButton/CoolButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import StarPicker from '../../components/StarPicker/StarPicker';

const reviews = [
	{
		header: 'Simply the BEST!! Trust George!',
		text:
			'“Simply put…don’t make the mistake of going to just any hair dresser.  Have you ever gone to a salon and come out with a hair creation you never wanted? This will never happen at Gordiany’s Hair Salon. I have gone to George since 1987….and will never go anywhere else.  George will exceed your expectations.  He listens and treats his clients with respect and compassion.  He is experienced, patient, and affordable. Trust George!”',
	},
	{
		header: 'Best Hair Dresser Ever! ',
		text:
			'“Color and highlights will never be an issue for me as long as I live in or around San Antonio.  I have colored and or highlighted my hair for as long as I can remember.  Horror stories concerning my hair were a part of my life on and off as I became an adult. I discovered it’s all about the expertise of the hair dresser.  George is the best!  On a working girl’s budget he always far surpasses my expectations.  My hair always looks great!  You too should try this hair dresser located in the peaceful surroundings of Los Patios.”',
	},
	{
		header: 'Best Hair Dresser in Central Texas!  ',
		text:
			'“I have been going to George faithfully since 1995.  We like to refer to my hair as “chicken feathers.”  He is able to cut it so that it always looks trendy and sassy.  My color is always amazing!  I drive all the way from Lockhart, just east of Austin to let George do my hair.  I always leave there feeling refreshed and ready for another 5 weeks.  After all these years of coloring and highlighting my hair, it has never been damaged of lifeless.  If you want an amazing experience and a great look call George!”',
	},
	{
		header: 'BA Woman of George',
		text:
			'“George has been cutting and coloring my hair for over 14 years.  He works wonders, especially with short hair!  My hair cut is always stylish, sassy, and easy to maintain.  As a busy mom, I am thankful that George’s cuts always grow out beautifully.  Somehow, I never look like I need a haircut until the day before my next appointment.  Amazing! The color and highlights look natural and flatter my skin tone . Over the years, I have sent many friends to George for a “new look.”  All of them have been equally delighted with the outcome and are now faithful regulars, just like me.”',
	},
	{
		header: 'Best Hairdresser in San Antonio',
		text:
			'“I first started going to Gordiany’s in 1987.  Several years later I went to another stylist that was closer and my hair was never the same after I left Gordiany’s.  I went back and now my hair is fabulous.  George truly does the best color in town possibly the State.  I have more compliments and a few from other stylist.  I have sent several clients to George and they too have become devoted clients. The studio is set in Los Patios and is beautiful. He uses the best Redken products.  George had to spend several months repairing the damage a very well known salon in San Antonio did when they tried to color/highlight my hair.  It is now healthy and shiny.  If you want incredible color and an awesome haircut this is the place.”',
	},
	{
		header: 'Amazing Transformation',
		text:
			'“My hair has totally transformed since going to George Gordiany’s hair salon.  George has very unique hair design and restoration skills.  My hair was dull and abused/fried with over the counter hair dyes.  He brought the shine and luster back and I couldn’t be happier . I now only go here and I set the appointment up in advance.  It is so nice to have my own personal hairdresser now!”',
	},
];

export default () => {
	return (
		<div id="testimonials-container" className="screen-content">
			<h1>What Our Clients Say</h1>
			<p>
				Over our 25+ years we are proud to have made a real difference in the lives of our clients. We have
				received thousands of glowing reviews from our clients.
			</p>
			<p>
				Many of our clients have written to let us know how we have affected their lives, and we are extremely
				grateful that they have taken the time to share their thoughts and feelings with us.
			</p>
			<p>
				These are unpaid, unsolicited testimonies that speak volumes about how these men and women feel about
				the extraordinary services provided at Gordiany Hair Salon.
			</p>
			<p>Give us a call and make an appointment to come in see the difference.</p>
			{reviews.map((review, i) => (
				<div>
					<Review
						backgroundColor={i % 2 === 0 ? '#e0e0e0' : '#fff'}
						header={review.header}
						text={review.text}
					/>
					<FontAwesomeIcon icon={faUserTie} size="3x" />
				</div>
			))}
			<div>
				<div className="contact-form-container">
					<h2>
						Call <a href="tel:2107889130">(210) 788-9130</a>
					</h2>
					<p>If you have a testimonial about your experience with us, we would love to hear from you.</p>
					<h2>Your Testimonial</h2>
					<form>
						<div id="testimonials-names" className="names-container">
							<div className="names-container-label">
								<span>Name:</span>
								<span>*</span>
							</div>
							<div className="names-input">
								<input type="text" id="fname" name="fname" />
								<br />
								<label className="mini-label" for="fname">
									First
								</label>
							</div>
							<div className="names-input">
								<input type="text" id="lname" name="lname" />
								<br />
								<label className="mini-label" for="lname">
									Last Initial
								</label>
							</div>
						</div>

						<div>
							<div className="names-container-label">
								<span>e-Mail (not required)</span>
								<span></span>
							</div>
							<input placeholder="We will not share your email" type="email" id="email" name="email" />
							<br />
							<label for="email"></label>
						</div>

						<div className="phone-container">
							<div className="names-container-label">
								<span>Date of Service</span>
								<span>*</span>
							</div>

							<div>
								<input type="date" id="number" name="number" />
							</div>
						</div>

						<br />
						<div className="comment-container">
							<div className="names-container-label">
								<span>Tell us your story.</span>
								<span>*</span>
							</div>
							<textarea id="comment" name="comment"></textarea>
						</div>
						<br />

						<div className="preference">
							<div className="names-container-label">
								<span>Star Rating</span>
								<span>*</span>
							</div>
						</div>
					<StarPicker />
					</form>
					<div className="submit">
						{/* <input type="submit" value="Submit" /> */}
						<CoolButton text="Submit" />
						<CoolButton text="Reset" />
					</div>
				</div>
			</div>
		</div>
	);
};
