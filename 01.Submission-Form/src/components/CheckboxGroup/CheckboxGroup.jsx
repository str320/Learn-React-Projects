function CheckboxGroup({ header, id, type, name, value, onChange, label }) {
  return (
    <>
      <fieldset className="inline">
        <legend>{header}</legend>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
      </fieldset>
    </>
  );
}

export default CheckboxGroup;
