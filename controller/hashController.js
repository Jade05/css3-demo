var url = require('url');
var fs = require('fs');

module.exports = function(req, res) {
    var hashValue = req.body.hashValue;
    var partPath = __dirname.replace('controller', 'views');
    var _filePath = __dirname.replace('controller', 'views') + '/parts/'+ hashValue + '.ejs';
    fs.readFile(_filePath, function (err, data) {
        if (err) throw err;
        res.send(data);
    });
}