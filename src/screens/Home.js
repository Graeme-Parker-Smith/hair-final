import React from 'react';
import ImageChanger from '../components/ImageChanger/ImageChanger';
import CenterParagraph from '../components/CenterParagraph/CenterParagraph';
import CardSection from '../components/CardSection/CardSection';
import GridDisplay from '../components/GridDisplay/GridDisplay';
import Stylists from './Stylists/Stylists';
export default () => (
	<div>
		<ImageChanger />
		<CenterParagraph />
		<Stylists />
		<CardSection />
		<GridDisplay />
	</div>
);
