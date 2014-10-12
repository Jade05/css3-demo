
/*
 * GET home page.
 */
var data = require('../mock/data.js');

exports.index = function(req, res){
  res.render('main', data);
};