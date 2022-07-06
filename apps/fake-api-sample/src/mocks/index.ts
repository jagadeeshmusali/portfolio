import { FakeApiConfig } from 'ngx-fake-api';
import { fakeUsersResponse } from './users-mock';
/**
 * @param {FakeApiConfig} config The configuration to use for the fake api
 */

export const FAKE_API_CONFIG: FakeApiConfig = {
  /**
   * @param {[ApiResponseMap]} ApiResponseMappersList The route to match
   */
  ApiResponseMappersList: [fakeUsersResponse],
};
