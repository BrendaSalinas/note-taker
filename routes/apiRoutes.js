const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
});

router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    req.body.id = uuid.v4();
    notes.push(req.body.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
});

module.exports = router;