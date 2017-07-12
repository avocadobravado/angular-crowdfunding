import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Founder } from '../founder.model';
import { Project } from '../project.model';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})

export class AddNewProjectComponent implements OnInit {

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  addProject(form: NgForm) {
    var x = form.value;
    var newFounder = new Founder(x.founderName, x.founderEmail);
    var newProject = new Project(x.title, x.description, parseInt(x.targetFunding), newFounder, x.purpose, x.reward, x.typeOfProject);

    this.appService.addProject(newProject);
    this.router.navigate(['projects']);
  }
}
