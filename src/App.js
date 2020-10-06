import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './screens/Home';
import Stylists from './screens/Stylists/Stylists';
import HairDesign from './screens/HairDesign/HairDesign';
import './App.css';

function App() {
	const [expanded, setExpanded] = useState(false);

	// const Stylists = () => <div style={{ height: '200vh', backgroundColor: 'red' }}></div>;

	return (
		<div>
			<Header expanded={expanded} setExpanded={setExpanded} />
			<Switch>
				<Route exact path="/stylists">
					<Stylists />
				</Route>
				<Route exact path="/hair-design">
					<HairDesign />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
