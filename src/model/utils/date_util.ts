import * as _ from "lodash";

export class DateUtil {

  static getPayPeriod(startDate : string, endDate : string) : string {
    return _.chain([])
              .concat(this.getMonth(startDate))
              .concat(this.getPeriod(startDate, endDate))
              .join(' ')
              .value();
  }

  private static getMonth(date : string) : string {
    return _.chain(date)
            .split(' ')
            .takeRight()
            .thru(s => `Month of ${s}`)
            .value();
  }

  private static getPeriod(startDate : string , endDate : string) : string {
    return `(${startDate} to ${endDate})`;
  }

}