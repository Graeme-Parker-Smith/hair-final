import React, {useState} from 'react';
import './StarPicker.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default () => {
  const [rating, setRating] = useState(0);
	return (
    <div>
    <FontAwesomeIcon onClick={() => setRating(1)} icon={faStar} size="3x" className="star-icon" style={{ color: rating > 0 ? 'yellow' : 'transparent', transition: "color 0s"}} />
    <FontAwesomeIcon onClick={() => setRating(2)} icon={faStar} size="3x" className="star-icon" style={{ color: rating > 1 ? 'yellow' : 'transparent', transition: "color 0s"}} />
    <FontAwesomeIcon onClick={() => setRating(3)} icon={faStar} size="3x" className="star-icon" style={{ color: rating > 2 ? 'yellow' : 'transparent', transition: "color 0s"}} />
    <FontAwesomeIcon onClick={() => setRating(4)} icon={faStar} size="3x" className="star-icon" style={{ color: rating > 3 ? 'yellow' : 'transparent', transition: "color 0s"}} />
    <FontAwesomeIcon onClick={() => setRating(5)} icon={faStar} size="3x" className="star-icon" style={{ color: rating > 4 ? 'yellow' : 'transparent', transition: "color 0s"}} />
  </div>
	);
};
