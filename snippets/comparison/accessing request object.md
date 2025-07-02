# Accessing Request Object
The app router exposes new read-only functions to retrieve request data:

* headers(): Based on the Web Headers API, and can be used inside Server Components to retrieve request headers.
* cookies(): Based on the Web Cookies API, and can be used inside Server Components to retrieve cookies.

## Before
```jsx
// pages/index.js

export async function getServerSideProps({ req, query }) {
  const authHeader = req.getHeaders()['authorization'];
  const theme = req.cookies['theme'];

  return { props: { ... }}
}

export default function Page(props) {
  return ...
}
```

## After
```jsx
// app/page.js

import { cookies, headers } from 'next/headers';

async function getData() {
  const authHeader = headers().get('authorization');

  return ...;
}

export default async function Page() {
  const theme = cookies().get('theme');
  const data = await getData();

  return ...;
}
```

Keep in mind that both of this functions are always executed at request time, which bypasses your segment cache configuration. You can read more about dynamic functions in [here](https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering#using-dynamic-functions).
