import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Project } from './project.model';
import { Founder } from './founder.model';

@Injectable()
export class AppService {

  projects: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;
  userLoggedIn;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
    this.users = database.list('users');
  }

  getProjects() {
    console.log(this.database.object);
    return this.projects;
  }

  addProject(project: Project) {
    this.projects.push(project);
  }

  deleteProject(project) {
    var albumEntryInFirebase = this.getProjectById(project.$key);
    albumEntryInFirebase.remove();
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }

  saveUpdate(project) {
    var projectEntryInDB = this.getProjectById(project.$key);
    projectEntryInDB.update({
      title: project.title,
      description: project.description,
      targetFunding: project.targetFunding,
      founders: {
        name: project.founders.name,
        email: project.founders.email
      },
      purpose: project.purpose,
      reward: project.reward,
      typeOfProject: project.typeOfProject
    });
  }

  createUser(user) {
    this.users.push(user);
  }
}
