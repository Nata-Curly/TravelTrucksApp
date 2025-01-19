import { useDispatch, useSelector } from "react-redux";
import { selectEquipment } from "../../redux/selectors";

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
    dispatch(selectEquipment(evt.target.value));
  };

  return (
    <div>
      <label>Vehicle equipment</label>
      {options.map((item) => (
        <label key={item}>
          <input
            type="checkbox"
            value={item}
            checked={equipment.includes(item)}
            onChange={handleChange}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default EquipmentFilter;
