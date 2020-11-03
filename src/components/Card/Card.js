import React, { useEffect, useState } from 'react';
import './Card.css';
import CoolButton from '../CoolButton/CoolButton';
import HairDesignInfo from '../HairDesignInfo/HairDesignInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({
	imgName = false,
	header = 'Hello',
	text = 'Hello',
	hasButton = false,
	headerSize = '16px',
	headerWeight = 700,
	id = 'card',
}) => {
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		AOS.init({
			duration: 1500,
			mirror: true,
			offset: 150,
		});
		AOS.refresh();
	}, []);

	const handleClick = () => {
		setExpanded(!expanded);
	};
	return (
		<div style={{ maxWidth: 1200, margin: '0 auto' }} data-aos="fade-up" id={id} className="card">
			{imgName && <img data-aos="fade-up-right" className="card-img" src={require(`../../images/${imgName}.jpg`)} alt="beautiful hair" />}
			<h4 data-aos="fade-down-left" style={{ fontSize: headerSize, fontWeight: headerWeight }}>{header}</h4>
			<p data-aos="fade-up-left">{text}</p>

			{/* {hasButton && <CoolButton text={expanded ? 'Show Less' : 'Show More'} onClick={handleClick} />} */}

			<HairDesignInfo />
			{/* <div
				style={{
					overflow: 'hidden',
					transition: 'max-height 0.5s ease-in-out',
					maxHeight: expanded ? '2000px' : 0,
				}}
			></div> */}
		</div>
	);
};
