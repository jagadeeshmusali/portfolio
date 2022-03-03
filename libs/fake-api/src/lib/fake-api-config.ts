import { InjectionToken } from "@angular/core";
/**
 * @param {FakeApiConfig} config The configuration to use for the fake api
 */
export interface FakeApiConfig {
    ApiResponseMappersList: [ ApiResponseMap ];
}
/**\
 * @param {string} route The route to match
 * @param {string} method The method to match
 * @param {any} response The response to return
 * @param {number} delay The delay to wait before returning the response
 * @param {string} matches The pattern to match the route against
 */
export interface ApiResponseMap {
    route: string;
    delay?: number;
    method: string;
    matches?: string;
    response: unknown;
}

export const FAKE_API_CONFIG = new InjectionToken<FakeApiConfig>('FakeApiConfig');