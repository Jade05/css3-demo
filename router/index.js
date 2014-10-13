
/*
 * GET home page.
 */
var controller = require('../controller');

exports.init = function(app) {
    app.get('/', controller.main);
    app.post('/hash', controller.hash);
};