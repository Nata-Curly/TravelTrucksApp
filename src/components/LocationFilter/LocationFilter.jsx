import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/selectors";
import { locationFilter } from "../../redux/filtersSlice";

const LocationFilter = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  const handleChange = (evt) => {
    dispatch(locationFilter(evt.target.value));
  };

  return (
    <div>
      <label htmlFor="location">
        Location{" "}
        <input
          id="location"
          type="text"
          value={location}
          placeholder="City"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default LocationFilter;
