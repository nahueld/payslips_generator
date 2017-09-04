import { SalaryCalculator } from './salary_calculator';
import { expect } from 'chai';

describe('SalaryCalculator', () => {

  describe('grossIncome', () => {

    it('should obtain grossIncome and round down', () => {
      expect(SalaryCalculator.grossIncome(150)).to.be.eq(13);
    });

    it('should obtain grossIncome and round up', () => {
      expect(SalaryCalculator.grossIncome(149.88)).to.be.eq(12);
    });

  });

  describe('netIncome', () => {
    
    it('should obtain netIncome and round up', () => {
      expect(SalaryCalculator.netIncome(150, 10.5)).to.be.eq(140);
    });

    it('should obtain netIncome and round down', () => {
      expect(SalaryCalculator.netIncome(150,10.51)).to.be.eq(139);
    });
    
  });

  describe('super', () => {
    
    it('should obtain super and round up', () => {
      expect(SalaryCalculator.super(15.5, 10)).to.be.eq(2);
    });

    it('should obtain super and round down', () => {
      expect(SalaryCalculator.super(14,10)).to.be.eq(1);
    });
    
  });

});