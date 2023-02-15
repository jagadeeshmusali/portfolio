import { ApiResponseMap } from 'ngx-fake-api';

export const fakeUsersResponse: ApiResponseMap = {
  route: '/user',
  matches: '/user',
  method: 'GET',
  disable: false,
  response: {
    name: 'John Doe',
    email: 'John@gmail.com',
    phone: '+1-123-456-7890',
  },
};
