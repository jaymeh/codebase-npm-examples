"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var codebase_npm_1 = require("codebase-npm");
var codebaseConnection = new codebase_npm_1.default('<hidden>', '<hidden>', '');
codebaseConnection.projects().then(function (projects) {
    console.log(projects.getActive());
});
