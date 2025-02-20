import r from 'redaxios';
import { C } from '../nitro/nitro.mjs';
import { i } from './json-TaXz3z8G.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import '@tanstack/react-router';
import 'tiny-invariant';
import 'node:async_hooks';
import 'react/jsx-runtime';
import '@tanstack/router-devtools';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const l = C("/api/users/$id")({ GET: async ({ request: e, params: r$1 }) => {
  console.info(`Fetching users by id=${r$1.id}... @`, e.url);
  try {
    const o = await r.get("https://jsonplaceholder.typicode.com/users/" + r$1.id);
    return i({ id: o.data.id, name: o.data.name, email: o.data.email });
  } catch (o) {
    return console.error(o), i({ error: "User not found" }, { status: 404 });
  }
} });

export { l as APIRoute };
//# sourceMappingURL=users._id.mjs.map
