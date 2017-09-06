import { CONFIG } from './../../../config/config';
import { EmployeeValidator } from './../../../validator/employee_validator';
import { Validation, Validator } from './../../../validator/validator';
import { Employee } from './../../employee/employee';
import { EmployeesResponse } from './employees_response';
import * as _ from "lodash";

export class EmployeeResponseFactory {
  
    employeesResponse : EmployeesResponse = new EmployeesResponse();
    externalResponse : any;
    
    withContent(employees : Employee[]) : EmployeeResponseFactory {
      this.employeesResponse.content = employees;
      return this;
    }

    withExternalResponse(externalResponse : any) : EmployeeResponseFactory {
      this.externalResponse = externalResponse;
      return this;
    }
  
    create() : EmployeesResponse {
      let validation                    = this.validateEmployee(this.employeesResponse.content);
      this.employeesResponse.error      = this.isError(validation);
      this.employeesResponse.statusCode = this.defineStatusCode(validation);
      this.employeesResponse.message    = this.defineMessage(validation);
      return this.employeesResponse;
    }

    private isError(validation : Validation | undefined) : boolean {
      return !(this.externalResponse.ok && _.isUndefined(validation));
    }

    private defineStatusCode(validation : Validation | undefined) : number {
      return this.externalResponse.code == CONFIG.CODES.HTTP_OK ? this.defineStatusCodeFromValidation(validation)
                                                                : this.externalResponse.code;
    }

    private defineMessage(validation : Validation | undefined) : string {
      return !this.externalResponse.ok ? this.externalResponse.error.message
                                       : this.defineMessageFromValidation(validation);
    }

    private defineMessageFromValidation(validation : Validation | undefined) : string {
      return !_.isUndefined(validation) && !validation.valid ? JSON.stringify(validation) : "";
    }

    private defineStatusCodeFromValidation(validation : Validation | undefined) : number {
      return _.isUndefined(validation) ? CONFIG.CODES.HTTP_OK : CONFIG.CODES.HTTP_BAD_REQUEST;
    }
  
    private validateEmployee(employees : Employee[]) : Validation | undefined {
      return _(employees)
              .map(e => Validator.validate(EmployeeValidator, e))
              .find(v => !v.valid);
    }
  
  }