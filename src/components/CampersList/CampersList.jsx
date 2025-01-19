import { useSelector } from "react-redux";
import { useState } from "react";
import { selectCampers } from "../../redux/selectors";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const [visibleCampers, setVisibleCampers] = useState(4);

  const handleLoadMore = () => {
    setVisibleCampers((prev) => prev + 4);
  };

  const isAllLoaded = visibleCampers >= campers.length;

  return (
    <div className={css.container}>
      <ul className={css.campersList}>
        {campers?.slice(0, visibleCampers).map((camper) => (
          <CamperItem key={camper.id} camper={camper} />
        ))}
      </ul>
      {!isAllLoaded && (
        <button className={css.loadMore} type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CampersList;
