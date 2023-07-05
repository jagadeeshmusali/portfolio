import { Observable, timer } from 'rxjs';
import { mergeMap, retryWhen, takeWhile } from 'rxjs/operators';

/**
 * Custom RxJS operator that retries the source observable with an increasing delay based on a backoff strategy.
 * ```typescript
 * this.httpClient.get('url')
 * .pipe(retryWithBackoff(3, 1000, 3))
 * .subscribe((response) => {
 *  // Do something with the response
 *  });
 *  ```
 * @template T The type of values emitted by the source observable.
 * @param {number} maxRetry The maximum number of retry attempts. If not specified, defaults to 3.
 * @param {number} initialDelay The initial delay before the first retry in milliseconds. If not specified, defaults to 1000.
 * @param {number} backoffFactor The factor by which the delay increases for each subsequent retry. If not specified, defaults to 3.
 * @returns {(source: Observable<T>) => Observable<T>} The operator function to be applied to the source observable.
 */
export function retryWithBackoff<T>(maxRetry: number = 3, initialDelay: number = 1000, backoffFactor: number = 3): (source: Observable<T>) => Observable<T> {
  /**
   * Operator function that retries the source observable with an increasing delay based on a backoff strategy.
   *
   * @param {Observable<T>} source The source observable to apply the retry logic to.
   * @returns {Observable<T>} The modified observable with the retry logic applied.
   */
  return (source: Observable<T>) =>
    source.pipe(
      retryWhen((errors) =>
        errors.pipe(
          mergeMap((error, attempt) => {
            const retryAttempt = attempt + 1;
            if (retryAttempt > maxRetry) {
              throw error; // Throw the error if max retries exceeded
            }
            const delay = initialDelay * Math.pow(backoffFactor, retryAttempt); // Calculate the delay using backoff factor
            return timer(delay); // Delay the retry attempt
          }),
          takeWhile((_, attempt) => attempt < maxRetry)
        )
      )
    );
}
