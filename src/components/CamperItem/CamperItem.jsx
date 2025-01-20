import { Link, useLocation } from "react-router-dom";
import css from "./CamperItem.module.css";
import CamperFeaturesList from "../CamperFeaturesList/CamperFeaturesList";
import sprite from "../../images/sprite.svg";
import { useEffect, useState } from "react";


const CamperItem = ({ camper }) => {
  const camperLocation = useLocation();
  const { id, name, price, rating, location, description, gallery, reviews } =
    camper;
  
   const [isFavorite, setIsFavorite] = useState(false);

   useEffect(() => {
     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
     const camperExists = favorites.some((fav) => fav.id === id); // Сравниваем по id
     setIsFavorite(camperExists);
   }, [id]);

   const toggleFavorite = () => {
     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
     const camperExists = favorites.some((fav) => fav.id === id);

     if (camperExists) {
       
       const updatedFavorites = favorites.filter((fav) => fav.id !== id);
       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
       setIsFavorite(false);
     } else {
       favorites.push(camper);
       localStorage.setItem("favorites", JSON.stringify(favorites));
       setIsFavorite(true);
     }
   };

  return (
    <li id={id} className={css.camperItem}>
      <img className={css.camperImg} src={gallery[0].thumb} alt={name} />
      <div className={css.camperContainer}>
        <div className={css.camperTitle}>
          <h2 className={css.camperName}>{name}</h2>
          <p className={css.camperPrice}>
            €{price.toFixed(2)}
            <svg width="24" height="25"
            className={isFavorite ? css.favorite : css.notFavorite} 
              onClick={toggleFavorite} >
              <use href={`${sprite}#hart`} />
            </svg>
          </p>
        </div>
        <div className={css.camperDescription}>
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
