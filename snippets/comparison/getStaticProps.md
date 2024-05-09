# Static Site Generation (getStaticProps)
In the pages router, the `getStaticProps` function is used to pre-render a page at build time. This function can be used to fetch data from an external API or directly from a database, and pass this data down to the entire page as it's being generated during the build.

## Before
```jsx
// pages/dashboard.js

export async function getStaticProps() {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  return { props: { data } };
}

export default function Index({ data }) {
  return <div>{data}</div>;
}
```

## After
```jsx
// app/dashboard/page.js

async function fetchData() {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  return data;
}

export default async function Dashboard() {
  const data = await fetchData();

  return <div>{data}</div>;
}
```
