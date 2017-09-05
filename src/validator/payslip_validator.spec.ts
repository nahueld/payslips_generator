import { PayslipValidator } from './payslip_validator';
import { expect } from 'chai';

describe('PayslipValidator', () => {

  describe('validate', () => {

    it('should return valid', () => {
      console.log(PayslipValidator.validate({}));
      expect(PayslipValidator.validate({})).to.be.eq(true);
    });

  });

});