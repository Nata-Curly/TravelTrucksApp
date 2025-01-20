import { useDispatch, useSelector } from "react-redux";
import { selectEquipment } from "../../redux/selectors";
import sprite from "../../images/sprite.svg";
import css from "./EquipmentFilter.module.css";
import { equipmentFilter } from "../../redux/filtersSlice";

const iconMap = {
  ac: "wind",
  bathroom: "shower",
  kitchen: "cup-hot",
  tv: "tv",
  radio: "radio",
  refrigerator: "fridge",
  microwave: "microwave",
  gas: "gas-stove",
  water: "water",
  automatic: "transmission",
};

const options = [
  "Bathroom",
  "TV",
  "Kitchen",
  "Automatic",
  "AC",
  "Water",
  "Gas",
  "Microwave",
  "Refrigerator",
  "Radio",
];

const EquipmentFilter = () => {
  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipment);

  const handleChange = (evt) => {
    const value = evt.target.value;
     dispatch(equipmentFilter(value));
  };

  return (
    <div className={css.filterContainer}>
      <div className={css.titleWrapper}>
        <h3 className={css.title}>Vehicle equipment</h3>
      </div>
      <div className={css.options}>
        {options.map((item) => (
          <label
            key={item}
            className={`${css.option} ${
              equipment.includes(item) ? css.active : ""
            }`}
          >
            <input
              type="checkbox"
              value={item}
              checked={equipment.includes(item)}
              onChange={handleChange}
              className={css.input}
            />
            <svg className={css.icon} width="24" height="24">
              <use href={`${sprite}#${iconMap[item.toLowerCase()]}`} />
            </svg>
            <span className={css.text}>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default EquipmentFilter;