import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/selectors";
import css from "./CamperFeatures.module.css";
import CamperFeaturesList from "../CamperFeaturesList/CamperFeaturesList";
import { useEffect, useMemo } from "react";
import BookingForm from "../BookingForm/BookingForm";

const CamperFeatures = () => {
  const camper = useSelector(selectCamper);
  const memorizedCamper = useMemo(() => camper || [], [camper]);

  useEffect(() => {
    window.scrollBy({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={css.wrapper}>
      <div className={css.featuresContainer}>
        <CamperFeaturesList camper={memorizedCamper} />
        <div>
          <div className={css.details}>
            <h3>Vehicle details</h3>
          </div>
          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <p>Form</p>
              <p>{memorizedCamper.form}</p>
            </li>
            <li className={css.detailsItem}>
              <p>Length</p>
              <p>{memorizedCamper.length}</p>
            </li>
            <li className={css.detailsItem}>
              <p>Width</p>
              <p>{memorizedCamper.width}</p>
            </li>
            <li className={css.detailsItem}>
              <p>Height</p>
              <p>{memorizedCamper.height}</p>
            </li>
            <li className={css.detailsItem}>
              <p>Tank</p>
              <p>{memorizedCamper.tank}</p>
            </li>
            <li className={css.detailsItem}>
              <p>Consumption</p>
              <p>{memorizedCamper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <BookingForm/>
    </div>
  );
};

export default CamperFeatures;
