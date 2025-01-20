import { useSelector } from "react-redux";
import { useState } from "react";
import {
  selectCampers,
  selectError,
  selectFilters,
  selectIsLoading,
} from "../../redux/selectors";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const { appliedFilters } = useSelector(selectFilters);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [visibleCampers, setVisibleCampers] = useState(4);

const filteredCampers = appliedFilters
  ? campers.filter((camper) => {
      const matchesLocation = appliedFilters.location
        ? camper.location
            ?.toLowerCase()
            .includes(appliedFilters.location.toLowerCase())
        : true;

      const matchesEquipment = appliedFilters.equipment.length
        ? appliedFilters.equipment.every((item) => {
            return camper.equipment?.includes(item.toLowerCase());
          })
        : true;

      const matchesVehicleType = appliedFilters.vehicleType
        ? camper.form === appliedFilters.vehicleType
        : true;

      return matchesLocation && matchesEquipment && matchesVehicleType;
    })
  : campers;


  const handleLoadMore = () => {
    setVisibleCampers((prev) => prev + 4);
  };

  const isAllLoaded = visibleCampers >= filteredCampers.length;

  return (
    <div className={css.container}>
      <ul className={css.campersList}>
        {filteredCampers?.slice(0, visibleCampers).map((camper) => (
          <CamperItem key={camper.id} camper={camper} />
        ))}
      </ul>
      {isLoading && !error && <Loader />}
      {!isAllLoaded && (
        <button className={css.loadMore} type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
      {filteredCampers.length === 0 && (
        <p className={css.noResults}>No campers found matching the filters.</p>
      )}
    </div>
  );
};

export default CampersList;