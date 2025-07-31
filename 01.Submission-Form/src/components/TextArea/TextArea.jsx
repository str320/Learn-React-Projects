function TextArea({ label, id, name, value, placeholder, onChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        name={name}
        value={value}
        id={id}
        cols="30"
        rows="10"
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </>
  );
}

export default TextArea;
