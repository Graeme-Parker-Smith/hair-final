import React from 'react';
import './Colors.css';

export default () => {
	return (
		<div className="screen-content">
			<div id="hair-design">
				<div>
					<div style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}>
						<img
							alt="curly hair drawing"
							src={require('../../images/icon-hair-color-big.png')}
							style={{ height: 55, width: 71}}
						/>
						<span style={{ fontSize: 34, color: '#af3434 ', marginLeft: '0px' }}>Hair Color</span>
					</div>

					<h2>Our Methods</h2>
					<h3>
						<strong>Hair Color</strong>
					</h3>

					<div className="our-method">
						<p>
							<img
								src={require("../../images/redken_hair_color_salon-768x202.jpg")}
								alt="redken_hair_color_salon"
								className="banner-img"
							/>
						</p>
						<p>
							Your color appointment will start off with a careful consultation. We get to know client and
							evaluate you and your hair for:
						</p>
						<p>
							Texture&nbsp;&nbsp;&nbsp;&nbsp; *&nbsp;&nbsp; Skin tone&nbsp;&nbsp;&nbsp;&nbsp;
							*&nbsp;&nbsp;&nbsp; Hair condition&nbsp;&nbsp;&nbsp;&nbsp; *&nbsp;&nbsp;&nbsp; Gray coverage
							<img
								src={require('../../images/Redken-Color-Gels.jpg')}
								alt="Redken-Color-Gels"
								style={{width: 177, height: 146, float: 'right'}}
							/>
						</p>
						<p>
							After talking to you about the look you want, we’ll make a recommendation about the ideal
							hair color formula for you. Our color selection will be according to skin tone and tones
							that will blend with your natural base.
						</p>
						<p>
							We use only <strong>Redken color gels</strong>.&nbsp; Redken has been the mainstay for
							covering gray, and they have a wide selection of colors from basic to trendy that never
							fails for clients who want long-lasting color.
						</p>
						<p>
							<strong>
								<img
									src={require('../../images/359043-357801Redken_Shades_EQ_Salon-300x290.png')}
									alt="359043-357801Redken_Shades_EQ_Salon"
									style={{width: 153, height: 148, float: 'left'}}
								/>
							</strong>
						</p>
						<p>
							<strong>Redken Shades EQ</strong> is the number one demi color line in America.&nbsp; Shades
							EQ will deliver results in light gray coverage, toning, correction, and low lights that give
							your hair a wonderful shine with superior conditioning.
						</p>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<h3>
							<strong>Highlights</strong>
						</h3>
						<p>
							<img
								className="banner-img"
								src={require('../../images/Scruples-intro-768x213.jpg')}
								alt="Scruples intro"
							/>
							If you want amazing highlights to give your new hair color accent, we can add that to your
							new look.&nbsp; At Gordiany’s, we use only Scruples{' '}
							<strong>Blazing Highlights Toner Infused Gel-Color System</strong> to highlight your hair in
							a single process. &nbsp;It lifts and tones in one single step.&nbsp;&nbsp; And, it requires
							no bleaching, allowing a darker levels of beautiful highlight tones.
						</p>
						<p>FOR MOST COLOR APPLICATIONS WE USE BOTH PRODUCTS</p>
						<p>
							<strong>
								Come in and explore hair color trends and inspiration to help you find your next new
								look.
							</strong>
						</p>
						<ul style={{listStyleType: 'disc', paddingLeft: '40px'}}>
							<li>Redken single process color and cut with intense treatment – Starting at $95.00</li>
							<li>Scruples partial highlights and cut with intense treatment – Starting at $75.00</li>
							<li>
								Full head highlights and cut with intense treatment– Starting at
								$120.00
							</li>
							<li>Redken single process color with accent highlights – Starting at $115.00</li>
						</ul>
						<p>Full head highlights is an extra charge.</p>
					</div>
				</div>
				<div className="vern-container">
					<p>
						
					</p>
				</div>
			</div>
		</div>
	);
};
