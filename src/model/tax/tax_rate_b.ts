import { TaxCalculator } from './tax_calculator';
import { ITaxRate } from './itax_rate';

export class TaxRateB implements ITaxRate {
  
  readonly upperBound  : number = 37000;
  readonly lowerBound  : number = 18201;
  readonly basePayment : number = 0;
  readonly additional  : number = 0.19;

  calculate(salary : number) : number {
    return TaxCalculator.calculate(this, salary);
  }
}