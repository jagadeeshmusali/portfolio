import { InjectionToken } from '@angular/core';
/**
 * @param {FakeGraphApiConfig} config The configuration to use for the fake api
 */
export interface FakeGraphApiConfig {
  GraphApiResponseMappersList: [GraphApiResponseMap];
}
/**\
 * @param {string} operation The operation to match
 * @param {any} response The response to return
 * @param {number} delay The delay to wait before returning the response
 * @param {boolean} disable Whether to disable this mock or not. Defaults to false
 */
export interface GraphApiResponseMap {
  operation: string;
  delay?: number;
  response: any;
  disable?: boolean;
}


export const FAKE_GRAPH_API_CONFIG = new InjectionToken<FakeGraphApiConfig>(
  'FakeGraphApiConfig'
);
