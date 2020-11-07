import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

export default ({ expanded, setExpanded }) => {
	const [isSticky, setSticky] = useState(false);
	const [collapsibleVisible, setCollapsibleVisible] = useState(false);
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
	};

	return (
		<div>
			<header className={`header${isSticky ? ' sticky' : ' not-sticky'}`}>
				<div>
					<img src={require('../../images/gordiany-logo.png')} alt="logo" height="105" />
				</div>
				<nav className={`${expanded ? 'expanded' : ''}`}>
					<span>
						<a onClick={slideMenu} href="#hero">Home</a>
						{/* <Link to="/">Home</Link> */}
					</span>
					<span>
						<a onClick={slideMenu} href="#about">About</a>
						{/* <Link to="/stylists">Meet The Stylists</Link> */}
					</span>
					<span id="dropdown-hover" onClick={() => setCollapsibleVisible(!collapsibleVisible)}>
						<a onClick={slideMenu} href="#services">Services</a>
						{/* Services */}
						{/* <div className={collapsibleVisible ? 'collapsible-content coll-active' : 'collapsible-content'}>
							<span>
								<Link to="hair-design">Hair Design</Link>
							</span>
							<span>
								<Link to="/barber-services">Barber Services</Link>
							</span>
							<span>
								<Link to="/highlights">Highlights</Link>
							</span>
							<span>
								<Link to="/hair-color">Colors</Link>
							</span>
							<span>
								<Link to="/hair-replacement">Hair Replacement</Link>
							</span>
						</div> */}
					</span>
					<span>
						<a onClick={slideMenu} href="#products">Products</a>
						{/* <Link to="/contact-us">Contact</Link> */}
					</span>
					<span>
						<a onClick={slideMenu} href="#hair-replacement">
							Hair Replacement
						</a>
						{/* <Link to="/testimonials">Testimonials</Link> */}
					</span>
					<span>
						<a onClick={slideMenu} href="#contact">Contact</a>
						{/* <Link to="/videos">Videos</Link> */}
					</span>
					<span>
						<a onClick={slideMenu} href="#opportunities">Opportunities</a>
						{/* <Link to="/opportunities">Opportunities</Link> */}
					</span>
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
