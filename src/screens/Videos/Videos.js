import React from 'react';
import './Videos.css';

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
			<iframe
				width="350"
				height="195"
				src="https://www.youtube.com/embed/lfnWVVNTVQY"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				title="Youtube player"
			></iframe>
			<h1>Hair Design</h1>
			<div className="video-container">
				<iframe
					width="350"
					height="195"
					src="https://www.youtube.com/embed/PdUxudCLxGE"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
					title="Youtube player"
					allowfullscreen
				></iframe>
				<h4 className="video-label">Long Layer Razor Cut</h4>
			</div>
			<div className="video-container">
				<iframe
					width="350"
					height="195"
					src="https://www.youtube.com/embed/Iea8HfcVgiA"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
					title="Youtube player"
					allowfullscreen
				></iframe>
				<h4 className="video-label">Hair Design Using Vern Shears Short</h4>
			</div>
			<div className="video-container">
				<iframe
					width="350"
					height="195"
					src="https://www.youtube.com/embed/b58c67vnoxQ"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
					title="Youtube player"
					allowfullscreen
				></iframe>
				<h4 className="video-label">Razor Cut</h4>
			</div>
			<h1>Barber Services</h1>

			<div className="video-container">
				<iframe
					width="350"
					height="195"
					src="https://www.youtube.com/embed/3WRMgPwmOoo"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
					title="Youtube player"
					allowfullscreen
				></iframe>
				<h4 className="video-label">Razor Cut</h4>
			</div>
			<h1>Highlights</h1>

			<div className="video-container">
				<iframe
					width="350"
					height="195"
					src="https://www.youtube.com/embed/1euXAc3faUM"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
					title="Youtube player"
					allowfullscreen
				></iframe>
				<h4 className="video-label">Razor Cut</h4>
			</div>

			<div className="video-container">
				<h4 className="video-label">Razor Cut</h4>
			</div>

			<div className="video-container">
				<h4 className="video-label">Razor Cut</h4>
			</div>

			<div className="video-container">
				<h4 className="video-label">Razor Cut</h4>
			</div>

			<p dir="lr tb">
				<h3>Long</h3>
				<h3>Layer</h3>
				<h3>Cut</h3>
			</p>
			<iframe
				width="350"
				height="195"
				src="https://www.youtube.com/embed/u9RGCOgkrmA"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				title="Youtube player"
				allowfullscreen
			></iframe>
			<iframe
				width="350"
				height="195"
				src="https://www.youtube.com/embed/9gmprJgMeOg"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				title="Youtube player"
				allowfullscreen
			></iframe>
			<h1>Color</h1>
			<h1>Hair Replacement</h1>
			<iframe
				width="350"
				height="195"
				src="https://www.youtube.com/embed/qjcelxdumEk"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				title="Youtube player"
				allowfullscreen
			></iframe>
			<iframe
				width="350"
				height="195"
				src="https://www.youtube.com/embed/jdi-xzPUdZ0"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				title="Youtube player"
				allowfullscreen
			></iframe>
			<iframe
				width="350"
				height="195"
				src="https://www.youtube.com/embed/eSlwb7RhMR0"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				title="Youtube player"
				allowfullscreen
			></iframe>
			<iframe
				width="350"
				height="195"
				src="https://www.youtube.com/embed/7BE87VNfOh0"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				title="Youtube player"
				allowfullscreen
			></iframe>
			<iframe
				width="350"
				height="195"
				src="https://www.youtube.com/embed/IHsPB9blQXw"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				title="Youtube player"
				allowfullscreen
			></iframe>
			<iframe
				width="350"
				height="195"
				src="https://www.youtube.com/embed/Bya26_LXPlQ"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				title="Youtube player"
				allowfullscreen
			></iframe>
		</div>
	);
};
