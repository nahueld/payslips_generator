import * as _ from "lodash";

export class NameUtil {

  static getName(names : string[]) : string {
    return _.chain(names)
            .map(n => _.capitalize(n))
            .join(' ')
            .value();
  }

}