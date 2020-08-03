const fs = require("fs");
const path = require("path");

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}

// function findById(id, notes) {
//     const result = notes.filter((notes) => notes.id === id)[0];
//     return result;
// }

// function deleteNote(index, notesArray) {
//     if (index == 0) {
//         notesArray.shift();
//     } else { 
//         notesArray.splice(index, 1);
//     }

//     fs.writeFileSync(
//         path.join(__dirname, '../data/db.json;'),
//         JSON.stringify({ notes: notesArray }, null, 2)
//     );
// }

module.exports = { createNewNote };