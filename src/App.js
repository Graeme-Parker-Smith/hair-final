import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ImageChanger from './components/ImageChanger/ImageChanger';
import CenterParagraph from './components/CenterParagraph/CenterParagraph';
import CardSection from './components/CardSection/CardSection';
import GridDisplay from './components/GridDisplay/GridDisplay';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	const [expanded, setExpanded] = useState(false);

	const Stylists = () => (
		<div style={{height: '200vh', backgroundColor: 'red'}}></div>
	)
	const Home = () => (
		<div>
			<ImageChanger />
			<CenterParagraph />
			<CardSection />
			<GridDisplay />
			<Footer />
		</div>
	);
	
	return (
		<div>
		<Header expanded={expanded} setExpanded={setExpanded} />
			<Switch>
				<Route exact path="/stylists">
					<Stylists />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
