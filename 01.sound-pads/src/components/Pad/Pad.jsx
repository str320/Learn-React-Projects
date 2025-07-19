import "./Pad.css";

function Pad({ color, on, onClick }) {
  return (
    <button
      className={`pad ${on ? "on" : ""}`}
      style={{ background: color }}
      onClick={onClick}
    ></button>
  );
}

export default Pad;
