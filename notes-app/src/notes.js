import fs from 'fs';
import chalk from 'chalk';

const filename = 'data/notes.json';

export const addNote = (title, body) => {
  const oldNotes = loadNotes();

  if (!oldNotes.find(note => note.title === title)) {
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

export const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse('Showing all available notes.'));
  notes.forEach(note => {
    console.log(note.title);
  });
};

export const readNote = title => {
  const note = loadNotes().find(note => note.title === title);

  if (note) {
    console.log(chalk.bold(title));
    console.log(note.body);
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

export default { addNote, listNotes, readNote, removeNote };
