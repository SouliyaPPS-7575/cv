import { s as splitSetCookieString } from '../nitro/nitro.mjs';

function f(e) {
  return e instanceof Headers ? new Headers(e) : Array.isArray(e) ? new Headers(e) : typeof e == "object" ? new Headers(e) : new Headers();
}
function u(...e) {
  return e.reduce((r, o) => {
    const t = f(o);
    for (const [s, n] of t.entries()) s === "set-cookie" ? splitSetCookieString(n).forEach((a) => r.append("set-cookie", a)) : r.set(s, n);
    return r;
  }, new Headers());
}
function i(e, r) {
  return new Response(JSON.stringify(e), { ...r, headers: u({ "content-type": "application/json" }, r == null ? void 0 : r.headers) });
}

export { i };
//# sourceMappingURL=json-TaXz3z8G.mjs.map
