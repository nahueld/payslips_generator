import { CONFIG } from './../../../config/config';
import { EmployeeResponseFactory } from './employee_response_factory';
import { EmployeesResponse } from './employees_response';

import { expect } from 'chai';

describe('EmployeeResponseFactory', () => {

  describe('create', () => {

    it('should create a valid EmployeesResponse', () => {
      let employees = [
        {
          firstName: "Charles",
          lastName: "Babbage",
          annualSalary: 60050,
          superRate: 9,
          startDate: "01 March",
          endDate : "31 March"
        }
      ];
  
      let externalResponse = {
        ok : true,
        code : 200,
        error : {
          message : ''
        }
      }

      let employeesResponse : EmployeesResponse = new EmployeeResponseFactory()
                                                    .withContent(employees)
                                                    .withExternalResponse(externalResponse)
                                                    .create();
      expect(employeesResponse.content).to.be.deep.eq(employees);
      expect(employeesResponse.error).to.be.eq(false);
      expect(employeesResponse.message).to.be.eq('');
      expect(employeesResponse.statusCode).to.be.eq(CONFIG.CODES.HTTP_OK);
    });

    it('should create an invalid EmployeesResponse due to invalid employee', () => {
      let employees = [
        {
          firstName: "",
          lastName: "Babbage",
          annualSalary: 60050,
          superRate: 9,
          startDate: "01 March",
          endDate : "31 March"
        }
      ];
  
      let externalResponse = {
        ok : true,
        code : 200,
        error : {
          message : ''
        }
      }

      let employeesResponse : EmployeesResponse = new EmployeeResponseFactory()
                                                    .withContent(employees)
                                                    .withExternalResponse(externalResponse)
                                                    .create();
      expect(employeesResponse.content).to.be.deep.eq(employees);
      expect(employeesResponse.error).to.be.eq(true);
      expect(employeesResponse.message).to.be.eq('{"key":"validateFirstName","valid":false}');
      expect(employeesResponse.statusCode).to.be.eq(CONFIG.CODES.HTTP_BAD_REQUEST);
    });

    it('should create an invalid EmployeesResponse due to invalid external response', () => {
      let employees = [];
  
      let externalResponse = {
        ok : false,
        code : 500,
        error : {
          message : 'Something went wrong'
        }
      }

      let employeesResponse : EmployeesResponse = new EmployeeResponseFactory()
                                                    .withContent(employees)
                                                    .withExternalResponse(externalResponse)
                                                    .create();
      expect(employeesResponse.content).to.be.deep.eq(employees);
      expect(employeesResponse.error).to.be.eq(true);
      expect(employeesResponse.message).to.be.eq('Something went wrong');
      expect(employeesResponse.statusCode).to.be.eq(500);
    });

  });

});