import codebase from 'codebase-npm';

require('dotenv').config();

let user = process.env.API_USER;
let key = process.env.API_KEY;

let codebaseConnection = new codebase(user!, key!, '');

codebaseConnection.projects().then((projects: any) => {
    let sorted = projects.sortBy('id');

    console.log(sorted.pluck('id').all());
})