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

						<p>
							<i>
								“I don’t cut hair, I sculpt it with Vern Shears. These interlocking shears are truly one
								of a kind. I will never cut with anything else.” -- George Gordiany, Owner
							</i>
						</p>
						<span data-aos="fade-left">The shears allow me to:</span>
						<ul>
							<li>Create exquisite effects with no tool marks</li>
							<li>Multi-functional, complete cutting and texturizing in one single action</li>
							<li>Give clients softer cut and perfect blending</li>
							<li>Design on any texture hair and any thickness</li>
						</ul>
						<ul>
							<div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
								<p data-aos="fade-right">Men’s Hair Design </p>
								<p data-aos="fade-left">– Starting at $27.00</p>
							</div>
							<li>Women's Hair Design -- Starting at $48.00</li>
							<li>Texture Perming – Starting at $95.00</li>
							<li>Updo Special Occasion – Starting at $45.00</li>
							<li>*Long hair extra</li>
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
