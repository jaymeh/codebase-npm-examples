import codebase, { TimeSession, Project, Ticket, User } from 'codebase-npm';

let codebaseConnection = new codebase('<hidden>', '<hidden>', '');

codebaseConnection.projects().then((projects) => {
    console.log(projects.getActive());
})