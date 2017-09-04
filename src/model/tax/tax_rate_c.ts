import { TaxCalculator } from './tax_calculator';
import { ITaxRate } from './itax_rate';

export class TaxRateC implements ITaxRate {
  
  readonly upperBound  : number = 87000;
  readonly lowerBound  : number = 37001;
  readonly basePayment : number = 3572;
  readonly additional  : number = 0.325;

  calculate(salary : number) : number {
    return TaxCalculator.calculate(this, salary);
  }
}