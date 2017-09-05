import * as express from 'express';
import * as employee from './controllers/employee';
import * as payslip from './controllers/payslip';
import * as home from './controllers/home';
import { CONFIG } from './config/config';

var app = express();

//app routes
app.get('/', home.index);

//app api routes
app.get(CONFIG.ROUTES.PAYSLIPS, payslip.get);

//start server
app.listen(CONFIG.PORT, () => console.log('Server started.'));