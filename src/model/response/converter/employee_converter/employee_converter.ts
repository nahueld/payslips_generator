import { EmployeeResponseFactory } from './../../employees_response/employee_response_factory';
import { Employee } from './../../../employee/employee';

import * as _ from 'lodash';

export class EmployeeResponseConverter implements IConverter {

  convert(externalResponse : any) : EmployeesResponse {
    let employeesResponse = new EmployeesResponse();
    employeesResponse.statusCode = externalResponse.code;
    employeesResponse.error      = !externalResponse.ok;    
    employeesResponse.message    = externalResponse.ok ? "" : externalResponse.error.message;
    employeesResponse.content    = this.getBody(externalResponse);
    return employeesResponse;
  }

  private convertExternalResponseToEmployeeResponse(externalResponse : any) : Employee[] {
    return _.chain(externalResponse)
              .thru(e => this.getBody(e))
              .map(e => this.createEmployee(e))
              .value();
  }

  private getBody(externalResponse : any) : any[] {
    return _.hasIn(externalResponse,'body.employees') ? externalResponse.body.employees
                                                      : [];
  }

  private createEmployee(externalBody) : Employee {
    return new Employee(<Employee>externalBody);
  }
}