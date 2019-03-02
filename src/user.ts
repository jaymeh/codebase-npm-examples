import codebase from 'codebase-npm';

require('dotenv').config();

let user = process.env.API_USER;
let key = process.env.API_KEY;

let codebaseConnection = new codebase(user!, key!, '');

codebaseConnection.users().then((users: any) => {
    let sorted = users.sortBy('emailAddress');
    console.log(sorted.pluck('emailAddress').all());
})