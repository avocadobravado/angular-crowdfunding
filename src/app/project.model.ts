import { Founder } from './founder.model';

export class Project {
   currentFunding: number = 0;
   postedDate = new Date();
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
