import { EmployeeDetailsService } from './service/employee_details_service';

import * as express from 'express';

var app = express();

app.get('/', function(req, res) {
 EmployeeDetailsService
  .get()
  .then(response => res.send(response))
  .catch(response => res.send(response));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});