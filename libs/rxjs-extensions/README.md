# rxjs-extensions

Shared library providing extensions to RxJS.


## Installation

Use `npm` to install the package

    npm i ngx-rxjs-extensions

# Operators and Usage:

### 1. When Page Visible: `whenPageVisible`
Custom RxJS operator that unsubscribes from the source observable when the page is hidden.
When the page becomes visible again, the operator will resubscribe to the source observable.
Useful for polling observables that should only be active when the page is visible.
A typical example might be user notifications, alerts, or to verify that the current user session hasn’t expired.
> **Note:** We should always strive to interrupt the server as little as possible so that it is able serve other users more efficiently. This operators helps the case.

```javascript
import { whenPageVisible } from 'ngx-rxjs-extensions';
import {fromEvent} from "rxjs";

this.httpClient.get('url')
  .pipe(whenPageVisible())
  .subscribe(response => {
      // Val will be the response from the server when the page is visible.
      // The observable will be unsubscribed when the page is hidden.
      // Resubscribed when the page is visible again.
  });

```

### 2. Poll: `poll`

Custom RxJS operator that polls the source observable at a given interval.

```javascript
import { poll } from 'ngx-rxjs-extensions';

this.httpClient.get('url')
  .pipe(poll(10000))
  .subscribe((response) => {
    // Do something with the response every 10 seconds
  });

```

### 3. Retry: `retry`

Custom RxJS operator that retries the source observable with an increasing delay based on a backoff strategy.

```javascript
import { retryWithBackoff } from 'ngx-rxjs-extensions';

const maxRetry = 3;
const initialDelay = 1000;
const backoffFactor = 3;

this.httpClient.get('url')
  .pipe(retryWithBackoff(maxRetry, initialDelay, backoffFactor))
  .subscribe((response) => {
    // Do something with the response
  });

```

`maxRetry` : The maximum number of retry attempts. If not specified, defaults to 3

`initialDelay` : The initial delay before the first retry in milliseconds. If not specified, defaults to 1000.

`backoffFactor` : The factor by which the delay increases for each subsequent retry. If not specified, defaults to 3.

### 4. Page Visibility Change: `visibilityChange$`

`Observable` that emits when the page is `visible` or `hidden`.

If you would like to get notified when the user switches tabs, minimizes the window.


```javascript
import { visibilityChange$ } from 'ngx-rxjs-extensions';

visibilityChange$.subscribe((event) => {
  if (document.visibilityState === 'visible') {
    console.log('Page is now visible');
    // Perform actions when the page becomes visible
  } else {
    console.log('Page is now hidden');
    // Perform actions when the page becomes hidden
  }
});
```

### 5. Page Visible: `pageVisible$`

`Observable` that emits when the page is `visible`.

If you would like to get notified when the user is back to the application window or maximized it.
It also emits when user is back to the application window from a different tab.


```javascript
import { pageVisible$ } from 'ngx-rxjs-extensions';

pageVisible$.subscribe((event) => {
  console.log('Page is now visible');
  // Perform actions when the page becomes visible
});
```

### 6. Page Hidden: `pageHidden$`

`Observable` that emits when the page is `hidden`.

If you would like to get notified when the user switches tabs, minimizes the window.


```javascript
import { pageVisible$ } from 'ngx-rxjs-extensions';

pageVisible$.subscribe((event) => {
  console.log('Page is now visible');
  // Perform actions when the page becomes visible
});
```

### 7. Debug: `debug`

Custom operator to log the values emitted by the observable.
Helpful when you want to debug the values emitted by the observable.

```javascript
import { debug } from 'ngx-rxjs-extensions';

of(1, 2, 3)
  .pipe(debug())
  .subscribe()
});
// [Debug: Next] 1
// [Debug: Next] 2
// [Debug: Next] 3
// [Debug]: Complete
```

> **Note:** If you would like to see custom tag in the console, you can pass the `tag` as an argument to the `debug` operator. For eg: `debug('sampleTagName')`

### 8. Every: `every`

Custom RxJS operator that returns if all input observables are truthy.
Helpful for scenarios when you want to execute a function only when all the observables are truthy.

```javascript
import { every } from 'ngx-rxjs-extensions';
import {combineLatest} from "rxjs";

combineLatest([observableA$, observableB$, observableC$])
  .pipe(every())
  .subscribe(([valA, valB, valC]) => {
      // Do something when all conditions are truthy
  });
```

> **Note:** `combineLatest` is used just for the example. You can use any operator that emits multiple values and thn pipe the `every` operator.


### 9. Some: `some`

Custom RxJS operator that returns if any of the input observables are truthy.
Helpful for scenarios when you want to execute a function only when any of the observables are truthy.

```javascript
import { some } from 'ngx-rxjs-extensions';
import {combineLatest} from "rxjs";

combineLatest([observableA$, observableB$, observableC$])
  .pipe(some())
  .subscribe(([valA, valB, valC]) => {
      // Do something if any conditions are true
  });
```
> **Note:** `combineLatest` is used just for the example. You can use any operator that emits multiple values and thn pipe the `some` operator.

### 10. None: `none`

Custom RxJS operator that returns if all input observables are falsy.

```javascript
import { some } from 'ngx-rxjs-extensions';
import {combineLatest} from "rxjs";

combineLatest([observableA$, observableB$, observableC$])
  .pipe(none())
  .subscribe(([valA, valB, valC]) => {
      // Do something if any conditions are falsy
  });
```
> **Note:** `combineLatest` is used just for the example. You can use any operator that emits multiple values and thn pipe the `none` operator.


### 11. FilterNil: `filterNil`

Custom RxJS operator that filters out `null` and `undefined` values from the stream.

```javascript
import { filterNil } from 'ngx-rxjs-extensions';
import {of} from "rxjs";

of(1, 2, 3, null, undefined)
  .pipe(filterNil())
  .subscribe(val => {
      // val will be 1, 2, 3
  });

```
> **Note:** `of` is used just for the example. You can use any operator that emits multiple values and thn pipe the `filterNil` operator.

### 12. Filter Keyboard Events: `filterKeys`

Custom RxJS operator that filters out keyboard events based on the key code.

Current implementation supports filtering for `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`, `Enter`, `Escape`, `Space`, `Tab`;
```javascript
import { filterNil } from 'ngx-rxjs-extensions';
import {fromEvent} from "rxjs";

fromEvent(document, 'keydown')
  .pipe(filterKeys('ArrowDown', 'ArrowUp'))
  .subscribe(val => {
      // val will be the keyboard event for ArrowDown and ArrowUp
  });

```
> **Note:** `fromEvent` is used just for the example. You can use any operator that emits multiple values and thn pipe the `filterKeys` operator.



## contribution

Please feel free to contribute to this project. Create an issue or open a pull request.

