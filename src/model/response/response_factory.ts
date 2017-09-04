import { IConverter } from './converter/iconverter';
import { IResponse } from './iresponse';

export class ResponseFactory {

  response : IResponse;
  converter : IConverter;
  unirestResponse : any;

  constructor() {
  }

  withUnirestResponse(unirestResponse) : ResponseFactory {
    this.unirestResponse = unirestResponse;
    return this;
  }

  build<C extends IConverter>(converter : new() => C) : IResponse {
    return new converter().convert(this.unirestResponse);
  }

}