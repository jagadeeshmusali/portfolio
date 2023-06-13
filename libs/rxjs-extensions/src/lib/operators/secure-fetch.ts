// import {catchError, concatMap, Observable, of} from "rxjs";
// import {Action} from "@ngrx/store";
// // https://github.com/ngrx/platform/issues/1224
// export function secureFetch<A extends Action, T extends Action, V extends Action>(
//   callFn: (action: A) => Observable<T>,
//   errorHandlingFn: (error: any) => V
// ): (source: Observable<A>) => Observable<T | V> {
//   return (source: Observable<A>) =>
//     source.pipe(
//       concatMap(a =>
//         callFn(a).pipe(catchError(err => of(errorHandlingFn(err))))
//       )
//     );
// }
