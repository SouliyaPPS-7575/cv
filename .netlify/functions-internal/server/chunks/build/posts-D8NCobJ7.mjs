import { notFound } from '@tanstack/react-router';
import r from 'redaxios';
import { A, v } from './index-DhMiq7bA.mjs';
import '../nitro/nitro.mjs';
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
import 'tiny-invariant';
import 'node:async_hooks';
import 'react/jsx-runtime';
import '@tanstack/router-devtools';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const a = A("app_utils_posts_tsx--fetchPost_createServerFn_handler", "/_server", (t, o) => h.__executeServer(t, o)), p = A("app_utils_posts_tsx--fetchPosts_createServerFn_handler", "/_server", (t, o) => i.__executeServer(t, o)), h = v({ method: "GET" }).validator((t) => t).handler(a, async ({ data: t }) => (console.info(`Fetching post with id ${t}...`), await r.get(`https://jsonplaceholder.typicode.com/posts/${t}`).then((e) => e.data).catch((e) => {
  throw console.error(e), e.status === 404 ? notFound() : e;
}))), i = v({ method: "GET" }).handler(p, async () => (console.info("Fetching posts..."), r.get("https://jsonplaceholder.typicode.com/posts").then((t) => t.data.slice(0, 10))));

export { a as fetchPost_createServerFn_handler, p as fetchPosts_createServerFn_handler };
//# sourceMappingURL=posts-D8NCobJ7.mjs.map
