import React from 'react';
import './WhoWeAre.css';

export default () => {
	return (
		<div style={{color: 'white'}} className="screen-content">
			<h2>Welcome</h2>
			<p>
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
			<p>The good news is that you have found the right place.</p>
			<h1>
				<span>
					George{' '}
					<img
						alt="George"
						src={require('../../images/George-576x1024.jpg')}
						style={{ height: 356, width: 200, float: 'right' }}
					/>
				</span>
			</h1>
			<p>
				I am George Gordiany owner of the Gordiany’s Hair Salon in San Antonio, Texas. I have been a hairstylist
				and salon owner for 25 years and have been helping people reach their full potential with amazing hair
				styling results. I have developed a truly unique cutting method, an individual, unique skill by
				attending numerous seminars and studying with the best names in the business.
			</p>
			<div className="George">
				<p>
					<strong>His strengths are:</strong>
				</p>
				<p>{`>`} A passion for learning new techniques that will take his talent to another level</p>
				<p>{`>`} Three color dimensional highlighting</p>
				<p>{`>`} Understanding clients texture for the best possible cut and color</p>
				<p>{`>`} Will always listen to clients needs before he starts his design</p>
			</div>
			<p>Come in and experience the possibilities.</p>
			<p>
				<img
					alt="Owner Signature"
					src={require('../../images/Signature.gif')}
					style={{ width: '199px', height: '82px' }}
				/>
			</p>
			<h2>Larysa</h2>
			<div>
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
				<p>
					<strong>Her strengths are:</strong>
				</p>
				<p>{`>`} Specializing in the latest women’s and men’s cut designs.</p>
				<p>{`>`} Hair color and trent-setting highlight techniques.</p>
				<p>{`>`} Updo hair designs for your special days.</p>
				<p>{`>`} The rare ability to advise and consult the client in the total look</p>
			</div>
		</div>
	);
};
