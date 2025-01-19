
import css from "./CamperFeaturesList.module.css";
import sprite from "../../images/sprite.svg";

const CamperFeaturesList = ({ camper }) => {


  const features = Object.keys(camper).filter((key) => camper[key] === true);

  const iconMap = {
    AC: "wind",
    bathroom: "shower",
    kitchen: "cup-hot",
    TV: "tv",
    radio: "radio",
    refrigerator: "fridge",
    microwave: "microwave",
    gas: "gas-stove",
    water: "water",
  };

  return (
    <ul className={css.featuresList}>
      <li className={css.featuresItem}>
        <svg width="20" height="20">
          <use href={`${sprite}#transmission`} />
        </svg>
        <span>{camper.transmission}</span>
      </li>
      <li className={css.featuresItem}>
        <svg width="20" height="20">
          <use href={`${sprite}#engine`} />
        </svg>
        <span>{camper.engine}</span>
      </li>
      {features.map((feature) => (
        <li key={feature} className={css.featuresItem}>
          <svg width="20" height="20">
            <use href={`${sprite}#${iconMap[feature]}`} />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default CamperFeaturesList;
