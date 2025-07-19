function TextInput({ id, value, name, placeholder, onChange, label }) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor={id} className="block font-semibold">
          {label}
        </label>
        <input
          className="w-full p-2 border rounded-lg"
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          id={id}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default TextInput;
