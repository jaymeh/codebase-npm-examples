"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var codebase_npm_1 = require("codebase-npm");
require('dotenv').config();
var user = process.env.API_USER;
var key = process.env.API_KEY;
var codebaseConnection = new codebase_npm_1.default(user, key, '');
codebaseConnection.projects().then(function (projects) {
    var sorted = projects.sortBy('id');
    console.log(sorted.pluck('id').all());
});
