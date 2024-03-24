import { serve } from '@hono/node-server';

import { seeding } from './database/seed';
import { app } from './routes';

async function main() {
  serve({ fetch: app.fetch, port: Number(process.env['PORT']) || 8000 }, async (info) => {
    await seeding();
    console.log(`listening on ${info.address}:${info.port}`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
