import fs from 'fs';
import chalk from 'chalk';

const filename = 'data/notes.json';

export const getNotes = () => {
  return 'this is a fantastic string using ES6';
};

export const addNote = (title, body) => {
  const oldNotes = loadNotes();

  if (oldNotes.filter(note => note.title === title).length === 0) {
    saveNotes([...oldNotes, { title, body }]);
    console.log(chalk.green.inverse(`New note with title "${title}" added.`));
  } else {
    console.log(chalk.red.inverse(`Note with title "${title}" already exists.`));
  }
};

export const removeNote = title => {
  const notes = loadNotes();
  const updatedNotes = notes.filter(note => note.title !== title);

  if (notes.length !== updatedNotes.length) {
    saveNotes(updatedNotes);
    console.log(chalk.green.inverse(`Note with title "${title}" removed.`));
  } else {
    console.log(chalk.red.inverse(`Note with title "${title}" was not found.`));
  }
};

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync(filename);
    const json = buffer.toString();
    return JSON.parse(json);
  } catch (error) {
    return [];
  }
};

const saveNotes = notes => {
  try {
    fs.writeFileSync(filename, JSON.stringify(notes));
  } catch (error) {
    console.log(error);
  }
};

export default { getNotes, addNote, removeNote };
