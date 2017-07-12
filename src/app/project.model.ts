import { Founder } from './founder.model';
import { User } from './user.model';

export class Project {
   currentFunding: number = 0;
   postedDate = new Date();
   backers: User[] = [];
  constructor(
    public title:  string,
    public description: string,
    public targetFunding: number,
    public founders: Founder,
    public purpose: string,
    public reward: string,
    public typeOfProject: string
  ){}
}
