import sprite from "../../images/sprite.svg";
import css from "./Stars";

const Stars = ({ rating }) => {
  const fullStars = Math.floor(rating); 
  const totalStars = 5; 

  return (
    <div className={css.stars}>
      {Array.from({ length: totalStars }, (_, idx) => (
        <svg
          key={idx}
          width="16"
          height="16"
          className={css.star}
          style={{ fill: idx < fullStars ? "var(--star)" : "var(--Badges)" }}
          aria-label={idx < fullStars ? "Full Star" : "Empty Star"}
        >
          <use href={`${sprite}#star`} />
        </svg>
      ))}
    </div>
  );
};

export default Stars;
