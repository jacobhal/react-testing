# Section 5: Simulating Server Response with Mock Service Worker

The purpose of Mock Service Worker (MSW) is to intercept network calls and return specified responses. Functional tests generally don't involve the server.

> If the server had responded with the response that we tell MSW to respond with, what would we expect the page to look like? This is how we would write our tests.

## MSW Setup

- Create handlers
- Create test server
- Make sure test server listens during tests
  - reset after each test

## Handlers

A handler is created for each endpoint that we want to mock. Here is an example:

```JSX
rest.get('http://localhost:3030/scoops', (req, res, ctx) => {})
```

- **rest**: Handler type, Rest OR GraphQL
- **get**: HTTP method to mock, get, post, delete, patch, etc.
- **first parameter**: Full URL to mock
- **second parameter**: Response resolver function
  - **req**: Request object
  - **res**: Function to create a response
  - **ctx**: Utility to build the response

## Response Resolver Functions

The most common usage is when a response resolver is used as an argument to a request handler to specify a mocked response it should return.

```JSX
// src/mocks.js
import { setupWorker, rest } from 'msw'
const worker = setupWorker(
  rest.get(
    '/user',
    // Example of a response resolver that returns
    // a "Content-Type: application/json" response.
    (req, res, ctx) => {
      return res(
        ctx.json({
          firstName: 'John',
          age: 38,
        }),
      )
    },
  ),
)
worker.start()
```

Since response resolver is a regular function, you can declare and reuse it across multiple request handlers.

```JSX
// src/mocks/resolvers/mockUser.js
export const mockUser = (req, res, ctx) => {
  return res(
    ctx.json({
      firstName: 'John',
      age: 38,
    }),
  )
}

// src/mocks/index.js
import { setupWorker, rest } from 'msw'
import { mockUser } from './resolvers/mockUser'
const worker = setupWorker(
  rest.get('/user', mockUser),
  rest.get('/me', mockUser),
)
worker.start()
```

Docs: https://mswjs.io/docs/basics/response-resolver
