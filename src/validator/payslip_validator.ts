import { Payslip } from './../model/payslip/payslip';
import * as _ from 'lodash';

export const PayslipValidator = {

  validateName : (payslip : Payslip) : boolean => {
    return _.hasIn(payslip, 'name') && !_.isEmpty(payslip.name);
  },

  validateGrossIncome : (payslip : Payslip) : boolean => {
    return _.hasIn(payslip, 'grossIncome') && _.isNumber(payslip.grossIncome) && payslip.grossIncome > 0;
  },

  validateIncomeTax : (payslip : Payslip) : boolean => {
    return _.hasIn(payslip, 'incomeTax') && _.isNumber(payslip.incomeTax) && payslip.incomeTax >= 0;
  },

  validateNetIncome : (payslip : Payslip) : boolean => {
    return _.hasIn(payslip, 'netIncome') && _.isNumber(payslip.netIncome) && payslip.netIncome > 0;
  },

  validateSuper : (payslip : Payslip) : boolean => {
    return _.hasIn(payslip, 'super') && _.isNumber(payslip.super) && payslip.super >= 0;
  },

  validatePayPeriod : (payslip : Payslip) : boolean => {
    return _.hasIn(payslip, 'payPeriod') && _.isString(payslip.payPeriod) && !_.isEmpty(payslip.payPeriod);    
  }

}