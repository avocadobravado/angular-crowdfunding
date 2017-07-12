import { Founder } from './founder.model';
import { Project } from './project.model';
import { User } from './user.model';

export class Contribution {
  constructor (
    public projectName: string,
    public amount: number
  )
  {}
}
