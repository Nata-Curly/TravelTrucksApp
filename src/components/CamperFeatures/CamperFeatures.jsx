import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/selectors";
import css from "./CamperFeatures.module.css";
import CamperFeaturesList from "../CamperFeaturesList/CamperFeaturesList";
import { useEffect } from "react";

const CamperFeatures = () => {
  const camper = useSelector(selectCamper);

  useEffect(() => {
    
      window.scrollBy({
        top: 600,
        left: 0,
        behavior: "smooth",
      });
    
  }, []);

  return (
    <div className={css.featuresContainer}>
      <CamperFeaturesList camper={camper} />
      <div>
        <div className={css.details}>
          <h3>Vehicle details</h3>
        </div>
        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <p>Form</p>
            <p>{camper.form}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Length</p>
            <p>{camper.length}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Width</p>
            <p>{camper.width}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Height</p>
            <p>{camper.height}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Tank</p>
            <p>{camper.tank}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CamperFeatures;
