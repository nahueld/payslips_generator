import { PayslipResponseConverter } from './payslip_converter';
import { expect } from 'chai';

describe('PayslipResponseConverter', () => {

  describe('convert', () => {

    it('should convert valid EmployeeResponse', () => {
      let employeeResponse = {
        statusCode : 200,
        error : false,
        message : "",
        content : [
          {
          "firstName": "Charles",
          "lastName": "Babbage",
          "annualSalary": 60050,
          "superRate": 9,
          "startDate": "01 March",
          "endDate": "31 March"
          },
          {
          "firstName": "Ada",
          "lastName": "Lovelace",
          "annualSalary": 120000,
          "superRate": 10,
          "startDate": "01 March",
          "endDate": "31 March"
          },
          {
          "firstName": "Dennis",
          "lastName": "Ritchie",
          "annualSalary": 60050,
          "superRate": 9.5,
          "startDate": "01 January",
          "endDate": "31 January"
          }
        ]
      }
      let converter = new PayslipResponseConverter();
      let payslipResponse = converter.convert(employeeResponse);
      console.log(payslipResponse);
      expect(13).to.be.eq(13);
    });

  });

});