import { Employee } from './../model/employee/employee';
import * as _ from 'lodash';

export const EmployeeValidator = {

  validateFirstName : (employee : Employee) : boolean => {
    return _.hasIn(employee, 'firstName') && !_.isEmpty(employee.firstName);
  },

  validateLastName : (employee : Employee) : boolean => {
    return _.hasIn(employee, 'lastName') && !_.isEmpty(employee.lastName);
  },

  validateAnnualSalary : (employee : Employee) : boolean => {
    return _.hasIn(employee, 'annualSalary') && _.isNumber(employee.annualSalary) && employee.annualSalary >= 0;
  },

  validateSuperRate : (employee : Employee) : boolean => {
    return _.hasIn(employee, 'superRate') && _.isNumber(employee.superRate) && employee.superRate >= 0 && employee.superRate <= 50;
  },

  validateStartDate : (employee : Employee) : boolean => {
    return _.hasIn(employee, 'startDate') && !_.isEmpty(employee.startDate);
  },

  validateEndDate : (employee : Employee) : boolean => {
    return _.hasIn(employee, 'endDate') && !_.isEmpty(employee.endDate);    
  }

}