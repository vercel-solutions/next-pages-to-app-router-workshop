# On demand revalidation
Sometimes time-based revalidation is not enough and we need to manually revalidate data for a page, path or tag. `revalidatePath` and `revalidateTag` allows us to do it, the only difference is that one receives a `path` and the other one receives a `tag`.

## Before
```js
// pages/api/revalidate.js

export default async function handler(request, response) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '/';

  await res.revalidate(path);

  return response.json({ revalidated: true, now: Date.now() });
}
```

## After
```js
// app/api/revalidate/route.js

import { revalidatePath } from 'next/cache';

export async function GET(request) {
  const path = request.nextUrl.searchParams.get('path') || '/';

  await revalidatePath(path);

  return Response.json({ revalidated: true, now: Date.now() });
}
```

```js
// app/[post]/page.js

export default async function PostPage({params: {post}}) {
  const data = await fetch('...', { next: { tags: [post] } });

  return (...);
}

// app/api/revalidate/route.js

import { revalidateTag } from 'next/cache';

export async function GET(request) {
  const tag = request.nextUrl.searchParams.get('tag') || '/';

  await revalidateTag(tag);

  return Response.json({ revalidated: true, now: Date.now() });
}
```
