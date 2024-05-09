# Route handlers
Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs. Route Handlers are defined in a `route.js` file inside the app router. Route handlers are the equivalent of API routes from pages.

## Before
```js
// pages/api.js

export async function handler(request, response) {
  switch (request.method) {
    case 'GET': { ... }
    case 'POST': { ... }
    case 'PUT': { ... }
    case 'PATCH': { ... }
    case 'DELETE': { ... }
    case 'HEAD': { ... }
    case 'OPTIONS': { ... }
  }
}
```

## After
```js
// app/api/route.js

export async function GET(request) {}
export async function POST(request) {}
export async function PUT(request) {}
export async function PATCH(request) {}
export async function DELETE(request) {}
export async function HEAD(request) {}
export async function OPTIONS(request) {}
```

## Static handlers
Route Handlers are statically evaluated by default when using the GET method with the Response object.

```js
// app/items/route.js

export async function GET() {
  const res = await fetch('...');
  const data = await res.json();

  return Response.json({ data });
}
```

## Dynamic handlers
Route handlers are evaluated dynamically when:

- Using the Request object with the GET method.
- Using any of the other HTTP methods.
- Using Dynamic Functions like cookies and headers.
- The Segment Config Options manually specifies dynamic mode.

## Route resolution
`route.js` file *can't* be at the same route as `page.js`.

---

Read more about [route handlers](https://nextjs.org/docs/app/building-your-application/routing/router-handlers).
