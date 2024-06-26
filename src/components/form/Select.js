import "./Select.css";

function Select({ children, defaultValue }) {
  return (
    <select value={defaultValue} className="select">
      {children}
    </select>
  );
}

export default Select;
