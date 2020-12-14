import "./style.css";

const MonthFilter = (props) => {
  return (
    <div className="monthFilter">
      <label>Month </label>
      {props.months &&
        props.months.map((month, index) => {
          return (
            <span
              key={index}
              style={month.isSelected ? { background: "grey" } : {}}
              onClick={props.onClick.bind(null, {
                month: month.isSelected ? null : month.name,
              })}
            >
              <span className="monthName" />
              <span>{month.name}</span>
            </span>
          );
        })}
    </div>
  );
};
export default MonthFilter;
