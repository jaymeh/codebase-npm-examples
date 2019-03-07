import { codebase } from 'codebase-npm';

require('dotenv').config();

let user = process.env.API_USER;
let key = process.env.API_KEY;

let codebaseConnection = new codebase(user!, key!, '');

codebaseConnection.users().then(async (users: any) => {
    let project = await codebaseConnection.project('creode')
    
    // Populate the project with tickets.
    await codebaseConnection.tickets(project, 1);

    // Get the first ticket from the ticket collection on the project.
    let ticket = project.getTickets().first();

    console.log(ticket);
})

