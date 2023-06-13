import {distinctUntilChanged, filter, map, MonoTypeOperatorFunction, Observable} from "rxjs";

/**
 * Returns if at least one input value is truthy
 */
export function some<T>(): MonoTypeOperatorFunction<any> {
  return (source$: Observable<any[]>): Observable<any> =>
    source$.pipe(
      map((values: any[]) => ({
        some: values.some((v) => !!v),
        values,
      })),
      filter((v) => v.some),
      map((v) => v.values),
    )
}
