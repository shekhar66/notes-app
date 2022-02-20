const database = require('./db')

const addNote = (title,description) => {
    database.client.then( async client =>{
        const db = client.db("nodejs")
        // Ensure not to create duplicate entry
        const existingdata = await db.collection('notes').find({title}).toArray();
        if(!existingdata.length){
            const db = client.db("nodejs")
            db.collection("notes").insertOne({
                title,
                description
            });
            console.log("created...!!!!!!!")
        }
        else{
            console.log("Notes with provided title already exists...!!!")
        }
    }).catch(e=>console.log(e))
}

const updateNote =  (title,description) => {
    database.client.then( async (client) =>{
        const db = client.db("nodejs")
        // Get the Note using provided title
        const exisitingNote = await db.collection('notes').findOne({title});
        if(exisitingNote){
            const db = client.db("nodejs")
            db.collection("notes").updateOne({
                title
            },{
                $set:{
                    description
                }
            });
            console.log("Updated...!!!!!!!")
        }
        else{
            console.log("No Notes with provided title exists...!!!")
        }  
    }).catch(e=>console.log(e))
}

const deleteNote = (title) =>{
    database.client.then( async (client) =>{
        const db = client.db("nodejs")
        // Get the Note using provided title
        const exisitingNote = await db.collection('notes').findOne({title});
        if(exisitingNote){
            const db = client.db("nodejs")
            db.collection("notes").deleteOne({
                title
            });
            console.log("Deleted...!!!!!!!")
        }
        else{
            console.log("No Notes with provided title exists...!!!")
        }  
    }).catch(e=>console.log(e))
}

const listAll = ()=>{
    database.client.then( async (client) =>{
        const db = client.db("nodejs")
        const notes = await db.collection('notes').find().toArray();
        notes.forEach(note =>{
            console.log("Title:",note.title)
            console.log("Description:",note.description)
        })
    }).catch(e=>console.log(e))
}

const listNote = (title) =>{
    database.client.then( async (client) =>{
        const db = client.db("nodejs")
        // Get the Note using provided title
        const exisitingNote = await db.collection('notes').findOne({title});
        if(exisitingNote){
            console.log("Title:",exisitingNote.title)
            console.log("Description:",exisitingNote.description)
        }
        else{
            console.log("No Notes with provided title exists...!!!")
        } 
    }).catch(e=>console.log(e,"error"))
}

module.exports = {
    addNote,
    updateNote,
    deleteNote,
    listAll,
    listNote
}