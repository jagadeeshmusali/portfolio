import {concatMapTo, MonoTypeOperatorFunction, Observable, timer} from "rxjs"

export function poll(period: number, initialDelay = 0): MonoTypeOperatorFunction<any> {
  return function<T>(source: Observable<T>) {
    return timer(initialDelay, period).pipe(concatMapTo(source))
  }
}
