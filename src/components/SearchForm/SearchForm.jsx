import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import css from './SearchForm.module.css'


import { useDispatch } from "react-redux";
import { applyFilters } from "../../redux/filtersSlice";

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(applyFilters()); 
  };

  return (
    <aside className={css.aside}>
      <form className={css.form} onSubmit={handleSubmit}>
        <LocationFilter />
        <h3 className={css.filters}>Filters</h3>
        <EquipmentFilter />
        <VehicleTypeFilter />
        <button className="redBtn" type="submit">
          Search
        </button>
      </form>
    </aside>
  );
};

export default SearchForm;
