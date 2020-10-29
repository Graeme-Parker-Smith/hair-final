import React, { useEffect } from 'react';
import './WhoWeAre.css';
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
		<div style={{ color: 'black', backgroundColor: 'white'  }} className="screen-content">
			<h1>Who We Are</h1>
			{/* <p>
				Gordiany’s Hair Salon specializes in hair styling for both men and women, design, cutting, coloring,
				highlighting, and hair replacement systems. Our Salon continues to research and implement the latest
				styles, products and techniques available. We offer the finest custom, personalized service located in
				the secluded Los Patios in San Antonio, Texas.
			</p>
			<p>
				Our Salon provides a comfortable, private environment and is conviently located. We have been providing
				outstanding hair styles for both men and women for over 25 years and celebrate 20 years of personal hair
				replacement service. The moment you step inside our studio, you will sense our passion for our craft and
				our devotion to our clients. We go to great lengths to ensure that your time with us is professional and
				rewarding in every way.
			</p>
			<p>
				What you will find here, that is so different from anywhere else, is passion for the business, caring
				for each our clients like friends, and complete privacy and confidentiality. We am a true perfectionists
				and take great pride in what we do. We realize each person’s need is unique, and requires a personalized
				solution. Our ultimate goal is to make you look and feel terrific.
			</p>
			<p>
				We offer an entire range of services designed to meet your budget, and provide you with flexible
				solutions that will exceed all of your expectations. Having our clients’ look and feel their best is
				what drives us to offer cutting edge and superior service.
			</p>
			<p>
				So, if you are considering having your hair designed, colored, or simply cut, or you are dissatisfied
				with the poor results of your current salon, finding the right place can be a daunting experience.
			</p>
			<p>The good news is that you have found the right place.</p> */}
			<h1 data-aos="fade-left">
				<span>
					George{' '}
					<img
						alt="George"
						src={require('../../images/George-576x1024.jpg')}
						style={{ height: 356, width: 200, float: 'right' }}
					/>
				</span>
			</h1>
			<p data-aos="fade-right">
				I am George Gordiany owner of the Gordiany’s Hair Salon in San Antonio, Texas. I have been a hairstylist
				and salon owner for 25 years and have been helping people reach their full potential with amazing hair
				styling results. I have developed a truly unique cutting method, an individual, unique skill by
				attending numerous seminars and studying with the best names in the business.
			</p>
			<div  className="George">
				<p  data-aos="fade-up">
					<strong>His strengths are:</strong>
				</p>
				<p data-aos="fade-up">
					{`>`} A passion for learning new techniques that will take his talent to another level
				</p>
				<p data-aos="fade-up">{`>`} Three color dimensional highlighting</p>
				<p data-aos="fade-up">{`>`} Understanding clients texture for the best possible cut and color</p>
				<p data-aos="fade-up">{`>`} Will always listen to clients needs before he starts his design</p>
			</div>
			<p data-aos="fade-up">Come in and experience the possibilities.</p>
			<p  data-aos="fade-up">
				<img
					alt="Owner Signature"
					src={require('../../images/Signature.gif')}
					style={{ width: '199px', height: '82px' }}
				/>
			</p>
			<h1 data-aos="fade-left" style={{ textAlign: 'right', marginRight: 40 }}>
				Larysa
			</h1>
			<div data-aos="fade-right">
				<img
					alt="Larysa"
					src={require('../../images/Laurisa-NEW-225x300.jpg')}
					style={{ width: '185px', height: '247px', float: 'left', marginTop: 0, marginLeft: 0 }}
				/>
				<p>
					Larysa has been a devoted and creative stylist for over ten years. She is an international stylist
					that has studied and worked with fashion and hair trends in Europe and in the United States.
				</p>
			</div>
			<div className="Larysa">
				<p data-aos="fade-up">
					<strong>Her strengths are:</strong>
				</p>
				<p data-aos="fade-up">{`>`} Specializing in the latest women’s and men’s cut designs.</p>
				<p data-aos="fade-up">{`>`} Hair color and trent-setting highlight techniques.</p>
				<p data-aos="fade-up">{`>`} Updo hair designs for your special days.</p>
				<p data-aos="fade-up">{`>`} The rare ability to advise and consult the client in the total look</p>
			</div>
		</div>
	);
};
