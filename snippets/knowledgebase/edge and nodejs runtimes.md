# Edge and Node.js runtimes
Next.js has two server runtimes where you can render parts of your application code: [Node.js Runtime](https://beta.nextjs.org/docs/rendering/edge-and-nodejs-runtimes#nodejs) [Edge Runtime](https://beta.nextjs.org/docs/rendering/edge-and-nodejs-runtimes#edge-runtime).

By default, the app router uses the Node.js runtime, which is also the default for Serverless functions. However, you can opt into the Edge Runtime.

## Edge runtime
The Edge Runtime is ideal if you need to deliver dynamic, personalized content at low latency with small, simple functions. The Edge Runtime's speed comes from its minimal use of resources, but that can be limiting in many scenarios.

## Node.js runtime
Using the Node.js runtime gives you full access to all Node.js APIs, and all NPM packages that rely on them. You also get the flexibility of a larger bundle size. However, it may not be as fast as the Edge Runtime, and traffic spikes might bring your services down temporarily.

One way to mitigate this issue is to use Serverless.

The downside compared to Edge is that it can take hundreds of milliseconds for Serverless Functions to boot up before they begin processing requests. These increased overall processing times can incur greater usage costs and lead to higher bounce rates from visitors to your site.

## Segment runtime
You can specify a runtime for individual route segments in your Next.js application as well as in route handlers and layouts.

```tsx
export const runtime = 'edge'; // 'nodejs' (default) | 'edge'
```
