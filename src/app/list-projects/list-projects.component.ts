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
  clickedProject;

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit() {
    this.projects = this.appService.getProjects();
  }

  goToDetailPage(clickedProject: Project) {
    this.router.navigate(['project', clickedProject["$key"]]);
  };

}
