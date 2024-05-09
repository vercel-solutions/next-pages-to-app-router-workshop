# Loading fonts using next/font
`next/font` will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.

## Before
```jsx
// pages/_app.js

import Head from 'next/head';

export default function MyApp({Component, pageProps}) {
  return (
    <main>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
```

## After
```jsx
// app/layout.js

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

Automatically self-host any Google Font. Fonts are included in the deployment and served from the same domain as your deployment. No requests are sent to Google by the browser.

### Using local fonts
```jsx
// app/layout.js

import localFont from 'next/font/local';

const myFont = localFont({ src: './my-font.woff2' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
```
