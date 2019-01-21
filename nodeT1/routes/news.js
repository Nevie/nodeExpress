const readWriter = require('././../helpers/readWriteHelper');
const News = require('././../models/newsModel');
let express = require('express');
let router = express.Router();

const newsList = new News();

router.get('/', function (req, res, next) {
    readWriter.readFromFile( function (err, json) {
        if (err) {
            next(err);
        }else{
            newsList.setAll(json);
            res.send(json)
        }
    });
});

router.get('/:id', function (req, res, next) {
    try {
        let find = newsList.findById(req.params.id);
        res.send(find);
    }
    catch (err) {
        next(err);
    }
});

router.post('/', function (req, res, next) {
   let news = {
        author: req.query.author,
        title: req.query.title,
        id: req.query.id
    };
    try {
        newsList.add(news);
        res.send(newsList);
        readWriter.writeToFile(JSON.stringify(newsList));
    }
    catch (err) {
        next(err);
    }
});

router.put('/:id', function (req, res, next) {
    let news = {
        author: req.query.author,
        title: req.query.title,
        id: req.query.id
    };

    try {
        newsList.updateById(req.params.id, news);
        res.send(newsList);
        readWriter.writeToFile(JSON.stringify(newsList));
    }
    catch (err) {
        next(err);
    }

});

router.delete('/:id', function (req, res, next) {
    try {
        newsList.delete(req.params.id);
        res.send(newsList);
        readWriter.writeToFile(JSON.stringify(newsList));
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;
