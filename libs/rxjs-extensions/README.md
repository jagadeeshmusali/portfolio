# rxjs-extensions

Shared library providing extensions to RxJS.

## Installation

Use `npm` to install the package

    npm i ngx-fake-api

# Operators and Usage:

### 1. Page Visibility Change: `visibilityChange$`

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

### 2. Page Visible: `pageVisible$`

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

### 3. Page Hidden: `pageHidden$`

`Observable` that emits when the page is `hidden`.

If you would like to get notified when the user switches tabs, minimizes the window.


```javascript
import { pageVisible$ } from 'ngx-rxjs-extensions';

pageVisible$.subscribe((event) => {
  console.log('Page is now visible');
  // Perform actions when the page becomes visible
});
```

### 4. Debug: `debug`

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

### 5. Every: `every`

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


### 6. Some: `some`

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

## contribution

Please feel free to contribute to this project. Create an issue or open a pull request.

