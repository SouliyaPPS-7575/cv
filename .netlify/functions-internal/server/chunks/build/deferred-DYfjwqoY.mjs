import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
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
import 'redaxios';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const m = () => import('./deferred-aDzwMdDi.mjs'), p = A("app_routes_deferred_tsx--personServerFn_createServerFn_handler", "/_server", (e, r) => n.__executeServer(e, r)), n = v({ method: "GET" }).validator((e) => e).handler(p, ({ data: e }) => ({ name: e, randomNumber: Math.floor(Math.random() * 100) })), c = A("app_routes_deferred_tsx--slowServerFn_createServerFn_handler", "/_server", (e, r) => a.__executeServer(e, r)), a = v({ method: "GET" }).validator((e) => e).handler(c, async ({ data: e }) => (await new Promise((r) => setTimeout(r, 1e3)), { name: e, randomNumber: Math.floor(Math.random() * 100) })), i = createFileRoute("/deferred")({ loader: async () => ({ deferredStuff: new Promise((e) => setTimeout(() => e("Hello deferred!"), 2e3)), deferredPerson: a({ data: "Tanner Linsley" }), person: await n({ data: "John Doe" }) }), component: lazyRouteComponent(m, "component", () => i.ssr) });

export { p as personServerFn_createServerFn_handler, c as slowServerFn_createServerFn_handler };
//# sourceMappingURL=deferred-DYfjwqoY.mjs.map
