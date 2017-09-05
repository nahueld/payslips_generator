import * as express from 'express';
import * as employee from './controllers/employee';
import * as payslip from './controllers/payslip';
import * as home from './controllers/home';
import { Config } from './config/config';

var app = express();

//app routes
app.get('/', home.index);

//app api routes
app.get(Config.ROUTES.PAYSLIPS, payslip.get);

//start server
app.listen(Config.PORT, () => console.log('Server started.'));