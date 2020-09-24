import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

export default () => {
	const [isSticky, setSticky] = useState(false);
	const ref = useRef(null);
	const handleScroll = () => {
		if (ref.current) {
			console.log(window.pageYOffset)
			setSticky(window.pageYOffset > 0);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	}, []);
	return (
		<header ref={ref} className={`header${isSticky ? ' sticky' : ''}`}>
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
