import {filter, fromEvent, MonoTypeOperatorFunction, Observable, repeatWhen, shareReplay, takeUntil} from "rxjs";
import {pageHidden$, pageVisible$} from "../observables";

export function whenPageVisible(): MonoTypeOperatorFunction<any> {
  return function <T>(source: Observable<T>) {
    return source.pipe(
      takeUntil(pageHidden$),
      repeatWhen(() => pageVisible$)
    )
  }
}
