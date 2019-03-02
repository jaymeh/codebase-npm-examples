import codebase from 'codebase-npm';

require('dotenv').config();

let user = process.env.API_USER;
let key = process.env.API_KEY;

let codebaseConnection = new codebase(user!, key!, '');

codebaseConnection.projects().then((projects: any) => {
    // Sort projects by id.
    let sorted = projects.sortBy('id');

    // Pull the ids out.
    console.log(sorted.pluck('id').all());
})