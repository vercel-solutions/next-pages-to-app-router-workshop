# Migrating from _document and _app to layouts
If you have an existing _app or _document file, you can copy the contents (e.g. global styles) to the root layout (app/layout.tsx). Styles in app/layout.js will not apply to pages/. You should keep _app/_document while migrating to prevent your pages/ routes from breaking. Once fully migrated, you can then safely delete them.

## Before
```jsx
// pages/_app.js

export default function App({ Component, pageProps }) {
  return (
    <div>
      <h2>My App</h2>
      <Component {...pageProps} />
    </div>
  );
}
```

```jsx
// pages/_document_.js

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

## After
```jsx
// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div>
          <h2>My App</h2>
          <Component {...pageProps} />
        </div>
      </body>
    </html>
  );
}
```

If you are using any React Context providers, they will need to be moved to a Client Component.
