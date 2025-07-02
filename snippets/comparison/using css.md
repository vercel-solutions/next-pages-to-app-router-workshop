# CSS in the App router
In the pages router, global stylesheets are restricted to only `pages/_app.js`.

## Before
To add a stylesheet to your application, import the CSS file within `pages/_app.js`.

```css
/* styles/globals.css */

body {
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}
```

```jsx
// pages/_app.js

import '../styles/globals.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

## After
With the app router, this restriction has been lifted. Global styles can be added to any layout, page, or component.

```css
/* app/globals.css */

body {
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}
```

```jsx
// app/layout.js

// These styles apply to every route in the application
import './global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

CSS-in-JS libraries which require runtime JavaScript are not currently supported in Server Components. Using CSS-in-JS with newer React features like Server Components and Streaming requires library authors to support the latest version of React, including concurrent rendering.

If you want to style Server Components, we recommend using either:
* CSS Modules
* Other solutions that output CSS files, like PostCSS or Tailwind CSS.
