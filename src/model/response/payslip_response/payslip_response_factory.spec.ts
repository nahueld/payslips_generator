import { CONFIG } from './../../../config/config';
import { PayslipsResponse } from './payslips_response';
import { PayslipResponseFactory } from './payslip_response_factory';
import { expect } from 'chai';

describe('PayslipResponseFactory', () => {

  describe('create', () => {

    it('should create a valid PayslipsResponse', () => {
      let payslips = [
        {
          name : "Juan",
          grossIncome : 1000,
          incomeTax : 10,
          netIncome : 90,
          super : 10,
          payPeriod : "March",
        }
      ]
      let payslipsResponse : PayslipsResponse = new PayslipResponseFactory()
                                                  .withContent(payslips)
                                                  .create();
      expect(payslipsResponse.content).to.be.deep.eq(payslips);
      expect(payslipsResponse.error).to.be.eq(false);
      expect(payslipsResponse.message).to.be.eq('');
      expect(payslipsResponse.statusCode).to.be.eq(CONFIG.CODES.HTTP_OK);
    });

    it('should create an invalid PayslipsResponse', () => {
      let payslips = [
        {
          name : "",
          grossIncome : 1000,
          incomeTax : 10,
          netIncome : 90,
          super : 10,
          payPeriod : "March",
        }
      ]
      let payslipsResponse : PayslipsResponse = new PayslipResponseFactory()
                                                  .withContent(payslips)
                                                  .create();
      expect(payslipsResponse.content).to.be.deep.eq(payslips);
      expect(payslipsResponse.error).to.be.eq(true);
      expect(payslipsResponse.message).to.be.eq('{"key":"validateName","valid":false}');
      expect(payslipsResponse.statusCode).to.be.eq(CONFIG.CODES.HTTP_BAD_REQUEST);
    });

    it('should create a nvalid PayslipsResponse with empty array', () => {
      let payslips = []
      let payslipsResponse : PayslipsResponse = new PayslipResponseFactory()
                                                  .withContent(payslips)
                                                  .create();
      expect(payslipsResponse.content).to.be.deep.eq(payslips);
      expect(payslipsResponse.error).to.be.eq(false);
      expect(payslipsResponse.message).to.be.eq('');
      expect(payslipsResponse.statusCode).to.be.eq(CONFIG.CODES.HTTP_OK);
    });

  });

});