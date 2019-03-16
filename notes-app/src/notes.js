import fs from 'fs';

export const getNotes = () => {
  return 'this is a fantastic string using ES6';
};

export const addNote = (title, body) => {
  const oldNotes = loadNotes();

  if (oldNotes.filter(note => note.title === title).length === 0) {
    saveNotes([...oldNotes, { title, body }]);
    console.log('new note added');
  } else {
    console.log(`note with title "${title}" already exists`);
  }
};

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync('notes.json');
    const json = buffer.toString();
    return JSON.parse(json);
  } catch (error) {
    return [];
  }
};

const saveNotes = notes => {
  try {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
  } catch (error) {
    console.log(error);
  }
};

export default { getNotes, addNote };
