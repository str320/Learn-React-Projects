# Notes App

A simple note-taking app built with React. This project demonstrates how to use React hooks like `useState` and `useId` to build a fully controlled form and display a list of user-generated notes with contextual styling.

## Features

- Add notes with:

  - Title (required)
  - Description (required)
  - Priority: High, Medium, Low
  - Category: Work, Personal, Ideas

- Notes are displayed with a colored border indicating priority:

  - Red for High
  - Orange for Medium
  - Green for Low

- Form resets after submission
- Basic validation to prevent empty submissions

## Technologies Used

- React
- JavaScript
- Vite
- Tailwind CSS (for styling)

## Project Structure

```
02.notes-app/
├── src/
│   ├── components/
│   │   └── NoteForm.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── index.html
├── package.json
└── vite.config.js
```

## Usage

1. Fill in the form with a note title and description.
2. Optionally select a priority and category.
3. Click "Add Note" to add it to the list.
4. Notes will appear below with a colored border based on priority.

## Future Improvements

- Add edit and delete functionality
- Store notes in local storage or connect to a backend
- Filter or sort notes by category or priority
- Add better form validation or error messages
