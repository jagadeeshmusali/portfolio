import {distinctUntilChanged, filter, map, MonoTypeOperatorFunction, Observable} from "rxjs";

/**
 * Custom RxJS operator that returns if all input observables are falsy
 * @returns {(source: Observable<T>) => Observable<T>} The operator function to be applied to the source observable.
 * @example
 * const conditions$ = combineLatest([conditionA$, conditionB$, conditionC$])
 * .pipe(none())
 * .subscribe(([conditionA$, conditionB$, conditionC$]) => {
 *   // Do something if all conditions are false
 *   // This is the same as using the every() operator and inverting the result
 *   // of the emitted array
 *   // See the every() operator for an example
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
