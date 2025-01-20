import { useDispatch, useSelector } from "react-redux";
import { selectVehicleType } from "../../redux/selectors";
import sprite from "../../images/sprite.svg";
import css from "./VehicleTypeFilter.module.css";
import { vehicleTypeFilter } from "../../redux/filtersSlice";

const iconMap = {
  Alcove: "grid-3x3", 
  "Fully Integrated": "grid",
  Van: "grid-1x2",
};

const options = ["Alcove", "Fully Integrated", "Van"];

const VehicleTypeFilter = () => {
  const dispatch = useDispatch();
  const vehicleType = useSelector(selectVehicleType);

  const handleChange = (evt) => {
    dispatch(vehicleTypeFilter(evt.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <div className={css.titleWrapper}>
        <h3 className={css.title}>Vehicle type</h3>
      </div>
      <hr className={css.underline} />
      <div className={css.options}>
        {options.map((item) => (
          <label
            key={item}
            className={`${css.option} ${
              vehicleType === item ? css.active : ""
            }`}
          >
            <input
              type="radio"
              name="vehicleType"
              value={item}
              checked={vehicleType === item}
              onChange={handleChange}
              className={css.input}
            />
            <svg className={css.icon} width="24" height="24">
              <use href={`${sprite}#${iconMap[item]}`} />
            </svg>
            <span className={css.text}>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default VehicleTypeFilter;
