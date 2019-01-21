const readWriter = require('././../helpers/readWriteHelper');

class News {
    constructor() {
        this.newsList = [];
        this.readNews();
    }

    readNews() {
        try {
            readWriter.readFromFile((err, json) => {
                if (err) {
                    next(err);
                } else {
                    this.newsList = json.newsList;
                }
            });
        }
        catch (err) {
           throw Error("Can't read from file")
        }
    }

    getNews() {
        return this.newsList;
    }

    findById(id) {
        let result = this.newsList.find(news => {
            return news.id === id
        });
        return result ? result : "Not Found"
    }

    updateById(id, news) {
        this.newsList = this.newsList.map(x => x.id === news.id ? news : x);
    }

    add(news) {
        this.newsList.push(news);
        readWriter.writeToFile(JSON.stringify(this.newsList));
    }

    delete(id) {
        this.newsList = this.newsList.filter(function (value) {
            return value.id !== id
        });
        readWriter.writeToFile(JSON.stringify(this.newsList));
    }
}

module.exports = News;
