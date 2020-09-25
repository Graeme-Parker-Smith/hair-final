import React from 'react';
import Header from './components/Header/Header';
import ImageChanger from './components/ImageChanger/ImageChanger';
import CenterParagraph from './components/CenterParagraph/CenterParagraph';
import CardSection from './components/CardSection/CardSection';
import GridDisplay from './components/GridDisplay/GridDisplay';

function App() {
	return (
		<div>
			<Header />
			<ImageChanger />
			<CenterParagraph />
			<CardSection />
			<GridDisplay />
		</div>
	);
}

export default App;
