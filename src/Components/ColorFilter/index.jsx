import "./style.css";

const ColorFilter = (props) => {
  return (
    <div className="colorFilter">
      <label>Color </label>

      {props.colors &&
        props.colors.map((color, index) => {
          return (
            <span
              key={index}
              style={color.isSelected ? { background: "grey" } : {}}
              className="selectedfilter"
              onClick={props.onClick.bind(null, {
                color: color.isSelected ? null : color.name,
              })}
            >
              <span
                style={{ background: color.name }}
                className="filterColorName"
              />
              <span>{color.name}</span>{" "}
            </span>
          );
        })}
    </div>
  );
};

export default ColorFilter;
