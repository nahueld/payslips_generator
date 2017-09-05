import { NameUtil } from './name_util';
import { expect } from 'chai';

describe('NameUtil', () => {

  describe('getName', () => {

    it('should return formatted names', () => {
      expect(NameUtil.getName(["nAhUel", "matIas", "DEALBERA"])).to.be.eq("Nahuel Matias Dealbera");
    });

  });

});