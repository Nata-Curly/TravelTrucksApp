import { Link, useLocation } from "react-router-dom";
import css from "./CamperItem.module.css";
import CamperFeaturesList from "../CamperFeaturesList/CamperFeaturesList";

const CamperItem = ({ camper }) => {
  const camperLocation = useLocation();
  const { id, name, price, rating, location, description, gallery, reviews } =
    camper;

  return (
    <li id={id} className={css.camperItem}>
      <img className={css.camperImg} src={gallery[0].thumb} alt={name} />
      <div className={css.camperInfo}>
        <div className={css.camperTitle}>
          <h2>{name}</h2>
          <p>€{price.toFixed(2)}</p>
        </div>
        <div className={css.camperDescription}>
          <p>
            {rating}({reviews.length} Reviews)
            <span>{location}</span>
          </p>
          <p className={css.camperDescriptionText}>{description}</p>
          <CamperFeaturesList camper={camper} />
        </div>
        <Link className="redBtn" to={`/catalog/${id}`} state={camperLocation}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperItem;
