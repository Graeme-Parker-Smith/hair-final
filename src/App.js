import React from 'react';
import Header from './components/Header/Header';
import ImageChanger from './components/ImageChanger/ImageChanger';
import CenterParagraph from './components/CenterParagraph/CenterParagraph';
import CardSection from './components/CardSection/CardSection';
import GridDisplay from './components/GridDisplay/GridDisplay';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div>
			<Header />
			<ImageChanger />
			<CenterParagraph />
			<CardSection />
			<GridDisplay />
			<Footer />
		</div>
	);
}

export default App;
