# Nested layouts
Lets imagine a page that list token prices in a table for the `/` route. Every time we click on a token, we get redirected to a `/[token]` route that will display the same table and a graph for that token below.

## Before
Because `/` and `/[token]` are different routes, we can't share content beside `_document` and `_app`. So if we want to get content from the server for both pages, each page method will have to fetch it on their own and drill the data through props.

```jsx
// pages/index.js

import api from "../api"
import TokensList from "../components/TokensList"

export const getStaticProps = async () => {
  return {
    props: {
      tokens: await api.tokens.list()
    }
  }
}

function HomePage({tokens}) {
  return (
    <main>
      <TokensList tokens={tokens} />
    </main>
  )
}
```

```jsx
// pages/[token].js

import api from "../api"
import TokensList from "../components/TokensList"
import TokenChart from "../components/TokenChart"

export const getStaticProps = async ({params: {token}}) => {
  return {
    props: {
      tokens: await api.tokens.list(),
      token: await api.tokens.fetch(token)
    }
  }
}

function TokenPage({tokens, token}) {
  return (
    <main>
      <TokensList tokens={tokens} />
      <TokenChart token={token} />
    </main>
  )
}
```

We can also create an api route that returns the data and configure cache headers, use SWR or similar libraries but we end up with the same problem, we have to refetch on route change.

## After
We can have a `/layout.js` and a `/[token]/page.js` files. The table can live in the layout and not re-render when we change a nested route.

```jsx
// app/layout.js

import api from "../api"
import TokensList from "../components/TokensList"

function HomeLayout({tokens, children}) {
  const tokens = await api.tokens.list();

  return (
    <main>
      <TokensList tokens={tokens} />
      {children}
    </main>
  )
}
```

```jsx
// app/[token]/page.js

import api from "../api"
import TokenChart from "../components/TokenChart"

function TokenPage({params: {token}}) {
  const token = await api.tokens.fetch(token);

  return (
    <TokenChart token={token} />
  )
}
```
