const express = require('express'),
    api = express(),
    bodyParser = require('body-parser');

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

module.exports = api;