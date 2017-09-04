import { TaxCalculator } from './tax_calculator';
import { ITaxRate } from './itax_rate';

export class TaxRateD implements ITaxRate {
  
  readonly upperBound  : number = 180000;
  readonly lowerBound  : number = 87001;
  readonly basePayment : number = 19822;
  readonly additional  : number = 0.37;

  calculate(salary : number) : number {
    return TaxCalculator.calculate(this, salary);
  }
}