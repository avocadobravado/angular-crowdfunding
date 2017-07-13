import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
import { NgForm } from '@angular/forms';
import { Contribution } from '../contribution.model';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {

  projectId: string;
  projectToDisplay = null;

  constructor(private route: ActivatedRoute, private location: Location, private appService: AppService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.appService.getProjectById(this.projectId);
  }
  checkForLogin() {
    return true;
  }
  backedProject(form: NgForm) {
    var newContribution = new Contribution(parseInt(form.value.amountBacked), this.projectId);
    this.appService.backProject(newContribution);
  }
}
