function TextInput({ id, label, type, placeholder, value, onChange }) {
  return (
    <>
      <label className="text-lg pl-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full mb-2 p-2 block"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default TextInput;
