import {concatMapTo, MonoTypeOperatorFunction, Observable, timer} from "rxjs"


/**
 * Custom RxJS operator that polls the source observable at a given interval.
 * ```typescript
 * this.httpClient.get('url')
 *  .pipe(poll(10000))
 *  .subscribe((response) => {
 *  // Do something with the response every 10 seconds
 *  // This is the same as using the interval() operator and then using concatMapTo()
 *  });
 * ```
 * @param {number} period The interval at which to poll the source observable.
 * @param {number} initialDelay The initial delay before starting the polling in milliseconds. If not specified, defaults to 0.
 */
export function poll(period: number, initialDelay = 0): MonoTypeOperatorFunction<any> {
  return function<T>(source: Observable<T>) {
    return timer(initialDelay, period).pipe(concatMapTo(source))
  }
}
