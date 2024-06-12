# unstable_cache

If you have to fetch information from an SDK or library that doesn't implement fetch, you can use `unstable_cache` to set revalidation times and tags:

```jsx
// app/posts/page.js

import { unstable_cache } from 'next/cache';

const fetchPosts = unstable_cache(async () => {
  const data = await mySDK.getPosts();

  return data.posts;
}, [], { revalidate: 60, tags: ['posts'] });

export default async function PostList() {
  const posts = await fetchPosts();

  return <PostList posts={posts} />
};
```
> You can find more information about `unstable_cache` in the [Next.js documentation](https://nextjs.org/docs/app/api-reference/functions/unstable_cache).
