import {filter, MonoTypeOperatorFunction} from "rxjs";

/**
 * Custom RxJS operator that filters out null and undefined values
 * @returns {(source: Observable<T>) => Observable<T>} The operator function to be applied to the source observable.
 * @example
 * of(1, 2, 3, null, undefined).pipe(filterNil()).subscribe()
 * // 1, 2, 3
 */
export function filterNil(): MonoTypeOperatorFunction<any> {
  return filter(value => value !== undefined && value !== null)
}
