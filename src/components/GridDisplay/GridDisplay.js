import React from 'react';
import './GridDisplay.css';
import Card from '../Card/Card';

const cardHeaders = [
	'20 Years of Experience',
	'Private, Personal,Unique',
	'More than Just a Client',
	'About Us',
	'Cost',
	'Video',
];

const cardTexts = [
	'20 years experience with thousands of clients.   Every day, new clients walk into our Hair Replacement Studio looking to change their lives.  Each has his own story and own reasons for wanting to restore the hair he used to have.  When they leave, they go back to their lives with something they thought they’d lost for good – their self-confidence and their self-esteem.',
	'There are many choices when looking for a hair salon.  Most of the larger salons are well advertised.  But, they come at a price. They are expensive and don’t offer the real confidential and personalized service you expect and deserve.',
	'Many of our clients have become good friends over the years.  After all, they have something very important in common; they all suffered from hair loss…and they did something about it.  Having hair has changed all of their lives for the better.  You will sense our passion for our craft and our devotion to our guests the moment you step inside our salon.',
	'At Gordiany’s Hair Salon, George and Larysa are masters of cutting and highlighting techniques,using their unique and rare talents, will keep you in the latest fashion styles at an affordable price.  We specialize in hair styling for both men and women, design, cutting, coloring, highlighting, & hair replacement systems.',
	'Because we are a small, private studio, we don’t have the overhead of the large. and highly-publicized companies.',
	'We offer an entire range of options designed to meet your budget, and provide you with flexible solutions that will exceed all of your expectations.',
];

export default ({ bgImage }) => {
	return (
		<div
			className="grid-display"
			// style={{ backgroundImage:  }}
			// style={{
			// 	backgroundImage: bgImage
			// 		? 'url(' + bgImage + ')'
			// 		: 'url(' + require('../../images/bgHairWash.jpg') + ')',
			// 	minHeight: '100vh',
			// 	backgroundColor: '#ffffff',
			// 	backgroundPosition: 'center center',
			// 	backgroundRepeat: 'no-repeat',
			// 	backgroundSize: 'cover',
			// }}
		>
			<div style={{ textAlign: 'center' }}>
				<span>Why Gordiany Hair Studio?</span>
			</div>
			<div className="grid-container">
				<Card headerSize="24px" headerWeight={400} header={cardHeaders[0]} text={cardTexts[0]} />
				<Card headerSize="24px" headerWeight={400} header={cardHeaders[1]} text={cardTexts[1]} />
				<Card headerSize="24px" headerWeight={400} header={cardHeaders[2]} text={cardTexts[2]} />
				<Card headerSize="24px" headerWeight={400} header={cardHeaders[3]} text={cardTexts[3]} />
				<Card headerSize="24px" headerWeight={400} header={cardHeaders[4]} text={cardTexts[4]} />
				<Card headerSize="24px" headerWeight={400} header={cardHeaders[5]} text={cardTexts[5]} />
			</div>
		</div>
	);
};
