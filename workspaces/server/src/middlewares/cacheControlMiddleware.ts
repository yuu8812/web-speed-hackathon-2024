import { createMiddleware } from 'hono/factory';

export const cacheControlMiddleware = createMiddleware(async (c, next) => {
  await next();
  //TODO consider
  c.res.headers.append('Cache-Control', 'private');
  c.res.headers.append('Cache-Control', 'force-cache');
});
