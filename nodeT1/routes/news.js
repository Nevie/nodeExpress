const readWriter = require('././../helpers/readWriteHelper');
let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    readWriter.readFromFile(`\\data\\news.json`,function (err, json) {
        if(err) {
            next(err);
        }
        res.send(json);
    });
});

router.get('/:id', function (req, res) {
    res.send('GET /news/:id');
});

router.post('/', function (req, res) {
    res.send('Got a POST request:');
});

router.put('/:id', function (req, res) {
    res.send('Got a PUT request at /news');
});


router.delete('/:id', function (req, res) {
    res.send('Got a DELETE request at /news')
});

module.exports = router;
