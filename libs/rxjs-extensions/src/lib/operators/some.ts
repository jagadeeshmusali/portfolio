import {distinctUntilChanged, filter, map, MonoTypeOperatorFunction, Observable} from "rxjs";

/**
 * Custom RxJS operator that returns if any input observables are truthy
 * @returns {(source: Observable<T>) => Observable<T>} The operator function to be applied to the source observable.
 * @example
 * const conditions$ = combineLatest([conditionA$, conditionB$, conditionC$])
 * .pipe(some())
 * .subscribe(([conditionA$, conditionB$, conditionC$]) => {
 *  // Do something if any conditions are true
 *  })
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
