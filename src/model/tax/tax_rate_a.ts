import { TaxCalculator } from './tax_calculator';
import { ITaxRate } from './itax_rate';

export class TaxRateA implements ITaxRate {

  readonly lowerBound : number = 0;
  readonly upperBound : number = 18200;
  readonly rate : number = 0;
  readonly basePayment : number = 0;
  readonly additional : number = 0;

  calculate(salary : number) : number {
    return TaxCalculator.calculate(this, salary);
  }

  isInRange(salary : number) : boolean {
    return TaxCalculator.isInRange(this,salary);
  }
}