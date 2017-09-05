import { DateUtil } from './date_util';
import { expect } from 'chai';

describe('DateUtil', () => {

  describe('getPayPeriod', () => {

    it('should return March period', () => {
      expect(DateUtil.getPayPeriod("01 March","31 March")).to.be.eq("Month of March (01 March to 31 March)");
    });

  });

});