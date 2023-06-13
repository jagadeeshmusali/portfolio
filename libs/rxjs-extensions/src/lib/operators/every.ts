import {distinctUntilChanged, filter, map, MonoTypeOperatorFunction, Observable} from "rxjs";

/**
 * Returns if all input values are truthy
 */
export function every<T>(): MonoTypeOperatorFunction<any> {
  return (source$: Observable<any[]>): Observable<any> =>
    source$.pipe(
      map((values: any[]) => ({
        every: !values.some((v) => !v),
        values,
      })),
      filter((v) => v.every),
      map((v) => v.values)
    )
}
