import { expect } from 'chai';
import { CONFIG } from './../../../../config/config';
import { EmployeeResponseConverter } from './employee_converter';
describe('EmployeeConverter', () => {

  describe('convert', () => {

    it('should convert an external response', () => {
      let externalResponse = {
        ok : true,
        code : 200,
        error : {
          message : ''
        },
        body: {
          employees : [
            {
              firstName: "Robert",
              lastName: "Babbage",
              annualSalary: 60050,
              superRate: 9,
              startDate: "01 March",
              endDate : "31 March"
            }
          ]
        } 
      }
      let converted = new EmployeeResponseConverter()
                            .convert(externalResponse);
      expect(converted.statusCode).to.be.eq(CONFIG.CODES.HTTP_OK);
      expect(converted.error).to.be.eq(false);
      expect(converted.message).to.be.eq('');
      expect(converted.content).to.be.deep.eq(externalResponse.body.employees);
    });

  });

});