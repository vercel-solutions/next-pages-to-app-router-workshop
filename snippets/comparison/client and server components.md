# Client and server components
Server and Client Components allow developers to build applications that span the server and client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering. All components inside the app router are React Server Components by default.

## Server components
Server Components allow developers to better leverage server infrastructure. When a route is loaded with Next.js, the initial HTML is rendered on the server. This HTML is then progressively enhanced in the browser, allowing the client to take over the application and add interactivity, by asynchronously loading the Next.js and React client-side runtime.

## Client components
Client Components enable you to add client-side interactivity to your application. In Next.js, they are prerendered on the server and hydrated on the client. You can think of Client Components as how components in the Next.js pages/ router have always worked. A component becomes a Client Component when using the `"use client"` directive at the top of the file (before any imports).

Once `"use client"` is defined in a file, all other modules imported into it, including child components, are considered part of the client bundle. `"use client"` does not need to be defined in every file. The Client module boundary only needs to be defined once, at the "entry point", for all modules imported into it to be considered a Client component.

```tsx
// app/Counter.js

'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## When to use Server vs. Client Components?
To simplify the decision between Server and Client Components, we recommend using Server Components (default in the app router) until you have a need to use a Client Component. For example when you need interactivity, event listeners, state, lifecylcle effects, browser-only APIs, class components, etc.

## Importing Server Components into Client components
Server and Client Components can be interleaved in the same component tree. Behind the scenes, React will merge the work of both environments.

However, in React, there's a restriction around importing Server Components inside Client Components because Server Components might have server-only code (e.g. database or filesystem utilities). This won't work:

```tsx
// app/ClientComponent.js

'use client';

import ServerComponent from './ServerComponent';

export default function ClientComponent() {
  return (
    <>
      <ServerComponent />
    </>
  );
}
```
You can still pass Server Components as children to Client Components. This will work:

```tsx
// app/page.js

import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

export default function Page() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  );
}
```

You can read more about Server and Client Components in the [official documentation](https://beta.nextjs.org/docs/rendering/server-and-client-components).
