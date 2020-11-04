import React, { useEffect } from 'react';
import './ProductBox.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({
	imgName = '',
	header = 'Hello',
	subHeader = 'Goodbye',
	headerSize = '34px',
	headerWeight = 700,
	mainPar = '',
	textData = '',
	listHeader = '',
	listData = '',
	secondImg = '',
	colorImg = '',
}) => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
			mirror: true,
			offset: 150,
		});
		AOS.refresh();
	}, []);
	return (
		<div data-aos="fade-up">
			<div data-aos="fade-right" className="ProductBox-header-container">
				<h1 style={{ fontSize: headerSize, fontWeight: headerWeight }}>{header}</h1>
				<div className="fancy-line"></div>
			</div>
			<h4 data-aos="fade-left">{subHeader}</h4>
			<div id="ProductBox-container">
				<div className="ProductBox-first-element">
					{imgName && <img data-aos="flip-up" className="ProductBox-img" src={imgName} alt="Product Box" />}
					{mainPar && <p data-aos="fade-up">{mainPar}</p>}
				</div>
				<div>{textData && textData.map((text, i) => <p data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}>{text}</p>)}</div>
				{listData && (
					<div style={{ minWidth: '150px' }}>
						<h3 data-aos="zoom-in" style={{ textAlign: 'center' }}>
							<strong>{listHeader && listHeader}</strong>
						</h3>
						<ul >
							{listData.map((item) => (
								<div
									style={{
										display: 'flex',
										width: '100%',
										marginTop: 10,
										marginBottom: 10,
										justifyContent: 'space-between',
									}}
								>
									<p style={{marginRight: 20}} data-aos="fade-right">{item.text}</p>
									<p data-aos="fade-left">{item.price}</p>
								</div>
							))}
						</ul>
					</div>
				)}
				{colorImg && (
					<div data-aos="zoom-in-up" style={{ width: '100%', overflowX: 'auto', margin: '20px 0' }}>
						<img id="ProductBox-img-colors" className="ProductBox-img" alt="product" src={colorImg} />
					</div>
				)}
				{secondImg && <img id="ProductBox-img-2" className="ProductBox-img" alt="product" src={secondImg} />}
			</div>
		</div>
	);
};
