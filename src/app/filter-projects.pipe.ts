import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProjects'
})
export class FilterProjectsPipe implements PipeTransform {

  // transform(value: any, filterBy: string): any {
  transform(input: any, filterBy: string): any {
    console.log(filterBy);
    var result = [];
    if (input !== null) {
      input.forEach(function(project) {
        if (filterBy !== 'all') {
          if (project.typeOfProject === filterBy) {
            result.push(project);
          }
        } else {
          result.push(project);
        }
      });
      return result;
    } else {
      return result;
    }
  }
}
