# fake-api

Shared angular library to handle mocking of api responses

## Installation

Use `npm` to install the package

    npm i ngx-fake-api

# Usage 
###For REST API

### 1. Prepare fake data:

Prepare an object with routes you would like to mock and response data as shown below.

For example: If you would like to mock the following routes:
`/users` and `/employee`.

```javascript
export const FAKE_API_CONFIG: FakeApiConfig = {
  ApiResponseMappersList: [
    {
      route: '/user',
      method: 'GET',
      response: {
        name: 'John Doe',
        email: 'John@gmail.com',
        phone: '+1-123-456-7890',
      },
    },
    {
      route: '/employee',
      matches: 'worker',
      method: 'GET',
      response: {
        name: 'John Smith',
      },
    },
  ],
};
```

`route` : The route that you would like to mock

`delay` : The delay in milliseconds that you would like to apply to the response.

`method` : The method that you would like to mock(get, post, put, delete)

`response` : The response data that you would like to return

`match` : The regex/pattern that you would like to match the route with

> **Note:** If you dont pass any `match`, the `route` property will be used as the match. For example : `https://domain.com/user/all` will be matched with `route: '/user'`

### 2. Importing the Module:

Import the fake-api module in your angular app.

```javascript
import { FakeApiModule } from 'ngx-fake-api';
import { FAKE_API_CONFIG } from '../mocks';

@NgModule({
  imports: [...HttpClientModule, FakeApiModule.forRoot(FAKE_API_CONFIG)],
})
export class AppModule {}
```

If you would like to enable this only in development mode, you can use the following code while importing the module:

```javascript
!environment.production ? FakeApiModule.forRoot(FAKE_API_CONFIG) : [];
```

That's it!
Now your app will get the mocked data when you make the request.

### For GraphQL

## contribution

Please feel free to contribute to this project. Create an issue or open a pull request.
