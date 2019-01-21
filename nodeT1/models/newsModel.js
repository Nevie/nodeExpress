class News {
    constructor() {}

    setAll(newsList) {
        this.newsList = newsList.newsList;
    }

    findById(id) {
        let result = this.newsList.find(news => {
            return news.id === id
        });
        return result?result : "Not Found"
    }

    updateById(id, news){
        this.newsList = this.newsList.map(x => x.id === news.id ? news : x);
    }

    add(news) {
        this.newsList.push(news);
    }

    delete(id) {
        this.newsList = this.newsList.filter(function (value) {
            return value.id !== id
        });
    }
}

module.exports = News;
