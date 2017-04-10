var express = require('express');

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// };

// Create app
var app = express();

app.use(express.static('public'));

//app.use(allowCrossDomain);

app.listen(3000, function() {
  console.log('all is working');
});
