import "./Input.css";

function Input({ placeholder, style }) {
  return (
    <input placeholder={placeholder} className="input" style={style}></input>
  );
}

export default Input;
