import { FakeApiConfig } from 'ngx-fake-api';
import { fakeUsersResponse } from './users-mock';

export const FAKE_API_CONFIG: FakeApiConfig = {
    ApiResponseMappersList: [
        fakeUsersResponse
    ]
};
