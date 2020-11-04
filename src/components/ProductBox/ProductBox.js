import React from 'react';
import './ProductBox.css';

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
	return (
		<div>
			<div className="ProductBox-header-container">
				<h1 style={{ fontSize: headerSize, fontWeight: headerWeight }}>{header}</h1>
				<div className="fancy-line"></div>
			</div>
			<h4>{subHeader}</h4>
			<div id="ProductBox-container">
				<div className="ProductBox-first-element">
					{imgName && <img className="ProductBox-img" src={imgName} alt="Product Box" />}
					{mainPar && <p>{mainPar}</p>}
				</div>
				<div>{textData && textData.map((text) => <p>{text}</p>)}</div>
				{listData && (
					<div style={{ minWidth: '150px' }}>
						<h3 style={{ textAlign: 'center' }}>
							<strong>{listHeader && listHeader}</strong>
						</h3>
						<ul>
							{listData.map((text) => (
								<li>{text}</li>
							))}
						</ul>
					</div>
				)}
				{colorImg && (
					<div style={{width: '100%', overflowX: 'auto', margin: '20px 0'}}>
						<img id="ProductBox-img-colors" className="ProductBox-img" alt="product" src={colorImg} />
					</div>
				)}
				{secondImg && <img id="ProductBox-img-2" className="ProductBox-img" alt="product" src={secondImg} />}
			</div>
		</div>
	);
};
