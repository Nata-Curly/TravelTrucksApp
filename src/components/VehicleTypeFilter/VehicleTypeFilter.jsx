import { useDispatch, useSelector } from "react-redux";
import { selectVehicleType } from "../../redux/selectors";

const options = ["Alcove", "Fully Integrated", "Van"];

const VehicleTypeFilter = () => {
  const dispatch = useDispatch();
  const vehicleType = useSelector(selectVehicleType);
  const handleChange = (evt) => {
    dispatch(selectVehicleType(evt.target.value));
  };

  return (
    <div>
      <label>Vehicle type</label>
      {options.map((item) => (
        <label key={item}>
          <input
            type="radio"
            name="vehicleType"
            value={item}
            checked={vehicleType === item}
            onChange={handleChange}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default VehicleTypeFilter;
