import React, { useEffect } from 'react';
import './CardSection.css';
import Card from '../Card/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HairDesignInfo from '../HairDesignInfo/HairDesignInfo';
import ProductBox from '../ProductBox/ProductBox';

const cardHeaders = ['HIGHLIGHTS & COLOR', 'HAIR DESIGNS', 'BARBER SERVICES'];

const cardTexts = [
	'Highlight natural or tinted hair up to 7 levels and simultaneously deposit permanent oxidation hair color in a single process. Our Gordiany’s Blazing High lightening System achieves beautiful results and ends the need to do double process bleach and tone highlights. Your color appointment will start off with a careful consultation. Our color selection will be according to skin tone and tones that will blend with your natural base.',
	'We analyze every client and customize your hair design for your face structure, hair structure, body structure and your lifestyle.  You can have that exquisite, multi-functional style you’ve always wanted.  Don’t worry.  We are experience with any type hair texture and thickness.  We also teach you how to maintain your hairstyle so that you can always look your best.  We offer the finest custom, personalized service in San Antonio.',
	'At Gordiany’s Hair Salon we have a rare talent on our staff of fine hairstylists.  Larysa Gordiany, co-owner and Master Barber Stylist, has added a host of men’s barber services.  She can create any style for all ages.  We invite you to drop by our barber studio located in beautiful Los Patios in San Antonio.  We carry Johnny B and American Crew products for the best style possible.',
];

export default () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
			mirror: true,
			offset: 150,
		});
		AOS.refresh();
	}, []);

	return (
		<div className="card-section">
			<h1 data-aos="fade-up" style={{ color: 'white' }}>
				We Do It All
			</h1>
			<Card id="card-1" imgName="brunette" header={cardHeaders[0]} text={cardTexts[0]}>
			<ProductBox
					header="Blazing Color"
					subHeader="Blazing Highlights Toner Infused Gel-Color System"
					imgName={require('../../images/fixed_banner_4-768x287.jpg')}
					mainPar="Blazing Color is part of Scruples’ 3 Dimensional Customized Gel System.  The exclusive Protective Barrier Complex (PBX) shields the hair color molecule as the lifting process occurs.  PBX is a blend of 4 essential ingredients that ad moisture, that provides body and volume, protect hair from UV rays, and promotes a shiny, healthy, conditioned look and feel."
					textData={[
						'Lifts up to 7 levels through natural or color treated hair and deposits permanent hair color in a single process.',
						'Contains Scruples’ exclusive Protective Barrier Complex (PBX), which protects the dye molecule and deposits color deep into hair while conditioning and creating incredible shine.',
					]}
					listHeader="Colors"
					colorImg={require('../../images/bhl-shades.jpg')}
				/>
				<ProductBox
					header="Illusionist"
					subHeader="Illusionist Brilliant Cream Highlights – Bleach Free Product"
					imgName={require('../../images/fixed_banner_3_2015-768x287.jpg')}
					mainPar='Brilliant cream highlights:  Amazing base breakthrough formula offers a creative lightening technique to soften the contrast between natural and highlighted hair.  It is enriched with acai berry, acacia flower extract, aloe Vera and avocado oil.  The Illusionist PBX technology surrounds and protects the dye molecule and deposits hair color deep into the hair. In addition, adds moisture-binding qualities to keep hair flexible, healthy and shiny.  It also provides strength, body and volume, and protects hair from damaging sun rays.  The result is a beautifully conditioned hair with an incredible shine.'
					textData={[
						'You won’t believe your eyes',
						'Controlled lift with 10 brilliant highlight selections ranging from intense reds and coppers to luminous blondes',
						'Amazing base break formulas',
					]}
					// secondImg={require('../../images/298764-scruples_hair_color-300x281.png')}
					colorImg={require('../../images/illusionist-shades-cropped.jpg')}
				/>
				<ProductBox
					header="Power Blonde"
					subHeader="Balayage Power Blonde Clay Lightener Techniques"
					imgName={require('../../images/fixed_banner_5_2015-768x287.jpg')}
					mainPar='Balayage Power Blonde clay lightener is a revolutionary new product from Scruples’ that allowing strategically freehand painted highlights around the face, similar to the art of contouring with makeup.  We are able to create light and dimension to enhance your natural features.   This unique clay lightener works to seamlessly surround hair, providing our stylists the freedom to paint with precision and create the custom color applications you want.'
					textData={[
						'Used on-trend painting techniques such as: balayage, ombre, sombre, bronde and ecaille haircolor',
						'Achieves 1–5 levels of lift with open-air processing, no foils necessary',
						'Designed for freehand lightener application and creative color placement',
						'Formulated with Kaolin and Amazonian White Clays, Keratin Protein and ECOCERT® certified/USDA Organic Patauá Oil',
					]}
					colorImg={require('../../images/power-blonde-cropped.jpg')}
				/>
			</Card>
			<Card id="card-2" imgName="android-girl" header={cardHeaders[1]} text={cardTexts[1]} hasButton={true}>
				<HairDesignInfo />
			</Card>
			<Card id="card-3" imgName="guy-hair" header={cardHeaders[2]} text={cardTexts[2]} hasButton={true} />
		</div>
	);
};
