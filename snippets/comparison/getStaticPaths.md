# Dynamic paths (getStaticPaths)
In the pages router, the getStaticPaths function is used to define the dynamic paths that should be pre-rendered at build time.

## Before
```jsx
// pages/posts/[id].js

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://.../posts/${params.id}`);
  const data = await res.json();

  return { props: { post: data.post } };
}

export default function Post({ post }) {
  return <PostLayout post={post}>
}
```

## After
```jsx
// app/posts/[id]/page.js

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

async function fetchPost(params) {
  const res = await fetch(`https://.../posts/${params.id}`);
  const data = await res.json();

  return data.post;
}

export default async function Post({ params }) {
  const post = await fetchPost(params);

  return <PostLayout post={post}>
}
```
