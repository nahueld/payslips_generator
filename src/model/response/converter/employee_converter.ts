import { EmployeesResponse } from './../employees_response';
import { IConverter } from './iconverter';
import { Employee } from './../../employee/employee';
import * as _ from 'lodash';

export class EmployeeResponseConverter implements IConverter {

  convert(unirestResponse : any) : EmployeesResponse {
    let employeesResponse = new EmployeesResponse();
    employeesResponse.statusCode =unirestResponse.code;
    employeesResponse.message    = unirestResponse.ok ? "" : unirestResponse.error.message;
    employeesResponse.error = !unirestResponse.ok;    
    employeesResponse.content = this.getBody(unirestResponse);
    return employeesResponse;
  }

  private getBody(uniresResponse : any) {
    return _(uniresResponse.body.employees)
    .compact()
    .map(e => new Employee(e))
    .value();
  }
}