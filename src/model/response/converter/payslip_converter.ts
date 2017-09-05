import { PayslipFactory } from './../../payslip/payslip_factory';
import { EmployeesResponse } from './../employees_response';
import { IConverter } from './iconverter';
import * as _ from 'lodash';
import { PayslipsResponse } from "../payslips_response";
import { Payslip } from '../../payslip/payslip';

export class PayslipResponseConverter implements IConverter {

  convert(employeesResponse : EmployeesResponse) : PayslipsResponse {
    let payslipsResponse = new PayslipsResponse();
    payslipsResponse.content = this.getBody(employeesResponse);
    payslipsResponse.error = false;
    return payslipsResponse;
  }

  private getBody(response : EmployeesResponse) {
    return _.hasIn(response,'content') ? this.parseBody(response)
                                       : [];
  }

  private parseBody(response : EmployeesResponse) : Payslip[] {
    return _(response.content)
            .compact()
            .map(e => new PayslipFactory()
              .withName(e.firstName, e.lastName)
              .withAnnualSalaryAndSuper(e.annualSalary,e.superRate)
              .withPeriod(e.startDate, e.endDate)
              .get())
            .value();
  }
}