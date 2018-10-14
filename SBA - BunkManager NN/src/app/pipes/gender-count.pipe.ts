import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../model/student';

@Pipe({
  name: 'genderCount'
})
export class GenderCountPipe implements PipeTransform {

  transform(students:Student[],gender:string): number {
    return students.filter(c=>c.gender==gender).length
  }

}
