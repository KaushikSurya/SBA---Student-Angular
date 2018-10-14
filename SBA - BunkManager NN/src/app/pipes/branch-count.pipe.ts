import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../model/student';

@Pipe({
  name: 'branchCount'
})
export class BranchCountPipe implements PipeTransform {

  transform(students: Student[], branch:string): number {
    return students.filter(c=>c.branch==branch).length;
  }

}
