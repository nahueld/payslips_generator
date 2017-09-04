import { Employee } from './../employee/employee';
import { IResponse } from "./iresponse";

export class EmployeesResponse implements IResponse {
  statusCode : string;
  error : boolean;
  message : string;
  content : Employee[];
} 