import "./Button.css";

function Button({ style, children }) {
  return (
    <button className="btn" style={style}>
      {children}
    </button>
  );
}

export default Button;
