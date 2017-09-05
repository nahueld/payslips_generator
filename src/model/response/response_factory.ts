import { IConverter } from './converter/iconverter';
import { IResponse } from './iresponse';

export class ResponseFactory {

  response : IResponse;
  converter : IConverter;

  constructor() {
  }

  withResponse(response) : ResponseFactory {
    this.response = response;
    return this;
  }

  build<C extends IConverter>(converter : new() => C) : IResponse {
    return new converter().convert(this.response);
  }

}