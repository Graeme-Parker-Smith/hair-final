import React from 'react';
// import ImageChanger from '../components/ImageChanger/ImageChanger';
import CenterParagraph from '../components/CenterParagraph/CenterParagraph';
import CardSection from '../components/CardSection/CardSection';
import GridDisplay from '../components/GridDisplay/GridDisplay';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';
import Hero from '../components/Hero/Hero';
import ContactForm from '../components/ContactForm/ContactForm';
// import Highlights from './Highlights/Highlights';

export default () => (
	<div>
		<Hero />
		<CenterParagraph />
		<WhoWeAre />
		<CardSection />
		<GridDisplay />
		<ContactForm />
		<div className="opp-box" style={{backgroundColor: 'white'}}>
			<h2>Affordable booth rental for a self-contractor</h2>
			<p>
				Gordiany Hair is a well-established, popular hair salon in beautiful San Antonio, Texas. We have been in
				business for over 20 years. Offering 2 professional booth rentals for professional independent
				contractors.
			</p>
			<p>Click here or on photo to read and download the opportunity details.</p>
		</div>
	</div>
);
