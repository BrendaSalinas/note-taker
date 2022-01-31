const router = require('express').Router();

const readFiles = util.promisify(fs.readFile);
const writeFiles = util.promisify(fs.writeFile);

router.get('/notes', function(req, res) {
    readFiles('./db/db.json', "utf8").then(function(inputs) {
        note = [].concat(JSON.parse(inputs))
        res.json(note);
    });
});

router.post('/notes', function(req, res) {
    co
})

module.exports = router;