import { Config } from './../config/config';
import { EmployeesResponse } from './../model/response/employees_response';
import { EmployeeResponseConverter } from './../model/response/converter/employee_converter';
import { ResponseFactory } from './../model/response/response_factory';
import { IResponse } from './../model/response/iresponse';
import * as unirest from 'unirest';

export function get() : Promise<EmployeesResponse> {
  let promise = Promise.resolve();
  return promise
          .then(() => getEmployeeDetails())
}

function getEmployeeDetails() : Promise<EmployeesResponse> {
  return new Promise((resolve, reject) => {
    unirest
    .get(Config.ROUTES.EMPLOYEE_DETAILS)
    .end((r) => {
      let response : IResponse = new ResponseFactory().withResponse(r).build(EmployeeResponseConverter);
      return response.error ? reject(response) : resolve(response);
    });
  });
}