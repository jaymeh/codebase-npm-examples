"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var codebase_npm_1 = require("codebase-npm");
var codebaseConnection = new codebase_npm_1.default('', '', '');
var project = new codebase_npm_1.Project(1, 'project', 'active', '/project', 1, 1, 0);
var session = new codebase_npm_1.TimeSession(1, project, 'some summary', 10, new Date(), new Date(), new Date());
console.log(session);
