import { Payslip } from './../payslip/payslip';
import { IResponse } from "./iresponse";

export class PayslipsResponse implements IResponse {
  statusCode : string;
  error : boolean;
  message : string;
  content : Payslip[];
} 