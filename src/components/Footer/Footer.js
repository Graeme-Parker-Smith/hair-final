import React from 'react';
import './Footer.css';

export default () => {
	// const [isSticky, setSticky] = useState(false);
	// const handleScroll = () => {
	// 	console.log(document.body.scrollTop);
	// 	setSticky(window.pageYOffset > 20);
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll', () => handleScroll);
	// 	};
	// }, []);
	return (
		<div>
			<footer style={{ height: 200, backgroundColor: 'black' }} />
		</div>
	);
};
