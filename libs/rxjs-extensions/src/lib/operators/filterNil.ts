import {filter, MonoTypeOperatorFunction} from "rxjs";

export function filterNil(): MonoTypeOperatorFunction<any> {
  return filter(value => value !== undefined && value !== null)
}
