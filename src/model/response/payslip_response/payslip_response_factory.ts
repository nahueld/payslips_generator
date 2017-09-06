import { CONFIG } from './../../../config/config';
import { PayslipValidator } from './../../../validator/payslip_validator';
import { Validator, Validation } from './../../../validator/validator';
import { Payslip } from './../../payslip/payslip';
import { PayslipsResponse } from './payslips_response';
import { EmployeesResponse } from './../employees_response/employees_response';
import * as _ from "lodash";

export class PayslipResponseFactory {

  payslipsResponse : PayslipsResponse = new PayslipsResponse();
  
  withContent(payslips : Payslip[]) : PayslipResponseFactory {
    this.payslipsResponse.content = payslips;
    return this;
  }

  create() : PayslipsResponse {
    let validation = this.validatePayslip(this.payslipsResponse.content);
    this.payslipsResponse.error = validation ? !validation.valid : false;
    this.payslipsResponse.statusCode = this.payslipsResponse.error ? CONFIG.CODES.HTTP_BAD_REQUEST : CONFIG.CODES.HTTP_OK;
    this.payslipsResponse.message = this.payslipsResponse.error ? JSON.stringify(validation) : "";
    return this.payslipsResponse;
  }

  private validatePayslip(payslips : Payslip[]) : Validation | undefined {
    return _(payslips)
            .map(p => Validator.validate(PayslipValidator, p))
            .find(v => !v.valid);
  }

}