import { InjectionToken } from "@angular/core";

export interface FakeApiConfig {
    ApiResponseMappersList: [ ApiResponseMap ];
}
export interface ApiResponseMap {
    route: string;
    method: string;
    matches?: string;
    response: unknown;
}

export const FAKE_API_CONFIG = new InjectionToken<FakeApiConfig>('FakeApiConfig');