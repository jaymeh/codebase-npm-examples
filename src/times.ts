import { codebase, Day, Week, Month, All } from 'codebase-npm';

require('dotenv').config();

let user = process.env.API_USER;
let key = process.env.API_KEY;

let codebaseConnection = new codebase(user!, key!, '');

codebaseConnection.users().then(async (users: any) => {
    let project = await codebaseConnection.project('fitch-l')
    
    // Populate the project with time sessions from this week.
    await codebaseConnection.times(project, new Week());

    // Get the first time session.
    console.log(project.getTimeSessions().first());
})
