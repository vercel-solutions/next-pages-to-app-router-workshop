# Migrating pages
Pages in the app router are Server Components by default. This is different from the pages router where pages are Client Components.

We recommend breaking down the migration of a page into two main steps:

* Step 1: Move the default exported Page Component into a new Client Component.
* Step 2: Import the new Client Component into a new page.js file inside the app router.

## Before
```jsx
// pages/index.js

async function getStaticProps() {
  const res = await fetch('https://...');
  const posts = await res.json();

  return {
    props: {
      posts
    }
  };
}

export default async function Page({posts}) {
  return (
     <div>
      {recentPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
```

## After
```jsx
// app/HomePage.js

'use client';

export default function HomePage({ recentPosts }) {
  return (
    <div>
      {recentPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

```jsx
// app/page.js

import HomePage from './HomePage';

async function getPosts() {
  const res = await fetch('https://...');
  const posts = await res.json();

  return posts;
}

export default async function Page() {
  const recentPosts = await getPosts();

  return <HomePage recentPosts={recentPosts} />;
}
```
