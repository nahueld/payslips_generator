import { Payslip } from './../../payslip/payslip';
import { IResponse } from './../iresponse';

export class PayslipsResponse implements IResponse {
  statusCode : number;
  error : boolean;
  message : string;
  content : Payslip[];
} 