import { Founder } from './founder.model';
import { Project } from './project.model';
import { Contribution } from './contribution.model';

export class User {
  // admin or not
  backed: Contribution[] = [];
  constructor(
    public name: string,
    public password: string,
    public email: string
  ){}
}
