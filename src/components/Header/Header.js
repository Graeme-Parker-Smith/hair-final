import React, { useState, useEffect } from 'react';
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
		<div>
			<header className={`header${isSticky ? ' sticky' : ' not-sticky'}`}>
				<div>
					<h1>The Hair Salon</h1>
					<h5>When only the best will do</h5>
				</div>
				<nav>
					<span>Home</span>
					<span>Meet The Stylists</span>
					<span>Services</span>
					<span>Contact</span>
					<span>Testimonials</span>
					<span>Videos</span>
					<span>Opportunities</span>
					<span>Search</span>
				</nav>
			</header>
			<div className={`${isSticky ? 'scroll-padding' : 'no-padding'}`} />
		</div>
	);
};
