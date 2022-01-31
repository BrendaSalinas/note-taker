const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

router.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../db/db.json'))
});

router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const note = req.body;
    note.id = uuid.v4();
    notes.push(note);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
});

module.exports = router;