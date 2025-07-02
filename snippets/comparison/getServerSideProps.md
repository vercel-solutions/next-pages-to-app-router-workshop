# Server-side Rendering (getServerSideProps)
In the pages router, getServerSideProps is used to fetch data on the server and forward props to the default exported React component in the file. The initial HTML for the page is prerendered from the server, followed by "hydrating" the page in the browser (making it interactive).

## Before
```jsx
// pages/dashboard.js

export async function getServerSideProps() {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  return { props: { data } };
}

export default function Dashboard({ data }) {
  return <div>{data}</div>;
}
```

## After
```jsx
// app/dashboard/page.js

async function fetchData() {
  const res = await fetch(`https://.../data`, { cache: 'no-store' });
  const data = await res.json();

  return data;
}

export default async function Dashboard() {
  const data = await fetchData();

  return <div>{data}</div>;
}
```
