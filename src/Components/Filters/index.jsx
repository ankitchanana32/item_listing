import ColorFilter from "../ColorFilter";
import MonthFilter from "../MonthFilter";
import "./style.css";
const Filters = (props) => {
  const { filters = {}, getFilteredData } = props;
  return (
    <div className="filter">
      <label>Filters </label>
      <ColorFilter colors={filters.colors} onClick={getFilteredData} />
      <MonthFilter months={filters.months} onClick={getFilteredData} />
    </div>
  );
};

export default Filters;
