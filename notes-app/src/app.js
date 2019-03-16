import yargs from 'yargs';

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
    handler: argv => {
      console.log(`Title: ${argv.title}`);
      console.log(`Body: ${argv.body}`);
    }
  })
  .command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: () => console.log('removing a note')
  })
  .command({
    command: 'list',
    describe: 'List all notes',
    handler: () => console.log('list of all notes')
  })
  .command({
    command: 'read',
    describe: 'Read a specific new note',
    handler: () => console.log('reading a note')
  });

yargs.parse();
