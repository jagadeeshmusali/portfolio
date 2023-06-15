import {distinctUntilChanged, filter, map, MonoTypeOperatorFunction, Observable} from "rxjs";

/**
 * Custom RxJS operator that returns if all input observables are truthy
 * @returns {(source: Observable<T>) => Observable<T>} The operator function to be applied to the source observable.
 * @example
 * const conditions$ = combineLatest([conditionA$, conditionB$, conditionC$])
 * .pipe(every())
 *  .subscribe(([conditionA$, conditionB$, conditionC$]) => {
 *    // Do something if all conditions are true
 *  })
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
