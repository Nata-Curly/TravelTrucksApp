import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/selectors";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CamperItem from "../CamperItem/CamperItem";
import css from './CampersList.module.css'

const CampersList = () => {
  const campers = useSelector(selectCampers);
 
  return (
    <ul className={css.campersList}>
      {campers?.map((camper) => (
        <CamperItem key={camper.id} camper={camper} />
      ))}
      {/* {campers.length > 0 ? (
        campers.map((camper) => <CamperItem key={camper.id} camper={camper} />)
      ) : (
        <ErrorMessage message={"Oops..."} />
      )} */}
    </ul>
  );
};

export default CampersList;
