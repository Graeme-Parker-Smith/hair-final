import React from 'react';
import './GridDisplay.css';
import Card from '../Card/Card';

const cardTexts = [
	'Highlight natural or tinted hair up to 7 levels and simultaneously deposit permanent oxidation hair color in a single process. Our Gordiany’s Blazing High lightening System achieves beautiful results and ends the need to do double process bleach and tone highlights. Your color appointment will start off with a careful consultation. Our color selection will be according to skin tone and tones that will blend with your natural base.',
	'We analyze every client and customize your hair design for your face structure, hair structure, body structure and your lifestyle.  You can have that exquisite, multi-functional style you’ve always wanted.  Don’t worry.  We are experience with any type hair texture and thickness.  We also teach you how to maintain your hairstyle so that you can always look your best.  We offer the finest custom, personalized service in San Antonio.',
	'At Gordiany’s Hair Salon we have a rare talent on our staff of fine hairstylists.  Larysa Gordiany, co-owner and Master Barber Stylist, has added a host of men’s barber services.  She can create any style for all ages.  We invite you to drop by our barber studio located in beautiful Los Patios in San Antonio.  We carry Johnny B and American Crew products for the best style possible.',
];

export default () => {
	return (
		<div className="grid-display">
			<div style={{ textAlign: 'center' }}>
				<span>Why G Hair Studio?</span>
			</div>
			<div className="grid-container">
				<Card text={cardTexts[0]} />
				<Card text={cardTexts[1]} />
				<Card text={cardTexts[2]} />
				<Card text={cardTexts[2]} />
				<Card text={cardTexts[2]} />
				<Card text={cardTexts[2]} />
			</div>
		</div>
	);
};
