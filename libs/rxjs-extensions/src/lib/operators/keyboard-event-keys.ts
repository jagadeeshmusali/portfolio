import {filter, MonoTypeOperatorFunction} from "rxjs";

export type KeyboardEventKeys = 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'Enter' | 'Escape' | 'Space' | 'Tab';

/**
 * Custom RxJS operator that filters out keyboard events that do not match the given keys
 * @param {KeyboardEventKeys[]} keys The keys to filter for in the keyboard events
 * KeyboardEventKeys: 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'Enter' | 'Escape' | 'Space' | 'Tab'
 * @returns {(source: Observable<T>) => Observable<T>} The operator function to be applied to the source observable.
 * @example
 * fromEvent(document, 'keydown').pipe(filterKeys('ArrowDown', 'ArrowUp')).subscribe()
 * // Only emits keyboard events for the ArrowDown and ArrowUp keys
 */

export function filterKeys(...keys: KeyboardEventKeys[]): MonoTypeOperatorFunction<any> {
  return filter((event: KeyboardEvent) => keys.includes(event.key as KeyboardEventKeys));
}

function filterKey(key: KeyboardEventKeys): MonoTypeOperatorFunction<any> {
  return filter((event: KeyboardEvent) => event.key === key);
}
