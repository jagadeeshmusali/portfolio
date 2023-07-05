import {MonoTypeOperatorFunction, tap} from "rxjs";

/**
 * Custom RxJS operator that logs the next, error and complete events for debugging purposes
 * @param {string} tag The tag to use for the log messages. Defaults to 'Debug'.
 * @returns {(source: Observable<T>) => Observable<T>} The operator function to be applied to the source observable.
 * @example
 * of(1, 2, 3).pipe(debug('MyTag')).subscribe()
 * // [MyTag: Next] 1
 * // [MyTag: Next] 2
 * // [MyTag: Next] 3
 * // [MyTag]: Complete
 * @example
 * of(1, 2, 3).pipe(debug()).subscribe()
 * // [Debug: Next] 1
 * // [Debug: Next] 2
 * // [Debug: Next] 3
 * // [Debug]: Complete
 */

export function debug(tag: string = 'Debug'): MonoTypeOperatorFunction<any> {
  return tap({
    next(value) {
      console.log(`%c[${tag}: Next]`, "background: #009688; color: #fff; padding: 3px; font-size: 9px;", value)
    },
    error(error) {
      console.log(`%[${tag}: Error]`, "background: #E91E63; color: #fff; padding: 3px; font-size: 9px;", error)
    },
    complete() {
      console.log(`%c[${tag}]: Complete`, "background: #00BCD4; color: #fff; padding: 3px; font-size: 9px;")
    }
  })
}
