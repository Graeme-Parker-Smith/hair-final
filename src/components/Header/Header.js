import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

export default () => {
	const [isSticky, setSticky] = useState(false);
	const handleScroll = () => {
		console.log(document.body.scrollTop);
		setSticky(window.pageYOffset > 20);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	}, []);
	return (
		<header className={`header${isSticky ? ' sticky' : ' not-sticky'}`}>
			<div>
				<h1>The Hair Salon</h1>
				<h5>When only the best will do</h5>
			</div>
			<nav>
				<li>Home</li>
				<li>Meet The Stylists</li>
				<li>Services</li>
				<li>Contact</li>
				<li>Testimonials</li>
				<li>Videos</li>
				<li>Opportunities</li>
				<li>Search</li>
			</nav>
		</header>
	);
};
