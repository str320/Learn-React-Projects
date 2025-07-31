function SelectDropdown({
  label,
  options,
  name,
  id,
  value,
  disabled,
  onChange,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} value={value} onChange={onChange}>
        <option value="" disabled={disabled}>
          Select your answer
        </option>
        {options.map((group) => (
          <optgroup label={group.label} key={group.label}>
            {group.items.map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </>
  );
}

export default SelectDropdown;
