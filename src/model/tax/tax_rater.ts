import { TaxRateA } from './tax_rate_a';
import * as _ from "lodash";
import { TaxRateB } from "./tax_rate_b";
import { TaxRateC } from "./tax_rate_c";
import { TaxRateD } from "./tax_rate_d";
import { TaxRateE } from "./tax_rate_e";

export class TaxRater {

  readonly taxRates = {
      taxRateA : new TaxRateA(),
      taxRateB : new TaxRateB(),
      taxRateC : new TaxRateC(),
      taxRateD : new TaxRateD(),
      taxRateE : new TaxRateE()
  }

  calculate(salary : number) {
    return  this.taxRates.taxRateA.isInRange(salary) ? this.taxRates.taxRateA.calculate(salary) :
            this.taxRates.taxRateB.isInRange(salary) ? this.taxRates.taxRateB.calculate(salary) :
            this.taxRates.taxRateC.isInRange(salary) ? this.taxRates.taxRateC.calculate(salary) :
            this.taxRates.taxRateD.isInRange(salary) ? this.taxRates.taxRateD.calculate(salary)
                                                     : this.taxRates.taxRateE.calculate(salary)
                                                     
  }
}