import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { AdminComponent } from './admin/admin.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';

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
 },
 {
   path: 'admin',
   component: AdminComponent
 },
 {
   path: 'create-user',
   component: CreateUserComponent
 },
 {
   path: 'login',
   component: LoginComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
