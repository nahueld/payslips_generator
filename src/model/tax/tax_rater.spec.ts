import { TaxRater } from './tax_rater';
import { expect } from 'chai';

describe('TaxRater', () => {
  
    describe('calculate', () => {
  
      it('should calculate tax for salary $0', () => {
        expect(TaxRater.calculate(0)).to.be.eq(0);
      });

      it('should calculate tax for salary $18200', () => {
        expect(TaxRater.calculate(18200)).to.be.eq(0);
      });

      it('should calculate tax for salary $18201', () => {
        expect(TaxRater.calculate(18201)).to.be.eq(0);
      });

      it('should calculate tax for salary $37000', () => {
        expect(TaxRater.calculate(37000)).to.be.eq(298);
      });

      it('should calculate tax for salary $37001', () => {
        expect(TaxRater.calculate(37001)).to.be.eq(298);
      });

      it('should calculate tax for salary $87000', () => {
        expect(TaxRater.calculate(87000)).to.be.eq(1652);
      });

      it('should calculate tax for salary $87001', () => {
        expect(TaxRater.calculate(87001)).to.be.eq(1652);
      });

      it('should calculate tax for salary $180000', () => {
        expect(TaxRater.calculate(180000)).to.be.eq(4519);
      });

      it('should calculate tax for salary $180001', () => {
        expect(TaxRater.calculate(180001)).to.be.eq(4519);
      });

      it('should calculate tax for salary $200000', () => {
        expect(TaxRater.calculate(200000)).to.be.eq(5269);
      });
  
    });
  
  });