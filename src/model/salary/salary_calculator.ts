import { MoneyUtil } from './../utils/money_util';
import * as _ from "lodash";

export class SalaryCalculator {

  static grossIncome(salary : number) : number {
    return _.chain(salary)
              .divide(12)
              .thru(v => MoneyUtil.round(v))
              .value();
  }

  static netIncome(grossIncome : number , taxIncome : number) : number {
    return _.chain(grossIncome)
            .subtract(taxIncome)
            .thru(v => MoneyUtil.round(v))
            .value();
  }

  static super(grossIncome : number, superRate : number) {
    return _.chain(grossIncome)
            .thru(n => n * superRate/100)
            .thru(v => MoneyUtil.round(v))
            .value();
  }

}