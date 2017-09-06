import { PayslipFactory } from './../../../payslip/payslip_factory';
import { Employee } from './../../../employee/employee';
import { Payslip } from './../../../payslip/payslip';
import { PayslipResponseFactory } from './../../payslip_response/payslip_response_factory';
import { PayslipsResponse } from './../../payslip_response/payslips_response';
import { EmployeesResponse } from './../../employees_response/employees_response';
import { IConverter } from './../iconverter';
import * as _ from "lodash";

export class PayslipResponseConverter implements IConverter {

  convert(employeesResponse : EmployeesResponse) : PayslipsResponse {
    return new PayslipResponseFactory()
                .withContent(this.convertEmployeesResponseToPayslips(employeesResponse))
                .create()
  }

  private convertEmployeesResponseToPayslips(employeesResponse : EmployeesResponse) : Payslip[]  {
    return _.chain(employeesResponse)
              .thru(e => this.getBody(e))
              .map(e => this.createPayslip(e))
              .value();
  }

  private getBody(response : EmployeesResponse) : Employee[] {
    return _.hasIn(response,'content') ? response.content
                                       : [];
  }

  private createPayslip(employeeDetails : Employee) : Payslip  {
    return new PayslipFactory()
            .withName(employeeDetails.firstName, employeeDetails.lastName)
            .withAnnualSalaryAndSuperRate(employeeDetails.annualSalary, employeeDetails.superRate)
            .withPeriod(employeeDetails.startDate, employeeDetails.endDate)
            .get();
  }

}