import React from 'react';
import './HairReplacement.css';
import GridDisplay from '../../components/GridDisplay/GridDisplay';
import Card from '../../components/Card/Card';

export default () => {
	return (
		<div className="screen-content">
			<div id="hair-replacement-container">
				<div>
					<div style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}>
						<img
							alt="curly hair drawing"
							src={require('../../images/fut-icon-66x66.jpg')}
							style={{ height: 50, width: 50 }}
						/>
						<span style={{ fontSize: 34, color: '#af3434 ', marginLeft: '0px' }}>
							Hair Replacement Solutions
						</span>
					</div>

					<div className="our-method">
						<p>
							<img
								src={require('../../images/hairstyles-for-men-with-thinning-hair-300x195.jpg')}
								alt="redken_hair_color_salon"
								style={{ height: '195px', width: '300px', float: 'left' }}
							/>
						</p>
						<p>
							Most men and women have come to understand that, at some time in their life, they will
							probably begin losing their hair, especially if there is a history of pattern baldness in
							their family. And, while the understanding and acceptance of that fact are there, when it
							finally begins to happen, many experience the changes in personality, confidence, and
							lifestyle. In our society, where how you look can impact how others perceive you, hair loss
							takes on an even more devastating role. Let’s face it, looks matter!
						</p>
						<p>
							<strong>MEN</strong>&nbsp; Even more challenging is that some men start losing their hair as
							young as twenty five or thirty, right in their prime of life when they need all the assets
							they can get.&nbsp; At a younger age, hair loss can mean a major lack of confidence, which
							in turn, affects every aspect of a man’s life: dating, job performance and, often, simply
							living life to its fullest.
						</p>
						<p>
							<img
								src={require('../../images/woman-hair-loss-300x198.png')}
								alt="Redken-Color-Gels"
								style={{ width: 300, height: 198, float: 'right' }}
							/>
							<strong>Women</strong>&nbsp; While women can experience pattern baldness, even early in
							life, most women find loss or thinning of hair occurs for many other reasons. Regardless of
							age, the effect on their life can be devastating.
						</p>
						<h2>So, what's the answer?</h2>
						<p>
							Just ask someone, or go online and you’ll find numerous recommendations to treat hair loss
							including ointments, laser, wigs, and hair transplants. While hair loss is still not fully
							understood by the medical industry, and most agree there aren’t any lotions or ointments on
							the market that have any effect on restoring your hair. The jury is still out on the
							effectiveness of laser treatments and wigs are….well bulky wigs.
						</p>
						<p>
							Hair transplants have been effective in some men. But, you need a lot of hair around the
							perimeter of your head (where the hair doesn’t die off easily) to use as grafts and it is
							very expensive. If not done correctly, it can leave permanent scaring or your head looking
							worse than if you remained bald.
						</p>
						<p>
							By contrast, a well designed and custom fit Hair Replacement System provides a realistic and
							natural looking solution without invasive surgery. Our systems are state of the art and
							customized according to your individual preferences and lifestyle for a completely
							undetectable appearance. This is especially true when you just want to cover a bald area or
							thinning hair.
						</p>
						<h2>Seeing is believing</h2>
						<p>
							Give us a call and we’ll set up a FREE consultation to show you the amazing technology and
							go over all your options.
						</p>
						<p style={{ textAlign: 'center' }}>
							<strong>
								We will match any price on a hair system in San Antonio, Austin and surrounding areas.
							</strong>
						</p>
					</div>
				</div>
			</div>
			<GridDisplay bgImage={require('../../images/dude-wall.jpg')} />
		</div>
	);
};
