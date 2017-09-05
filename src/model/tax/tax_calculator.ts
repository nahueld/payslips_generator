import { MoneyUtil } from './../utils/money_util';
import { ITaxRate } from "./itax_rate";
import * as _ from "lodash";

export class TaxCalculator {

  static calculate(taxRate : ITaxRate, salary : number) : number {
    return _.chain(salary)
            .subtract(taxRate.lowerBound)
            .multiply(taxRate.additional)
            .add(taxRate.basePayment)
            .divide(12)
            .thru(v => MoneyUtil.round(v))
            .value();
  }

  static isInRange(taxRate : ITaxRate, salary : number) : boolean {
    return salary >= taxRate.lowerBound && salary <= taxRate.upperBound;
  }

}