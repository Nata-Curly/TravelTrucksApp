import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/selectors";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CamperItem from "../CamperItem/CamperItem";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  console.log(campers);
  return (
    <ul>
      {campers.length > 0 ? (
        campers.map((camper) => <CamperItem key={camper.id} camper={camper} />)
      ) : (
        <ErrorMessage message={"Oops..."} />
      )}
    </ul>
  );
};

export default CampersList;
