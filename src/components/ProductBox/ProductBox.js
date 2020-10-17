import React from 'react';
import './ProductBox.css';

export default ({
	imgName = 'fixed_banner_4-768x287',
  header = 'Hello',
  subHeader = 'Goodbye',
	headerSize = '34px',
	headerWeight = 700,
  textData = [],
  listData = [],
}) => {
	return (
		<div>
      <h1 style={{ fontSize: headerSize, fontWeight: headerWeight }}>{header}</h1>
			<h4>{subHeader}</h4>
			{imgName && <img className="ProductBox-img" src={require(`../../images/${imgName}.jpg`)} alt="Product Box" />}
			{textData.map((text) => (
				<p>{text}</p>
			))}
		</div>
	);
};
