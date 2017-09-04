import * as _ from 'lodash';

export class Employee {

  firstName : string;
  lastName : string;
  annualSalary : string;
  superRate : number;
  startDate : string;
  endDate : string;

  constructor(employee? : any) {
    let merged = employee ? _.extend(this, employee) : this;
    _.assign(this, merged);
  }

}