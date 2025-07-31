function FileUpload({ label, id, type, name, value, onChange }) {
  return (
    <>
      <label className="text-lg pl-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full mb-2 p-2 block"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default FileUpload;
