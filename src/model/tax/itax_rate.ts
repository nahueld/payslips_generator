export interface ITaxRate {

  readonly upperBound  : number;
  readonly lowerBound  : number;
  readonly basePayment : number;
  readonly additional  : number;

  calculate : (salary : number) => number;

}