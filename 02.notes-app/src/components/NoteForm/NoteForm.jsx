import { useState, useId } from "react";
import TextInput from "../TextInput/TextInput";
import Select from "../Select/Select";

function NoteForm({ notes, setNotes }) {
  const titleId = useId();
  const priorityId = useId();
  const categoryId = useId();
  const descriptionId = useId();

  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    category: "",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleForm(e) {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title || !formData.description) return;

    const newNote = {
      id: Date.now(),
      ...formData,
    };

    setNotes([newNote, ...notes]);

    setFormData({
      title: "",
      priority: "",
      category: "",
      description: "",
    });
  }

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="text-sm bg-grey-100 w-full border border-grey-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:  border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form" : "Add new note ➕"}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            id={titleId}
            value={formData.title}
            name="title"
            placeholder="title"
            onChange={handleForm}
            label="Title"
          ></TextInput>

          <Select
            id={priorityId}
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleForm}
            options={[
              { value: "", label: "Select Priority" },
              { value: "High", label: "🔴 High" },
              { value: "Medium", label: "🟠 Medium" },
              { value: "Low", label: "🟢 Low" },
            ]}
          />

          <Select
            id={categoryId}
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleForm}
            options={[
              { value: "", label: "Choose Category" },
              { value: "work", label: "💻 Work" },
              { value: "personal", label: "🏝️ Personal" },
              { value: "ideas", label: "💡 Ideas" },
            ]}
          />

          <label htmlFor={descriptionId} className="block font-semibold">
            Description
          </label>
          <textarea
            className="w-full p-2 border rounded-lg"
            type="text"
            id={descriptionId}
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handleForm}
          ></textarea>
          <button
            className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600"
            type="submit"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
}

export default NoteForm;
