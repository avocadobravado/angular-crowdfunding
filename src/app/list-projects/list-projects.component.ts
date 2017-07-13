import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Founder } from '../founder.model';
import { Project } from '../project.model';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;
  projectsToDisplay;
  clickedProject;
  editing: boolean = false;
  currentRoute: string = this.router.url;
  filterBy: string = 'all';
  projectBeingEdited = null;
  adminRoute: boolean = false;

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit() {
    this.projects = this.appService.getProjects();
  }

  goToDetailPage(clickedProject: Project) {
    this.router.navigate(['project', clickedProject["$key"]]);
  };

  onChange(value) {
    this.filterBy = value;
  }

  toggleEditing(project) {
    if (this.editing === false) {
      this.editing = true;
      this.projectBeingEdited = project;
    } else {
      this.editing = false;

      this.appService.saveUpdate(this.projectBeingEdited);

      this.projectBeingEdited = null;
    }
  }

  deleteProject(projectToDelete) {
    if(confirm("Are you sure you don't want to help a non profit or a charity or a business or an OTHER? Get a cheeseburger and think about it...")){
      this.appService.deleteProject(projectToDelete);
    }
  }

  checkType(project) {
    if (project.typeOfProject === "other") {
      return 'card other';
    } else if (project.typeOfProject === "charity") {
      return 'card charity';
    } else if (project.typeOfProject === "product") {
      return 'card product';
    }
    return 'card';
  }
}
