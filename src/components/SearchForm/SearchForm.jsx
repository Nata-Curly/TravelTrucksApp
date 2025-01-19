import { useSelector } from "react-redux"
import { selectFilters } from "../../redux/selectors"
import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";

const SearchForm = () => {
  const filters = useSelector(selectFilters);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('filters:', filters)
  }
  return (
    <div>
      <aside>
        <form onSubmit={handleSubmit}>
          <LocationFilter />
          <h3>Filters</h3>
          <EquipmentFilter />
          <VehicleTypeFilter />
          <button type="submit">Search</button>
        </form>
      </aside>
    </div>
  );
}

export default SearchForm