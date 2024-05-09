# Metadata Files
Each file convention can be defined using a static file (e.g. opengraph-image.jpg), or a dynamic variant that uses code to generate the file (e.g. opengraph-image.js).

Once a file is defined, Next.js will automatically serve the file (with hashes in production for caching) and update the relevant head elements with the correct metadata, such as the asset's URL, file type, and image size.

```jsx
// app/shop/[slug]/opengraph-image.js

import { ImageResponse } from 'next/server';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const contentType = 'image/png';
export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};

export default function Image({ params }) {
   return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        About Acme
      </div>
    ),
    {
      ...size,
    },
  );
}
```
