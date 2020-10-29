import React from 'react';
import ImageChanger from '../components/ImageChanger/ImageChanger';
import CenterParagraph from '../components/CenterParagraph/CenterParagraph';
import CardSection from '../components/CardSection/CardSection';
import GridDisplay from '../components/GridDisplay/GridDisplay';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';

export default () => (
	<div>
		<ImageChanger />
		<CenterParagraph />
		<WhoWeAre />
		<CardSection />
		<GridDisplay />
	</div>
);
