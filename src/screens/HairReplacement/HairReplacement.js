import React from 'react';
import './HairReplacement.css';
import BFixed from '../../components/BFixed/BFixed';

export default () => {
	return (
		<div>
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
								probably begin losing their hair, especially if there is a history of pattern baldness
								in their family. And, while the understanding and acceptance of that fact are there,
								when it finally begins to happen, many experience the changes in personality,
								confidence, and lifestyle. In our society, where how you look can impact how others
								perceive you, hair loss takes on an even more devastating role. Let’s face it, looks
								matter!
							</p>
							<p>
								<strong>MEN</strong>&nbsp; Even more challenging is that some men start losing their
								hair as young as twenty five or thirty, right in their prime of life when they need all
								the assets they can get.&nbsp; At a younger age, hair loss can mean a major lack of
								confidence, which in turn, affects every aspect of a man’s life: dating, job performance
								and, often, simply living life to its fullest.
							</p>
							<p>
								<img
									src={require('../../images/woman-hair-loss-300x198.png')}
									alt="Redken-Color-Gels"
									style={{ width: 300, height: 198, float: 'right' }}
								/>
								<strong>Women</strong>&nbsp; While women can experience pattern baldness, even early in
								life, most women find loss or thinning of hair occurs for many other reasons. Regardless
								of age, the effect on their life can be devastating.
							</p>
							<h2>So, what's the answer?</h2>
							<p>
								Just ask someone, or go online and you’ll find numerous recommendations to treat hair
								loss including ointments, laser, wigs, and hair transplants. While hair loss is still
								not fully understood by the medical industry, and most agree there aren’t any lotions or
								ointments on the market that have any effect on restoring your hair. The jury is still
								out on the effectiveness of laser treatments and wigs are….well bulky wigs.
							</p>
							<p>
								Hair transplants have been effective in some men. But, you need a lot of hair around the
								perimeter of your head (where the hair doesn’t die off easily) to use as grafts and it
								is very expensive. If not done correctly, it can leave permanent scaring or your head
								looking worse than if you remained bald.
							</p>
							<p>
								By contrast, a well designed and custom fit Hair Replacement System provides a realistic
								and natural looking solution without invasive surgery. Our systems are state of the art
								and customized according to your individual preferences and lifestyle for a completely
								undetectable appearance. This is especially true when you just want to cover a bald area
								or thinning hair.
							</p>
							<h2>Seeing is believing</h2>
							<p>
								Give us a call and we’ll set up a FREE consultation to show you the amazing technology
								and go over all your options.
							</p>
							<p style={{ textAlign: 'center' }}>
								<strong>
									We will match any price on a hair system in San Antonio, Austin and surrounding
									areas.
								</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
			<BFixed bgImage={require('../../images/dude-wall.jpg')}>
				<h1 style={{color: 'white', textAlign: 'center', margin: '50px', paddingTop: '50px'}}>Now, Innovative Hair Loss Solutions with Proven Results</h1>
				<div style={{ backgroundColor: 'white', width: '713px', margin: '0 auto', padding: '50px' }}>
					<h2>Men & Women's Hair Replacement Systems</h2>
					<iframe
						title="men's hair replacement"
						width="350"
						height="195"
						src="https://www.youtube.com/embed/qjcelxdumEk"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<p>
						Over the last 20 – 30 years, the non-surgical hair replacement industry, and the system
						technology, has shown to provide hair for men that looks and feels totally natural at a
						reasonable cost. Non-surgical hair replacement works by applying a light, transparent membrane,
						which is infused with human hair, to the scalp, wherever there is hair loss or thinning. This
						membrane is attached to the scalp and woven in with the existing hair. This creates a very
						natural looking effect as the hair in the membrane can be matched perfectly to your own hair, in
						terms of density, color and direction.
					</p>
					<p>
						Unlike wigs or hair pieces, custom Hair Systems become part of you – not something you wear.
						When properly layered and styled, it truly is a cosmetic miracle. It is virtually undetectable.
						And, because it is temporarily affixed to your scalp with medical adhesive or tape, the only
						things you have to do is wash, condition and comb it every day. You can exercise, swim, or do
						any normal activities you would if you still had your own hair.
					</p>
					<p>
						Here at Hair Replacements by George Gordiany, we understand what hair loss can mean to men and
						women of all ages and the impact that loss can have on your confidence and life. With 20 years
						of experience, we are recognized experts at dealing with all types of hair loss; male pattern
						baldness, medical-related hair loss, and temporary hair loss. No matter what the cause, the
						result is the same, changes in how you feel about yourself and how others look and feel about
						you.
					</p>
				</div>
			</BFixed>
		</div>
	);
};
