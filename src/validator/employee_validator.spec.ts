import { EmployeeValidator } from './employee_validator';
import { Validator} from './validator';

import { expect } from 'chai';

describe('Validator', () => {
  
    describe('validate', () => {
 
      describe('EmployeeValidator', () => {

        it('should identify valid Employee', () => {
          let validation = Validator.validate(EmployeeValidator, {
            firstName : "john",
            lastName : "snow",
            annualSalary : 50000,
            superRate : 50,
            startDate : "01 March",
            endDate : "31 March"
          });
          expect(validation.valid).to.be.eq(true);
        });

        it('should identify invalid firstName in Employee', () => {
          let validation = Validator.validate(EmployeeValidator, {
            firstName : "",
            lastName : "snow",
            annualSalary : 50000,
            superRate : 50,
            startDate : "01 March",
            endDate : "31 March"
          });
          expect(validation.valid).to.be.eq(false);
          expect(validation.key).to.be.eq('validateFirstName');
        });

        it('should identify invalid lastName in Employee', () => {
          let validation = Validator.validate(EmployeeValidator, {
            firstName : "john",
            lastName : "",
            annualSalary : 50000,
            superRate : 50,
            startDate : "01 March",
            endDate : "31 March"
          });
          expect(validation.valid).to.be.eq(false);
          expect(validation.key).to.be.eq('validateLastName');
        });

        describe('should identify invalid annualSalary in Employee', () => {

          it('when annualSalary is float salary', () => {
            let validation = Validator.validate(EmployeeValidator,  {
              firstName : "john",
              lastName : "snow",
              annualSalary : 10.5,
              superRate : 50,
              startDate : "01 March",
              endDate : "31 March"
            });

            expect(validation.valid).to.be.eq(false);
            expect(validation.key).to.be.eq('validateAnnualSalary');
          });

          it('when annualSalary is negative salary', () => {
            let validation = Validator.validate(EmployeeValidator,  {
              firstName : "john",
              lastName : "snow",
              annualSalary : -10,
              superRate : 50,
              startDate : "01 March",
              endDate : "31 March"
            });

            expect(validation.valid).to.be.eq(false);
            expect(validation.key).to.be.eq('validateAnnualSalary');
          });

          it('when annualSalary is non-numeric salary', () => {
            let validation = Validator.validate(EmployeeValidator,  {
              firstName : "john",
              lastName : "snow",
              annualSalary : "$10",
              superRate : 50,
              startDate : "01 March",
              endDate : "31 March"
            });

            expect(validation.valid).to.be.eq(false);
            expect(validation.key).to.be.eq('validateAnnualSalary');
          });
          
        });

        describe('should identify invalid superRate in Employee', () => {

          it('when superRate is negative', () => {
            let validation = Validator.validate(EmployeeValidator,  {
              firstName : "john",
              lastName : "snow",
              annualSalary : 50000,
              superRate : -1,
              startDate : "01 March",
              endDate : "31 March"
            });
            expect(validation.valid).to.be.eq(false);
            expect(validation.key).to.be.eq('validateSuperRate');
          });

          it('when superRate is greater than 50', () => {
            let validation = Validator.validate(EmployeeValidator,  {
              firstName : "john",
              lastName : "snow",
              annualSalary : 50000,
              superRate : 51,
              startDate : "01 March",
              endDate : "31 March"
            });
            expect(validation.valid).to.be.eq(false);
            expect(validation.key).to.be.eq('validateSuperRate');
          });
         
        });

        it('should identify invalid startDate in Employee', () => {
          let validation = Validator.validate(EmployeeValidator, {
            firstName : "john",
            lastName : "snow",
            annualSalary : 50000,
            superRate : 50,
            startDate : "",
            endDate : "31 March"
          });
          expect(validation.valid).to.be.eq(false);
          expect(validation.key).to.be.eq('validateStartDate');
          
        });

        it('should identify invalid endDate in Employee', () => {
          let validation = Validator.validate(EmployeeValidator, {
            firstName : "john",
            lastName : "snow",
            annualSalary : 50000,
            superRate : 50,
            startDate : "01 March",
            endDate : ""
          });
          expect(validation.valid).to.be.eq(false);
          expect(validation.key).to.be.eq('validateEndDate');
        });
        
      });
  
    });
  
  });