import { TaxCalculator } from './tax_calculator';
import { ITaxRate } from './itax_rate';

export class TaxRateE implements ITaxRate {
  
  readonly upperBound  : number = -1;
  readonly lowerBound  : number = 180001;
  readonly basePayment : number = 54232;
  readonly additional  : number = 0.45;

  calculate(salary : number) : number {
    return TaxCalculator.calculate(this, salary);
  }
}