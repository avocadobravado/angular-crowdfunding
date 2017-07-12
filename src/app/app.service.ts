import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Project } from './project.model';
import { Founder } from './founder.model';

@Injectable()
export class AppService {

  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(project: Project) {
    this.projects.push(project);
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }
}