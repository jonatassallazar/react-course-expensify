"use strict";

var path = require('path');

var express = require('express');

var app = express();
var publicPath = path.join(__dirname, '..', 'public');
app.use(express["static"](publicPath));
app.get('*', function (req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(process.env.PORT, function () {});