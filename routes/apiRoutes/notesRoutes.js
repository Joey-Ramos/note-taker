const router = require('express').Router();

const { notes } = require("../../data/db");

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;