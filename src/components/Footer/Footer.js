import React from 'react';
import './Footer.css';

export default () => {
	// const [isSticky, setSticky] = useState(false);
	// const handleScroll = () => {
	// 	console.log(document.body.scrollTop);
	// 	setSticky(window.pageYOffset > 20);
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll', () => handleScroll);
	// 	};
	// }, []);
	return (
		<div>
			<footer className="footer">
				<address>
					<div>
						<p>
							<span>2015 NE Loop 410</span>
							<br />
							<span>At Los Patios (Exit Starcrest)</span>
							<br />
							<span>San Antonio, TX 78217</span>
						</p>
						<p style={{ marginTop: '20px' }}>
							<span>
								<strong>Hours: Mon - Sat 9am - 5pm</strong>
							</span>
						</p>
					</div>
				</address>
				<address>
					<div>
						<p>Call Today for an APPOINTMENT</p>
						<h2>
							<a href="tel:2107889130">(210) 788-9130</a>
						</h2>
					</div>
				</address>
				<div>
					<img
						src={require('../../images/need-help-button-300x94.png')}
						alt="need-help-button"
						width="140"
						height="44"
						style={{ cursor: 'pointer' }}
					/>
				</div>
			</footer>
			<footer className="footer-copyright-area">
				<p>Demo Site created by Graeme Smith. Not (yet) for commercial use.</p>
			</footer>
		</div>
	);
};
