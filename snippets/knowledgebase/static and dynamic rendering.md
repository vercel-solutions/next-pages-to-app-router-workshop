# Static and dynamic rendering
In Next.js, a route can be statically or dynamically rendered.

- In a static route, components are rendered on the server at build time. The result of the work is cached and reused on subsequent requests.
- In a dynamic route, components are rendered on the server at request time.

## Static rendering
Static rendering (default) improves performance because all the rendering work is done ahead of time and can be served from a Content Delivery Network (CDN) geographically closer to the user.

## Dynamic rendering
You can opt into dynamic rendering by using a `dynamic function` or `dynamic data fetching` in a layout or page. This will cause Next.js to render the whole route dynamically, at request time.

Dynamic functions:
- [`cookies()`](https://beta.nextjs.org/docs/api-reference/cookies)
- [`headers()`](https://beta.nextjs.org/docs/api-reference/headers)
- [`useSearchParams()`](https://beta.nextjs.org/docs/api-reference/use-search-params)

Dynamic data fetching options:
- cache: `no-store`
- revalidate: `0`

Dynamic segment configurations:
- dynamic = `force-dynamic`

Since the returned value of these functions cannot be known ahead of time, using them in a layout or page will force dynamic rendering at request time.
