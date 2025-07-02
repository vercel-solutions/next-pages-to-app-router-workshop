# App router defaults

## Server and client components
By default, the app router uses Server Components for all components, including layouts, allowing you to easily render components on the server and reducing the amount of JavaScript sent to the client. However, you have the option to use Client Components inside app and render on the client. To use a Client Component, create a file inside app and add the "use client" directive at the top of the file (before any imports).

### Before
```jsx
// /components/Counter.js

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count => count - 1)}> - </button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count => count + 1)}> + </button>
    </div>
  );
}
```

### After
```jsx
// /components/Counter.js

'use client'

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count => count - 1)}> - </button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count => count + 1)}> + </button>
    </div>
  );
}
```

## TypeScript by default
In Next.js 13 create-next-app now ships with TypeScript by default.

## next/future/image is now next/image
The new Image component:

* Ships less client-side JavaScript
* Easier to style and configure
* More accessible requiring alt tags by default
* Aligns with the Web platform
* Faster because native lazy loading doesn't require hydration

If you still want to use the old next/image component, can now be imported as `next/legacy/image`
