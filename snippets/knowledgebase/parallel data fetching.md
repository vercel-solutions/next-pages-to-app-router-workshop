# Parallel data fetching
To minimize client-server waterfalls, we recommend this pattern to fetch data in parallel:

```tsx
// app/artist/[username]/page.js

import Albums from './albums';

async function getArtist(username) {
  const res = await fetch(`https://api.example.com/artist/${username}`);

  return res.json();
}

async function getArtistAlbums(username) {
  const res = await fetch(`https://api.example.com/artist/${username}/albums`);

  return res.json();
}


export default async function Page({ params: { username } }) {
  // Initiate both requests in parallel
  const artistData = getArtist(username);
  const albumsData = getArtistAlbums(username);

  // Wait for the promises to resolve
  const [artist, albums] = await Promise.all([artistData, albumsData]);

  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums}></Albums>
    </>
  );
}
```
By starting the fetch prior to calling await in the Server Component, each request can eagerly start to fetch requests at the same time. This sets the components up so you can avoid waterfalls.

We can save time by initiating both requests in parallel, however, the user won't see the rendered result until both promises are resolved.
