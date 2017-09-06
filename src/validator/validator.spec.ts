import { Validator} from './validator';
import { PayslipValidator} from './payslip_validator';

import { expect } from 'chai';

describe('Validator', () => {
  
    describe('validate', () => {
  
      describe('PayslipValidator', () => {

        it('should identify valid Payslip', () => {
          let validation = Validator.validate(PayslipValidator, {
            name : "juan",
            grossIncome : 1000,
            incomeTax : 500,
            netIncome : 1500,
            super : 50,
            payPeriod : "Period"
          });
          expect(validation.valid).to.be.eq(true);
        });

        it('should identify invalid name in Payslip', () => {
          let validation = Validator.validate(PayslipValidator, {
            name : "",
            grossIncome : 1000,
            incomeTax : 500,
            netIncome : 1500,
            super : 5,
            payPeriod : "Period"
          });
          expect(validation.valid).to.be.eq(false);
          expect(validation.key).to.be.eq('validateName');
        });

        it('should identify invalid grossIncome in Payslip', () => {
          let validation = Validator.validate(PayslipValidator, {
            name : "juan",
            grossIncome : -1,
            incomeTax : 500,
            netIncome : 1500,
            super : 5,
            payPeriod : "Period"
          });
          expect(validation.valid).to.be.eq(false);
          expect(validation.key).to.be.eq('validateGrossIncome');
        });

        it('should identify invalid incomeTax in Payslip', () => {
          let validation = Validator.validate(PayslipValidator, {
            name : "juan",
            grossIncome : 1,
            incomeTax : "50",
            netIncome : 1500,
            super : 5,
            payPeriod : "Period"
          });
          expect(validation.valid).to.be.eq(false);
          expect(validation.key).to.be.eq('validateIncomeTax');
        });

        it('should identify invalid netIncome in Payslip', () => {
          let validation = Validator.validate(PayslipValidator, {
            name : "juan",
            grossIncome : 1000,
            incomeTax : 500,
            netIncome : -1,
            super : 5,
            payPeriod : "Period"
          });
          expect(validation.valid).to.be.eq(false);
          expect(validation.key).to.be.eq('validateNetIncome');
        });

        it('should identify invalid super in Payslip', () => {
          let validation = Validator.validate(PayslipValidator, {
            name : "juan",
            grossIncome : 1000,
            incomeTax : 500,
            netIncome : 1,
            super : -1,
            payPeriod : "Period"
          });
          expect(validation.valid).to.be.eq(false);
          expect(validation.key).to.be.eq('validateSuper');
          
        });

        it('should identify invalid period in Payslip', () => {
          let validation = Validator.validate(PayslipValidator, {
            name : "juan",
            grossIncome : 1000,
            incomeTax : 500,
            netIncome : 1,
            super : 50,
            payPeriod : ""
          });
          expect(validation.valid).to.be.eq(false);
          expect(validation.key).to.be.eq('validatePayPeriod');
        });
        
      });
  
    });
  
  });