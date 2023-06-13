import {debounceTime, MonoTypeOperatorFunction, Observable} from "rxjs";

export function optionalDebounce<T>(time?: number): MonoTypeOperatorFunction<any> {
  return function<T>(source: Observable<T>): Observable<T> {
    return time === undefined ? source : source.pipe(debounceTime(time));
  };
}
