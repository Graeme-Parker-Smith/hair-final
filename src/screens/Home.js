import React from 'react';
// import ImageChanger from '../components/ImageChanger/ImageChanger';
import CenterParagraph from '../components/CenterParagraph/CenterParagraph';
import CardSection from '../components/CardSection/CardSection';
// import GridDisplay from '../components/GridDisplay/GridDisplay';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';
import Hero from '../components/Hero/Hero';
import ContactForm from '../components/ContactForm/ContactForm';
// import Highlights from './Highlights/Highlights';
import CoolButton from '../components/CoolButton/CoolButton';
import './Home.css';

export default () => (
	<div id="hero">
		<Hero />
		<CenterParagraph />
		<div id="about"></div>
		<WhoWeAre  />
		<CardSection />
		{/* <GridDisplay /> */}
		<div id="contact"></div>
		<div className="contact-opp-container">
			<ContactForm />
			<div
			id="opportunities"
				className="opp-box"
				style={{ backgroundColor: 'white', maxWidth: '488px', margin: '0 auto', padding: 30 }}
			>
				<h2>Affordable booth rental for a self-contractor</h2>
				<p>
					Gordiany Hair is a well-established, popular hair salon in beautiful San Antonio, Texas. We have
					been in business for over 20 years. Offering 2 professional booth rentals for professional
					independent contractors.
				</p>
				<p style={{ textAlign: 'center' }}>
					<CoolButton text="Click Here For Details!" />
				</p>
				{/* <p>Click here or on photo to read and download the opportunity details.</p> */}
			</div>
		</div>
	</div>
);
