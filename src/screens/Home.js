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
	</div>
);
