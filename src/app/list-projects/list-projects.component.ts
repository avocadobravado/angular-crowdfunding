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
      // console.log(this.projectBeingEdited);

      this.projectBeingEdited = null;
    }
  }
}
