import sprite from "../../images/sprite.svg";
import css from "./Camper.module.css";

const Camper = ({ camper }) => {
  if (!camper) {
    return;
  }

  const { name, price, rating, location, description, gallery, reviews } =
    camper;

  return (
    <div className={css.camperContainer}>
      <h2 className={css.camperName}>{name}</h2>
      <div className={css.camperInfo}>
        <div className={css.camperReviews}>
          <div className={css.camperRating}>
            <svg width="16" height="16">
              <use href={`${sprite}#star`} />
            </svg>
            {rating} ({reviews.length} Reviews)
          </div>
        </div>
        <p className={css.camperLocation}>
          <svg width="16" height="16">
            <use href={`${sprite}#map`} />
          </svg>{" "}
          {location}
        </p>
      </div>
      <p className={css.camperPrice}>€{price.toFixed(2)}</p>
      <ul className={css.camperImgList}>
        {gallery?.map((item, idx) => (
          <li key={idx}>
            <img className={css.camperImg} src={item.thumb} alt={name} />
          </li>
        ))}
      </ul>
      <p>{description}</p>
    </div>
  );
};

export default Camper;
