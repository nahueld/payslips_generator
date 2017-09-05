import { PayslipsResponse } from './../model/response/payslips_response';
import { PayslipResponseConverter } from './../model/response/converter/payslip_converter';
import { ResponseFactory } from './../model/response/response_factory';
import { IResponse } from './../model/response/iresponse';
import { EmployeesResponse } from './../model/response/employees_response';
import * as employee from './employee';
import * as unirest from 'unirest';

export function get(req, res) {
  let promise = Promise.resolve();
  
  return promise
          .then(() => employee.get())
          .then((employeesResponse : EmployeesResponse)  => generatePayslips(employeesResponse))
          .then((payslipsResponse  : PayslipsResponse)   => res.send(payslipsResponse))
          .catch((errorResponse    : PayslipsResponse)   => res.send(errorResponse));
}

function generatePayslips(employeesResponse : EmployeesResponse) : Promise<PayslipsResponse> {
  let response : IResponse = new ResponseFactory()
                                  .withResponse(employeesResponse)
                                  .build(PayslipResponseConverter);
  return new Promise((resolve, reject) => { return response.error ? reject(response) : resolve(response) });
}