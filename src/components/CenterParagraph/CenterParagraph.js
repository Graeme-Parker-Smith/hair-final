import React, {useEffect} from 'react';
import './CenterParagraph.css';
import AOS from 'aos';
import "aos/dist/aos.css"

export default () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
			mirror: true,
			offset: 150
		});
		AOS.refresh();
	}, [])
	return (
		<div data-aos="fade-up" className="center-paragraph">
			<h2>Welcome to Gordiany’s Hair Salon</h2>
			<p>
				At Gordiany’s Hair Salon we offer a relaxing environment dedicated to personalized service with the idea
				that every client should look their individual best. We specialize in the finest dimensional foil
				highlights and custom colors using only Scruples and Redken. Learn more about our coloring services. We
				are very proud and excited to give our clients a rare hair-cutting technique that is different and hard
				to beat. Our stylists have had special training to cut with the rare inter-locking double shear
				technique that cuts and textures all in one step for the perfect haircut.
			</p>
			<p>
				We are a fully licensed hair salon that caters to men and women of all styles and ages. We pride
				ourselves in offering industry leading technology, great customer service, a caring attitude, and a
				gifted stylist. We have a private consultations and styling room to maintain your privacy in a discreet
				manner.
			</p>
		</div>
	);
};
