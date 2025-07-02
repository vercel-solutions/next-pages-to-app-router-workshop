# Managing metadata
In the pages router, the next/head React component is used to manage <head> HTML elements such as title and meta. In the app router, next/head is replaced with a new metadata object defined in a segment.

## Before
```jsx
// pages/posts/[id].js

import Head from 'next/head'
import {useRouter} from 'next/router'

export default function PostPage() {
  const {params} = useRouter();

  return (
    <>
      <Head>
        <title>My post - {params.id}</title>
      </Head>
      <main>
        <h1>My page</h1>
      </main>
    </>
  )
}
```

## After
```jsx
// app/posts/[id]/page.js

export const metadata = {
  title: 'My Post',
}

export default function PostPage() {
  return (
    <main>
      <h1>My page</h1>
    </main>
  )
}
```

The `generateMetadata` function can be used to fetch data and generate metadata based on the current segment dynamic params.

```jsx
// app/posts/[id]/page.js

export async function generateMetadata({ params }) {
  const post = await fetch(`https://.../${params.slug}`);
  const data = await post.json();

  return {
    title: data.title,
  };
}
```

You can see all the fields available for the metadata object in [the official docs for Metadata](https://beta.nextjs.org/docs/api-reference/metadata).
