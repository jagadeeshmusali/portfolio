import {filter, MonoTypeOperatorFunction} from "rxjs";

export type KeyboardEventKeys = 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'Enter' | 'Escape' | 'Space' | 'Tab';

export function filterKeys(...keys: KeyboardEventKeys[]): MonoTypeOperatorFunction<any> {
  return filter((event: KeyboardEvent) => keys.includes(event.key as KeyboardEventKeys));
}

export function filterKey(key: KeyboardEventKeys): MonoTypeOperatorFunction<any> {
  return filter((event: KeyboardEvent) => event.key === key);
}
