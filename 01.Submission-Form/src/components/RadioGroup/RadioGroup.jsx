function RadioGroup({ label, header, id, name, type, value, onChange }) {
  return (
    <>
      <fieldset className="inline">
        <legend>{header}</legend>
        <input
          type={type}
          name={name}
          value={value}
          id={id}
          onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
      </fieldset>
    </>
  );
}

export default RadioGroup;
