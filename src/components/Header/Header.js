import React, { useState, useEffect } from 'react';
import './Header.css';

export default ({expanded, setExpanded}) => {
	// const [expanded, setExpanded] = useState(false);
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

	const slideMenu = () => {
		setExpanded(!expanded);
	}

	return (
		<div>
			<header className={`header${isSticky ? ' sticky' : ' not-sticky'}`}>
				{/* <div href="/#" class="header_icon" id="header_icon"></div> */}
				<div>
					{/* <h1>The Hair Salon</h1>
					<h5>When only the best will do</h5> */}
					<img src={require('../../images/gordiany-logo.png')} alt="logo" height="105" />
				</div>
				<nav className={`${expanded ? 'expanded' : ''}`}>
					<span>Home</span>
					<span>Meet The Stylists</span>
					<span>Services</span>
					<span>Contact</span>
					<span>Testimonials</span>
					<span>Videos</span>
					<span>Opportunities</span>
					<span>Search</span>
				</nav>
				<div className={`hamburger`} onClick={slideMenu}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</header>
			<div className={`${isSticky ? 'scroll-padding' : 'no-padding'}`} />
		</div>
	);
};
