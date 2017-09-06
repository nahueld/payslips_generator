import { EmployeeResponseFactory } from './../../employees_response/employee_response_factory';
import { Employee } from './../../../employee/employee';
import { EmployeesResponse } from './../../employees_response/employees_response';
import { IConverter } from './../iconverter';

import * as _ from 'lodash';

export class EmployeeResponseConverter implements IConverter {

  convert(externalResponse : any) : EmployeesResponse {
    return new EmployeeResponseFactory()
            .withContent(this.convertExternalResponseToEmployeeResponse(externalResponse))
            .withExternalResponse(externalResponse)
            .create();
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