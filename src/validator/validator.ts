
import * as _ from "lodash";

export class Validator {

  static validate(validator: any, objectToValidate: any): Validation {
    return _.keysIn(validator)
            .map(v => { return <Validation>{ key : v, valid : validator[v](objectToValidate)} })
            .find((v) => !v.valid) || <Validation>{ key : '', valid: true };
  }

}

export interface Validation {
  key : string,
  valid : boolean
}
