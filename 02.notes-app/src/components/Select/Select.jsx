function Select({ id, label, name, value, onChange, options }) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor={id} className="block font-semibold">
          {label}
        </label>

        <select
          className="w-full p-2 border rounded-lg"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Select;
