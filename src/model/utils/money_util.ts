import * as _ from 'lodash';

export class MoneyUtil {
  
  static round(money : number) {
    return _.chain(money)
            .tap(m => m.toString())
            .split('.')
            .takeRight()
            .toNumber()
            .thru(n => this.enforceTwoDecimals(n))
            .thru(cent => this.roundMoneyByCent(money,cent))
            .value();
  }

  private static roundMoneyByCent(money : number , cent : number) : number {
    return cent >= 50 ? _.chain(money).add(1).floor().value() 
                      : _.chain(money).toSafeInteger().value()
  }

  private static enforceTwoDecimals(cent : number) : number {
    return cent < 10 ? cent * 10 : cent;
  }


}