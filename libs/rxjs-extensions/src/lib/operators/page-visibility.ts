import {filter, fromEvent, MonoTypeOperatorFunction, Observable, repeatWhen, shareReplay, takeUntil} from "rxjs";
import {pageHidden$, pageVisible$} from "../observables";

/**
 * Custom RxJS operator that unsubscribes from the source observable when the page is hidden.
 * When the page becomes visible again, the operator will resubscribe to the source observable.
 * Useful for polling observables that should only be active when the page is visible.
 * ```typescript
 * this.httpClient.get('url')
 * .pipe(
 *   poll(10000),
 *   whenPageVisible()
 * )
 * .subscribe((response) => {
 * // Do something with the response every 10 seconds when the page is visible
 * // Unsubscribes from the source observable when the page is hidden
 * // Resubscribes to the source observable when the page is visible again
 * });
 */

export function whenPageVisible(): MonoTypeOperatorFunction<any> {
  return function <T>(source: Observable<T>) {
    return source.pipe(
      takeUntil(pageHidden$),
      repeatWhen(() => pageVisible$)
    )
  }
}
