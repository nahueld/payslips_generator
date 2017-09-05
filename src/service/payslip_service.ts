import { ResponseFactory } from './../model/response/response_factory';
import { PayslipResponseConverter } from './../model/response/converter/payslip_converter';
import { Employee } from './../model/employee/employee';
import { EmployeeDetailsService } from './employee_details_service';
import { IResponse } from './../model/response/iresponse';

export class PayslipService {

  public static get() : Promise<IResponse> {
    return new Promise((resolve, reject) => {
      EmployeeDetailsService
      .get()
      .then(employeeResponse => {
        let response : IResponse = new ResponseFactory()
                                    .withResponse(employeeResponse)
                                    .build(PayslipResponseConverter);
        return response.error ? reject(response) : resolve(response);
      })
    });
  }

}