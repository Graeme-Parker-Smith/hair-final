import React from 'react';
import './Highlights.css';
import ProductBox from '../../components/ProductBox/ProductBox';

export default () => {
	return (
		<div id="highlights-container" className="screen-content">
			<div>
				<div>
					<div className="barber-header">
						<img id="silogo-img" alt="logo" src={require('../../images/silogo-268x300.png')} />
						<h1>Highlights</h1>
					</div>
					<div className="highlights-img-container">
						<img alt="highlights example" src={require('../../images/red-square_orig_large-150x150.jpg')} />
						<img
							alt="highlights example"
							src={require('../../images/highlight-spotlight-520x655-238x300.png')}
						/>
						<img alt="highlights example" src={require('../../images/Photo-Top-1-260x300.png')} />
						<img
							alt="highlights example"
							src={require('../../images/Brown-Hairstyles-With-Caramel-Highlights-14-225x300.jpg')}
						/>
						<img
							alt="highlights example"
							src={require('../../images/b3f1ea287d7e0d8b042c_CG-Models-LACQUER-300x296.jpg')}
						/>
						<img alt="highlights example" src={require('../../images/Top-photo-3-260x300.jpg')} />
						<img alt="highlights example" src={require('../../images/Unveiled_Purity_Zoe-240x300.jpg')} />
					</div>
					<div className="barber-header">
						<img
							id="scruples-logo"
							alt="scruples logo"
							src={require('../../images/scrupleslogo-300x88.png')}
						/>
						<h2>We Exclusively Use Scruples Products</h2>
					</div>
					<h4>Non-Bleach, Off The Scalp Highlighting</h4>
					<p>
						Highlight natural or tinted hair up to 7 levels and simultaneously deposit permanent oxidation
						hair color in a single process. Our Gordiany’s Blazing High lightening System achieves beautiful
						results and ends the need to do double process bleach and tone highlights. Achieving the desired
						lift and tone in a single step helps maintain the structure and integrity of the hair.Our
						Gordiany’s Blazing Highlights offers a controlled lifting action. The lightener will NOT BLEACH
						through the color that is being deposited and will NOT OVER LIGHTEN or PRODUCE UNWANTED TONES.
					</p>
					<p>
						The High lightening system never uses greater than 20 volume peroxide. The use of low volume
						peroxide leaves the hair silky and shinny without dryness. Our 10 and 20 volume Special Pure Oxi
						clear developers are used to develop the color molecules only; they are not used for lifting or
						lightening the hair. The lightening action is controlled by the number of X-tra light booster
						concentrate scoops used.
					</p>
				</div>

				<ProductBox
					header="Blazing Color"
					subHeader="Blazing Highlights Toner Infused Gel-Color System"
					imgName={require('../../images/fixed_banner_4-768x287.jpg')}
					textData={[
						'Blazing Color is part of Scruples’ 3 Dimensional Customized Gel System.  The exclusive Protective Barrier Complex (PBX) shields the hair color molecule as the lifting process occurs.  PBX is a blend of 4 essential ingredients that ad moisture, that provides body and volume, protect hair from UV rays, and promotes a shiny, healthy, conditioned look and feel.',
						'Lifts up to 7 levels through natural or color treated hair and deposits permanent hair color in a single process.',
						'Contains Scruples’ exclusive Protective Barrier Complex (PBX), which protects the dye molecule and deposits color deep into hair while conditioning and creating incredible shine.',
					]}
					listHeader="Colors"
					listData={[
						'Warm Rich Red',
						'Chesnut',
						'Carmel',
						'Honey',
						'Warm Golden Blonde',
						'Soft Golden Blonde',
						'Warm Copper Blonde',
						'Pale Vanilla Blonde',
						'Cool Almond Blonde',
						'Coolest Light Blonde',
						'Cool Ultra Lite Blonde',
					]}
				/>
				<ProductBox
					header="Illusionist"
					subHeader="Illusionist Brilliant Cream Highlights – Bleach Free Product"
					imgName={require('../../images/fixed_banner_3_2015-768x287.jpg')}
					textData={[
						'Blazing Color is part of Scruples’ 3 Dimensional Customized Gel System.  The exclusive Protective Barrier Complex (PBX) shields the hair color molecule as the lifting process occurs.  PBX is a blend of 4 essential ingredients that ad moisture, that provides body and volume, protect hair from UV rays, and promotes a shiny, healthy, conditioned look and feel.',
						'Lifts up to 7 levels through natural or color treated hair and deposits permanent hair color in a single process.',
						'Contains Scruples’ exclusive Protective Barrier Complex (PBX), which protects the dye molecule and deposits color deep into hair while conditioning and creating incredible shine.',
					]}
					secondImg={require('../../images/298764-scruples_hair_color-300x281.png')}
				/>
				<ProductBox
					header="Balayage Power Blonde"
					subHeader="Balayage Power Blonde Clay Lightener Techniques"
					imgName={require('../../images/fixed_banner_5_2015-768x287.jpg')}
					textData={[
						'Blazing Color is part of Scruples’ 3 Dimensional Customized Gel System.  The exclusive Protective Barrier Complex (PBX) shields the hair color molecule as the lifting process occurs.  PBX is a blend of 4 essential ingredients that ad moisture, that provides body and volume, protect hair from UV rays, and promotes a shiny, healthy, conditioned look and feel.',
						'Lifts up to 7 levels through natural or color treated hair and deposits permanent hair color in a single process.',
						'Contains Scruples’ exclusive Protective Barrier Complex (PBX), which protects the dye molecule and deposits color deep into hair while conditioning and creating incredible shine.',
					]}
				/>
			</div>
		</div>
	);
};
