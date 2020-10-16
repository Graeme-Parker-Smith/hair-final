import React from 'react';
import './Videos.css';
import VideoBox from '../../components/VideoBox/VideoBox';
import { hairDesignData, hairReplacementData, highlightsData } from './VideoURLS';

export default () => {
	return (
		<div id="videos-container" className="screen-content">
			<div className="videos-header">
				<img id="film-roll" alt="film roll" src={require('../../images/Video-Library-300x300.jpg')} />
				<h1>Videos</h1>
				<p>
					Here are some of our videos to tell you more about Gordiany’s Hair Salon experience. While we’ve
					tried to explain our services on this website, we know that sometimes a video brings home the
					message better. So, we assembled these for you to watch and hope they give you a better flavor of
					what we are all about.
				</p>
			</div>

			<h1>General</h1>
			<VideoBox src="https://www.youtube.com/embed/lfnWVVNTVQY" />

			<h1>Hair Design</h1>
			<div className="video-row">
				{hairDesignData.map((v) => (
					<VideoBox src={v.url} label={v.label} />
				))}
			</div>

			<h1>Barber Services</h1>
			<VideoBox src="https://www.youtube.com/embed/3WRMgPwmOoo" label="Best Barber Stylist in San Antonio" />

			<h1>Highlights</h1>
			<div className="video-row">
				{highlightsData.map((v) => (
					<VideoBox src={v.url} label={v.label} />
				))}
			</div>

			<h1>Hair Replacement</h1>
			<div className="video-row">
				{hairReplacementData.map((v) => (
					<VideoBox src={v.url} label={v.label} />
				))}
			</div>
		</div>
	);
};
