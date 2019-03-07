"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var codebase_npm_1 = require("codebase-npm");
require('dotenv').config();
var user = process.env.API_USER;
var key = process.env.API_KEY;
var codebaseConnection = new codebase_npm_1.codebase(user, key, '');
codebaseConnection.users().then(function (users) {
    var sorted = users.sortBy('emailAddress');
    console.log(sorted.pluck('emailAddress').all());
});
