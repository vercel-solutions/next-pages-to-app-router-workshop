# Migrating the getLayout() pattern to Layouts
Next.js recommended adding a property to Page components to achieve per-page layouts in the pages router. This pattern can be replaced with native support for nested layouts in the app router.

## Before
```jsx
// components/DashboardLayout.js

export default function DashboardLayout({ children }) {
  return (
    <div>
      <h2>My Dashboard</h2>
      {children}
    </div>
  );
}
```

```jsx
// pages/dashboard/index.js

import DashboardLayout from '../components/DashboardLayout';

export default function Page() {
  return <p>My Page</p>;
}

Page.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
```

```jsx
// pages/_app.js

export default function MyApp({Component, pageProps}) {
  const Layout = Component.getLayout();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
```

## After
```jsx
// app/dashboard/page.js

export default function Page() {
  return <p>My Page</p>;
}
```

```jsx
// app/dashboard/DashboardLayout.js

'use client';

export default function DashboardLayout({ children }) {
  return (
    <div>
      <h2>My Dashboard</h2>
      {children}
    </div>
  );
}
```

```jsx
// app/dashboard/layout.js

import DashboardLayout from './DashboardLayout';

export default function Layout({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
```

You can incrementally move non-interactive parts of DashboardLayout.js (Client Component) into layout.js (Server Component) to reduce the amount of component JavaScript you send to the client.
