import { Payslip } from './../model/payslip/payslip';
import * as _ from 'lodash';

export class PayslipValidator {

  static validate(payslip : Payslip)  : any {
    let validators = [this.validateName, 
                      this.validateGrossIncome, 
                      this.validateIncomeTax, 
                      this.validateNetIncome, 
                      this.validateSuper, 
                      this.validatePayPeriod];
    return _(validators)
              .map(f => f(payslip))
              .find(b => !b) || true;
  }

  private static validateName(payslip : Payslip) : boolean {
    //return _.hasIn(payslip, 'name') && _.isEmpty(payslip.name);
    return true;
  }

  private static validateGrossIncome(payslip : Payslip) : boolean {
    //return _.hasIn(payslip, 'grossIncome') && _.isNumber(payslip.grossIncome) && payslip.grossIncome > 0;
    return true;
  }

  private static validateIncomeTax(payslip : Payslip) : boolean {
    return true;
  }

  private static validateNetIncome(payslip : Payslip) : boolean {
    return true;
  }

  private static validateSuper(payslip : Payslip) : boolean {
    return true;
  }

  private static validatePayPeriod(payslip : Payslip) : boolean {
    return true;
  }

}