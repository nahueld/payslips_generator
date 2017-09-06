import { TaxRater } from './../tax/tax_rater';
import { NameUtil } from './../utils/name_util';
import { DateUtil } from './../utils/date_util';
import { SalaryCalculator } from './../salary/salary_calculator';
import { Payslip } from './payslip';
import * as _ from "lodash";

export class PayslipFactory {

  payslip : Payslip; 

  constructor() {
    this.payslip = new Payslip();
  }

  withName(...names : string[]) : PayslipFactory {
    this.payslip.name = NameUtil.getName(names);
    return this;
  }

  withAnnualSalaryAndSuperRate(salary : number, superRate : number) : PayslipFactory  {
    this.payslip.grossIncome = SalaryCalculator.grossIncome(salary);
    this.payslip.incomeTax = TaxRater.calculate(salary);
    this.payslip.netIncome = SalaryCalculator.netIncome(this.payslip.grossIncome, this.payslip.incomeTax);
    this.payslip.super = SalaryCalculator.super(this.payslip.grossIncome, superRate);
    return this;
  }

  withPeriod(startDate : string, endDate : string) : PayslipFactory {
    this.payslip.payPeriod = DateUtil.getPayPeriod(startDate, endDate);
    return this;
  }

  get() : Payslip {
    return this.payslip;
  }

}