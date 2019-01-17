const fs = require('fs');
let appRoot = require('app-root-path');

module.exports = {
    readFromFile: function (path,callback){
        fs.readFile(`${appRoot}${path}`, 'utf-8', (err, content) => {
            if (err) throw err;
            try {
                callback(null, JSON.parse(content));
            } catch(exception) {
                callback(exception);
            }
        });
    },
    writeToFile: function (path){
        fs.writeFile(file, content, (err) => {
            if (err) return console.error(err);
            console.log('Text added');
        })
    }
};






