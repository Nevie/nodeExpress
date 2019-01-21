const readWriter = require('././../helpers/readWriteHelper');
const News = require('././../models/newsModel');
let express = require('express');
let router = express.Router();

const newsList = new News();

router.get('/', function (req, res, next) {
   let news = newsList.getNews();
   res.send(news);
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
        author: req.body.author,
        title: req.body.title,
        id: req.body.id
    };
    try {
        newsList.add(news);
        res.send(newsList);
    }
    catch (err) {
        next(err);
    }
});

router.put('/:id', function (req, res, next) {
    let news = {
        author: req.body.author,
        title: req.body.title,
        id: req.body.id
    };

    try {
        newsList.updateById(req.params.id, news);
        res.send(newsList);
    }
    catch (err) {
        next(err);
    }

});

router.delete('/:id', function (req, res, next) {
    try {
        newsList.delete(req.params.id);
        res.send(newsList);
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;
