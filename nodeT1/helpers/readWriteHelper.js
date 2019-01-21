const fs = require('fs');
const util = require('util');
require('util.promisify').shim();

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const file = './data/news.json';

module.exports = {
    readFromFile: function (callback) {
        readFileAsync(file, 'utf-8')
            .then(content => {
                callback(null, JSON.parse(content));
            })
            .catch(err => {
                console.error(err);
            })
    },

    writeToFile: function (content) {
        writeFileAsync(file, content)
            .then(() => {
                console.log('Added');
            })
            .catch(err => {
                console.error(err);
            })
    }
};






