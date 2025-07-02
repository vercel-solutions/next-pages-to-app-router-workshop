# Fetch request deduping
If you need to fetch the same data in multiple components in a tree, Next.js will automatically cache fetch requests that have the same input in a temporary cache. This prevents the same data from being fetched more than once during a rendering pass.

![deduping](https://assets.vercel.com/image/upload/f_auto,q_100,w_1600/v1673006076/nextjs-docs/darkmode/deduplicated-fetch-requests.png)

* Server: The cache lasts the lifetime of a server request until the rendering process completes.
* Client: The cache lasts the duration of a session (which could include multiple client-side re-renders) before a full page reload.

If you use `fetch`, requests will automatically be deduped by Next.js. If you need to use an SDK or a custom solution, you can use the `cache` function from React.


```ts
// utils/getUser.js

import { cache } from 'react';

export const getUser = cache(async (id) => {
  const user = await db.user.findUnique({ id });

  return user;
});
```

```tsx
// app/user/[id]/layout.js

import { getUser } from '@utils/getUser';

export default async function UserLayout({ params: { id } }) {
  const user = await getUser(id);

  return (...)
}
```

```tsx
// app/user/[id]/page.js

import { getUser } from '@utils/getUser';

export default async function UserPage({params: { id }}) {
  const user = await getUser(id);

  return (...)
}
```

Although the `getUser()` function is called twice in the example above, only one query will be made to the database. This is because `getUser()` is wrapped in `cache()`, so the second request can reuse the result from the first request.
