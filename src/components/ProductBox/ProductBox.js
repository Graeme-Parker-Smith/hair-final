import React from 'react';
import './ProductBox.css';

export default ({
	imgName = '',
	header = 'Hello',
	subHeader = 'Goodbye',
	headerSize = '34px',
	headerWeight = 700,
	mainPar = '',
	textData = [],
	listHeader = '',
	listData = [],
	secondImg = '',
}) => {
	return (
		<div>
			<h1 style={{ fontSize: headerSize, fontWeight: headerWeight }}>{header}</h1>
			<h4>{subHeader}</h4>
			<div id="ProductBox-container">
				<div>
					{imgName && <img className="ProductBox-img" src={imgName} alt="Product Box" />}
					{mainPar && <p style={{ margin: 0 }}>{mainPar}</p>}
				</div>
				<div>
					{textData.map((text) => (
						<p>{text}</p>
					))}
				</div>
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
				{secondImg && (
					<h4 style={{ textAlign: 'center' }}>
						<img id="ProductBox-img-2" className="ProductBox-img" alt="product" src={secondImg} />
					</h4>
				)}
			</div>
		</div>
	);
};
