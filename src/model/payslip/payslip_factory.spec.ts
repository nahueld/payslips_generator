import { expect } from 'chai';
import { PayslipFactory } from './payslip_factory';
describe('PayslipFactory', () => {

  it('should build a Payslip', () => {
    let payslip = new PayslipFactory()
                    .withName("mc", "gyver")
                    .withAnnualSalaryAndSuperRate(1200, 0)
                    .withPeriod("01 March", "31 March")
                    .get();
    expect(payslip).to.be.deep.eq({
      name : "Mc Gyver",
      grossIncome : 100,
      incomeTax : 0,
      netIncome : 100,
      super : 0,
      payPeriod : "Month of March (01 March to 31 March)"
    });
  });

});