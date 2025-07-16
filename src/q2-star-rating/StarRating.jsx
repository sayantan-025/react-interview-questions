import { useState } from "react";
import "./StarRating.css";

const StarRating = ({ starCount = 5 }) => {
  const [starValue, setStarValue] = useState();
  const [hoverValue, setHoverValue] = useState(0);
  return (
    <>
      <div className="star-rating-container">
        <h3 className="star-rating-heading">Star Rating</h3>
        <div className="star-rating">
          {new Array(starCount).fill(0).map((value, index) => (
            <span
              key={index}
              className={
                (hoverValue === 0 && index < starValue) || index < hoverValue
                  ? "star gold"
                  : "star"
              }
              onClick={() => setStarValue(index + 1)}
              onMouseEnter={() => setHoverValue(index + 1)}
              onMouseLeave={() => setHoverValue(0)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default StarRating;
