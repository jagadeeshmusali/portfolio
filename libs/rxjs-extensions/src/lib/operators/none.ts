import {distinctUntilChanged, filter, map, MonoTypeOperatorFunction, Observable} from "rxjs";

/**
 * Returns a truthy observable if no input values are truthy
 */
export function none<T>(): MonoTypeOperatorFunction<any> {
  return (source$: Observable<any[]>): Observable<any> =>
    source$.pipe(
      map((values: any[]) => ({
        none: values.some((v) => !!v),
        values,
      })),
      filter((v) => !v.none),
      map((v) => v.values),
    )
}
