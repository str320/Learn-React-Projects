import Note from "../Note/Note";

function NoteList({ notes, deleteNote }) {
  return (
    <>
      {notes.map((note) => (
        <Note note={note} deleteNote={deleteNote} />
      ))}
    </>
  );
}

export default NoteList;
