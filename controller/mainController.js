var data = require('../mock/data.js');

module.exports = function(req, res) {
    res.render('main', data);
}
