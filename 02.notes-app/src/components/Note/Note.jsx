function Note({ note, deleteNote }) {
  return (
    <>
      <article
        key={note.id}
        className="p-4 bg-white rounded-lg shadow-md border-lg mb-6"
        style={{
          borderLeft:
            note.priority === "High"
              ? "2px solid red"
              : note.priority === "Medium"
              ? "2px solid orange"
              : "2px solid green",
        }}
      >
        <h3 className="text-lg font-bold">{note.title}</h3>
        <p className="text-sm text-grey-600">
          <strong>Category:</strong>
          {note.category}
        </p>
        <p className="text-sm text-grey-600">
          <strong>Priority:</strong>
          {note.priority}
        </p>
        <p className="mt-2">{note.description}</p>
        <button
          className="mt-3 text-red-500 cursor-pointer transition hover: text-red-700"
          onClick={() => deleteNote(note.id)}
        >
          🗑️ Delete
        </button>
      </article>
    </>
  );
}

export default Note;
