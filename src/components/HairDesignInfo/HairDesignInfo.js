import React, { useEffect } from 'react';
import './HairDesignInfo.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
		<div>
			<div id="hair-design">
				<div>
					<img
						data-aos="fade-left"
						alt="vern-shears"
						id="vern-shears"
						src={require('../../images/vernsheers.jpg')}
					/>
					{/* <div style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}>
						<img
							alt="curly hair drawing"
							src={require('../../images/stella-216x300.png')}
							style={{ height: 66, width: 44 }}
						/>
						<span style={{ fontSize: 34, color: '#af3434 ', marginLeft: '0px' }}>Hair Design</span>
					</div> */}

					<div className="our-method">
						{/* <img
							alt="red haired woman"
							id="red-haired-woman"
							src={require('../../images/red-head_253x300.jpg')}
						/> */}

						<p data-aos="fade-right">
							<i>
								“I don’t cut hair, I sculpt it with Vern Shears. These interlocking shears are truly one
								of a kind. I will never cut with anything else.” -- George Gordiany, Owner
							</i>
						</p>
						{/* <img
							alt="no layer texture cut"
							src={require('../../images/no-layer-texture-cut.png')}
							style={{ float: 'left', height: 'auto', width: '50%',  margin: 10 }}
						/> */}
						<p data-aos="fade-left">The shears allow me to:</p>
						<ul>
							<li data-aos="fade-up">Create exquisite effects with no tool marks</li>
							<li data-aos="fade-up">Multi-functional, complete cutting and texturizing in one single action</li>
							<li data-aos="fade-up">Give clients softer cut and perfect blending</li>
							<li data-aos="fade-up">Design on any texture hair and any thickness</li>
						</ul>
						<ul style={{marginLeft: 0, marginRight: 20}}>
							<div style={{display: 'flex', width: '100%', margin: 20, justifyContent: 'space-between'}}>
								<p data-aos-delay="0" data-aos="fade-right">Men’s Hair Design </p>
								<p data-aos-delay="0" data-aos="fade-left">– Starting at $27.00</p>
							</div>
							<div style={{display: 'flex', width: '100%', margin: 20, justifyContent: 'space-between'}}>
								<p data-aos-delay="200" data-aos="fade-right">Women's Hair Design </p>
								<p data-aos-delay="200" data-aos="fade-left"> - Starting at $48.00</p>
							</div>
							<div style={{display: 'flex', width: '100%', margin: 20, justifyContent: 'space-between'}}>
								<p data-aos-delay="400" data-aos="fade-right">Texture Perming </p>
								<p data-aos-delay="400" data-aos="fade-left"> – Starting at $95.00</p>
							</div>
							<div style={{display: 'flex', width: '100%', margin: 20, justifyContent: 'space-between'}}>
								<p data-aos-delay="600" data-aos="fade-right">Updo Special Occasion </p>
								<p data-aos-delay="600" data-aos="fade-left"> – Starting at $45.00</p>
							</div>
							<li data-aos-delay="900" data-aos="fade-up">*Long hair extra</li>
						</ul>
						{/* <p style={{textAlign: 'center'}}>
							<img alt="vern-shears" id="vern-shears" src={require('../../images/vernsheers.jpg')} />
						</p> */}
					</div>
				</div>
				<div className="vern-container"></div>
			</div>
		</div>
	);
};
