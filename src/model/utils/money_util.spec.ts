import { MoneyUtil } from './money_util';
import { expect } from 'chai';

describe('MoneyUtil', () => {

  describe('round', () => {

    it('should return 0', () => {
      expect(MoneyUtil.round(0)).to.be.eq(0);
    });

    it('should return the same number', () => {
      expect(MoneyUtil.round(1)).to.be.eq(1);
    });

    it('should round up', () => {
      expect(MoneyUtil.round(1.50)).to.be.eq(2);
    });

    it('should round down', () => {
      expect(MoneyUtil.round(1.49)).to.be.eq(1);
    });

  });

});