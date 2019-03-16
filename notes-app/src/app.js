import yargs from 'yargs';
import notes from './notes';

yargs
  .version('1.0.0')
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
      }
    },
    handler({ title, body }) {
      notes.addNote(title, body);
    }
  })
  .command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler({ title }) {
      notes.removeNote(title);
    }
  })
  .command({
    command: 'list',
    describe: 'List all notes',
    handler() {
      notes.listNotes();
    }
  })
  .command({
    command: 'read',
    describe: 'Read a specific new note',
    handler() {
      console.log('reading a note');
    }
  });

yargs.parse();
