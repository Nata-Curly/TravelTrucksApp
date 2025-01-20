import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/selectors";
import { locationFilter } from "../../redux/filtersSlice";
import sprite from "../../images/sprite.svg";
import css from "./LocationFilter.module.css";

const LocationFilter = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  

  const handleChange = (evt) => {
    dispatch(locationFilter(evt.target.value));
  };

  return (
    <div className={css.location}>
      <label htmlFor="location">Location</label>
      <input
        id="location"
        type="text"
        value={location}
        placeholder="City"
        onChange={handleChange}
      />
      <svg width="24" height="25">
        <use href={`${sprite}#map`} />
      </svg>
    </div>
  );
};

export default LocationFilter;
