import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
				{/* <div href="/#" class="header_icon" id="header_icon"></div> */}
				<div>
					{/* <h1>The Hair Salon</h1>
					<h5>When only the best will do</h5> */}
					<img src={require('../../images/gordiany-logo.png')} alt="logo" height="105" />
				</div>
				<nav className={`${expanded ? 'expanded' : ''}`}>
					<span>
						<Link to="/">Home</Link>
					</span>
					<span>
						<Link to="/stylists">Meet The Stylists</Link>
					</span>
					{/* <span>Meet The Stylists</span> */}
					<span id="dropdown-hover" onClick={() => setCollapsibleVisible(!collapsibleVisible)}>
						{/* <Link to="/hair-design">Services</Link> */}
						Services
						<div className={collapsibleVisible ? 'collapsible-content coll-active' : 'collapsible-content'}>
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
						</div>
					</span>
					<span>
						<Link to="/contact-us">Contact</Link>
					</span>
					<span>
						<Link to="/testimonials">Testimonials</Link>
					</span>
					<span>
						<Link to="/videos">Videos</Link>
					</span>
					<span>
						<Link to="/opportunities">Opportunities</Link>
					</span>
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
