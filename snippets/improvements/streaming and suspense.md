# Streaming and React Suspense Support
Streaming allows you to incrementally send UI from the server to client, progressively rendering components and pages.
With Next.js, fast requests can be streamed to the client as soon as they are ready. Slow, or inconsistent requests, can be wrapped in a Suspense boundary to show a fallback component (e.g. a loading skeleton) until they've completed rendering on the server.

- Allows certain parts of content to be displayed faster
- Particularly beneficial when there are slow network requests for retrieving data
- UI can be incrementally sent to the client
- Components can be incrementally streamed in reducing Time To First Byte and First Contentful Paint

### loading.js file
You can add an special `loading.js` file for routes, while the route is loading, the content of the `loading.js` file will show instead, once it finishes, the content will be replaced with the actual page.

```jsx
// app/dashboard/loading.js

export default function Loading() {
  return <p>Loading...</p>
}
```

### Manually adding Suspense Boundaries
React Suspense boundaries enables granular loading UI for data fetching. Next.js will render content on the server and progressively send updates through HTTP streams to the client.

```jsx
//app/dashboard/page.js

import { Suspense } from "react";
import { PostFeed, Weather } from "./Components";

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
}
