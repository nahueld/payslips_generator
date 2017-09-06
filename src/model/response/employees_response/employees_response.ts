import { Employee } from './../../employee/employee';
import { IResponse } from './../iresponse';

export class EmployeesResponse implements IResponse {
  statusCode : number;
  error : boolean;
  message : string;
  content : Employee[];
} 