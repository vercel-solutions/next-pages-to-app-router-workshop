# Link component
The `<Link>` Component no longer requires manually adding an `<a>` tag as a child. The `<Link>` Component no longer requires manually adding an `<a>` tag as a child.

## Before
```jsx
import Link from 'next/link'

<Link href="/about">
  <a>About</a>
</Link>
```

## After
```jsx
import Link from 'next/link'

<Link href="/about">
  About
</Link>
```
