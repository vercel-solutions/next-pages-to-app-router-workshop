# Fallback for getStaticPaths
In the app router the `config.dynamicParams` property controls how params outside of `generateStaticParams` are handled (similar to `fallback` on `getStaticProps`):

* `true`: (default) Dynamic segments not included in generateStaticParams are generated on demand.
* `false`: Dynamic segments not included in generateStaticParams will return a 404.

## Before
```jsx
// pages/posts/[id].js

export async function getStaticPaths() {
  return {
    paths: [...],
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  ...
}

export default function Post({ post }) {
  return ...
}
```

## After
```jsx
// app/posts/[id]/page.js

export const dynamicParams = true;

export async function generateStaticParams() {
  return [...]
}

async function fetchPost(params) {
  ...
}

export default async function Post({ params }) {
  const post = await fetchPost(params);

  return ...
}
```
