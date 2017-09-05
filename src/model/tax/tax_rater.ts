import { TaxCalculator } from './tax_calculator';
import { TaxRates } from './tax_rates';
import * as _ from "lodash";

export class TaxRater {

  static calculate(salary : number) : number {
    return _(TaxRates)
            .filter(t => TaxCalculator.isInRange(t, salary))
            .map(   t => TaxCalculator.calculate(t, salary))
            .first() || 0;   
  }
}