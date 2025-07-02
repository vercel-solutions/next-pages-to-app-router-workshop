# Incremental Static Regeneration (getStaticProps with revalidate)
In the app router, data fetching with fetch() can use revalidate, which will cache the request for the specified amount of seconds.

## Before
```jsx
// app/posts.js

export async function getStaticProps() {
  const res = await fetch(`https://.../posts`);
  const data = await res.json();

  return {
    props: { posts: data.posts },
    revalidate: 60,
  };
}

export default function Index({ posts }) {
  return (
    <PostList posts={posts} />
  );
}
```

## After
```jsx
// app/posts/page.js

async function fetchPosts() {
  const res = await fetch(`https://.../posts`, { next: { revalidate: 60 } });
  const data = await res.json();

  return data.posts;
}

export default async function PostList() {
  const posts = await fetchPosts();

  return <PostList posts={posts} />
};
```

You can also define a revalidate at segment level. The lowest value between `layout`'s revalidate, `page`'s revalidate and requests revalidate, will be used.

```jsx
// app/posts/page.js

export const revalidate = 30;

async function fetchPosts() {
  const res = await fetch(`https://.../posts`, { next: { revalidate: 60 } });
  const data = await res.json();

  return data.posts;
}

export default async function PostList() {
  const posts = await fetchPosts();

  return <PostList posts={posts} />
};
```

Revalidation will happen at 30 seconds because it is the lower value.
