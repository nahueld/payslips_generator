export class CONFIG {

  static PORT = 3000;

  static ROUTES = {
    PAYSLIPS : '/api/payslips',
    EMPLOYEE_DETAILS : 'https://7annld7mde.execute-api.ap-southeast-2.amazonaws.com/main/employees'
  };

  static CODES = {
    HTTP_OK : 200,
    HTTP_BAD_REQUEST : 400
  }

}