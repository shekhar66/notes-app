const yarg = require('yargs');
const notes = require('./notes')

// Customize yargs version
yarg.version("1.1.0");


yarg.command({
    command:"add",
    describe:"Add notes using title and description",
    builder:{
        title:{
            type:"string",
            demandOption:true,
        },
        description:{
            type:"string",
            demandOption:true,
        }
    },
    handler:function(argv)
    {
        notes.addNote(argv.title,argv.description)
    }
});

yarg.command({
    command:"update",
    describe:"Update notes using title",
    builder:{
        title:{
            type:"string",
            demandOption:true,
        },
        description:{
            type:"string",
            demandOption:true,
        }
    },
    handler:function(argv)
    {
        notes.updateNote(argv.title,argv.description)
    }
});

yarg.command({
    command:"delete",
    describe:"Delete notes using title",
    builder:{
        title:{
            type:"string",
            demandOption:true,
        }
    },
    handler:function(argv)
    {
        notes.deleteNote(argv.title)
    }
});

yarg.command({
    command:"listAll",
    describe:"List all notes",
    handler:function()
    {
        notes.listAll()
    }
});

yarg.command({
    command:"show",
    describe:"Show notes using title",
    builder:{
        title:{
            type:"string",
            demandOption:true,
        }
    },
    handler:function(argv)
    {
        notes.listNote(argv.title)
    }
});

yarg.parse();
