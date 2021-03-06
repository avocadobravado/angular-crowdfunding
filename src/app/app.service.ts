import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Project } from './project.model';
import { Founder } from './founder.model';

@Injectable()
export class AppService {

  projects: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;
  userLoggedIn = null;
  userLoggedInIsAdmin = false;
  userId: string;
  loginFailed: boolean;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
    this.users = database.list('users');
  }

  getProjects() {
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

  login(loginInfo, location) {
    this.users.forEach((users) => {
      users.forEach((user) => {
        if (user.email === loginInfo.email) {
          if (user.password === loginInfo.password) {
            if (user.isAdmin) {
              this.userLoggedInIsAdmin = true;
            }
            this.userLoggedIn = user;
            this.userId = user.$key;
            this.loginFailed = false;
            location.back();
            return user;
          } else {
            this.loginFailed = true;
            return null;
          }
        }
      });
    });
    this.loginFailed = true;
    return null;
  }

  logout() {
    this.userLoggedIn = null;
  }

  backProject(newContribution) {
    this.addContributionToUser(newContribution, this.userId);
    this.addBackerToProject(newContribution.key, this.userId, newContribution.amount);
  }

  addBackerToProject(projectKey, userId, contribution) {
    var projectInDB = this.getProjectById(projectKey);
    var userInDB = this.getUserById(userId);
    var user;
    var project;
    projectInDB.subscribe((snapshot) => {
      project = snapshot;
    });
    userInDB.subscribe((snapshot) => {
      user = snapshot;
    });
    if (!project.hasOwnProperty('backers')) {
      project.backers = [];
    }
    project.backers.push(user);
    project.currentFunding += contribution;
    projectInDB.set(project);
  }

  addContributionToUser(contribution, id) {
    var userInDB = this.getUserById(id);
    var arr = [];
    userInDB.subscribe((snapshot) => {
      if (snapshot.hasOwnProperty('backed')) {
        arr = snapshot.backed;
      }
    });
    arr.push(contribution);
    userInDB.update({
      backed: arr
    });
  }

  getUserById(userId: string) {
    return this.database.object('users/' + userId);
  }

}
