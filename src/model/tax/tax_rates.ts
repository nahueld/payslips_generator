//db stub
export const TaxRates = [
  {
    lowerBound : 0,
    upperBound : 18200,
    basePayment : 0,
    additional : 0
  },
  {
    lowerBound : 18201,
    upperBound : 37000,
    basePayment : 0,
    additional : 0.19
  },
  {
    lowerBound : 37001,
    upperBound : 87000,
    basePayment : 3572,
    additional : 0.325
  },
  {
    lowerBound : 87001,
    upperBound : 180000,
    basePayment : 19822,
    additional : 0.37
  },
  {
    lowerBound : 180001,
    upperBound : Number.MAX_SAFE_INTEGER,
    basePayment : 54232,
    additional : 0.45
  }
];