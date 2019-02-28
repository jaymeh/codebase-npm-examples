import codebase, { TimeSession, Project, Ticket, User } from 'codebase-npm';

let codebaseConnection = new codebase('<hidden>', '<hidden>', '');
let project = new Project(1, 'project', 'active', '/project', 1, 1, 0);

let session = new TimeSession(1, project, 'some summary', 10, new Date(), new Date(), new Date());

console.log(session.convertToXml());