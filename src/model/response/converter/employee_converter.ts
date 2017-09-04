import { EmployeesResponse } from './../employees_response';
import { IConverter } from './iconverter';
import { Employee } from './../../employee/employee';
import * as _ from 'lodash';

export class EmployeeResponseConverter implements IConverter {

  convert(unirestResponse : any) : EmployeesResponse {
    let employeesResponse = new EmployeesResponse();
    employeesResponse.statusCode = unirestResponse.code;
    employeesResponse.error      = !unirestResponse.ok;    
    employeesResponse.message    = unirestResponse.ok ? "" : unirestResponse.error.message;
    employeesResponse.content    = this.getBody(unirestResponse);
    return employeesResponse;
  }

  private getBody(unirestResponse : any) {
    return _.hasIn(unirestResponse,'body.employees') ? this.parseBody(unirestResponse)
                                                     : [];
  }

  private parseBody(unirestResponse : any) {
    return _(unirestResponse.body.employees)
    .compact()
    .map(e => new Employee(e))
    .value();
  }
}