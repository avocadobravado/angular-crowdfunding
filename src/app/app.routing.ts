import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent
  },
  {
   path: 'projects',
   component: ListProjectsComponent
 },
 {
   path: 'addproject',
   component: AddNewProjectComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
