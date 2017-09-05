import { EmployeeResponseConverter } from './../model/response/converter/employee_converter';
import { IResponse } from './../model/response/iresponse';
import { ResponseFactory } from './../model/response/response_factory';
import * as unirest from 'unirest';

export class EmployeeDetailsService {

  private static endpoint : string =  "https://7annld7mde.execute-api.ap-southeast-2.amazonaws.com/main/employees";

  public static get() : Promise<IResponse> {
    return new Promise((resolve, reject) => {
      unirest
      .get(this.endpoint)
      .end((r) => {
        let response : IResponse = new ResponseFactory()
                                    .withResponse(r)
                                    .build(EmployeeResponseConverter);
        return response.error ? reject(response) : resolve(response);
      });
    });
  }

}