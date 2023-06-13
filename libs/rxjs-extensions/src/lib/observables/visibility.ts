import {filter, fromEvent, shareReplay} from "rxjs"

export const visibilityChange$ = fromEvent(document, 'visibilitychange')
  .pipe(shareReplay({refCount: true, bufferSize: 1}))


export const pageVisible$ = visibilityChange$.pipe(filter(() => document.visibilityState === 'visible'))

export const pageHidden$ = visibilityChange$.pipe(filter(() => document.visibilityState === 'hidden'))
