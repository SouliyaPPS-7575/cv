import { invariant, warning, isRedirect, isNotFound } from '@tanstack/react-router';
import { c, s as splitSetCookieString } from '../nitro/nitro.mjs';
import j$1 from 'tiny-invariant';

function _(e) {
  return e instanceof Headers ? new Headers(e) : Array.isArray(e) ? new Headers(e) : typeof e == "object" ? new Headers(e) : new Headers();
}
function j(...e) {
  return e.reduce((n, r) => {
    const t = _(r);
    for (const [o, a] of t.entries()) o === "set-cookie" ? splitSetCookieString(a).forEach((s) => n.append("set-cookie", s)) : n.set(o, a);
    return n;
  }, new Headers());
}
const O = [];
let u;
function I(e) {
  const n = u;
  return u = typeof e == "function" ? e() : e, () => {
    u = n;
  };
}
I(() => {
  const e = (t, o) => `/__tsr/staticServerFnCache/${t.functionId}__${o}.json`, n = (t) => JSON.stringify(t != null ? t : "", (i, s) => s && typeof s == "object" && !Array.isArray(s) ? Object.keys(s).sort().reduce((d, l) => (d[l] = s[l], d), {}) : s).replace(/[/\\?%*:|"<>]/g, "-").replace(/\s+/g, "_"), r = typeof document < "u" ? /* @__PURE__ */ new Map() : null;
  return { getItem: async (t) => {
    if (typeof document > "u") {
      const o = n(t.data), a = e(t, o), i = "/Users/souliya/Documents/FullStackDev/Test/cv/dist", s = await import('node:fs/promises'), l = (await import('node:path')).join(i, a), [f, h] = await s.readFile(l, "utf-8").then((c$1) => [c.parse(c$1), null]).catch((c) => [null, c]);
      if (h && h.code !== "ENOENT") throw h;
      return f;
    }
  }, setItem: async (t, o) => {
    const a = await import('node:fs/promises'), i = await import('node:path'), s = n(t.data), d = e(t, s), f = i.join("/Users/souliya/Documents/FullStackDev/Test/cv/dist", d);
    await a.mkdir(i.dirname(f), { recursive: true }), await a.writeFile(f, c.stringify(o));
  }, fetchItem: async (t) => {
    const o = n(t.data), a = e(t, o);
    let i = r == null ? void 0 : r.get(a);
    return i || (i = await fetch(a, { method: "GET" }).then((s) => s.text()).then((s) => c.parse(s)), r == null ? void 0 : r.set(a, i)), i;
  } };
});
function v(e, n) {
  const r = n || e || {};
  return typeof r.method > "u" && (r.method = "GET"), { options: r, middleware: (t) => v(void 0, Object.assign(r, { middleware: t })), validator: (t) => v(void 0, Object.assign(r, { validator: t })), type: (t) => v(void 0, Object.assign(r, { type: t })), handler: (...t) => {
    const [o, a] = t;
    Object.assign(r, { ...o, extractedFn: o, serverFn: a });
    const i = [...r.middleware || [], M(r)];
    return Object.assign(async (s) => w(i, "client", { ...o, ...r, data: s == null ? void 0 : s.data, headers: s == null ? void 0 : s.headers, signal: s == null ? void 0 : s.signal, context: {} }).then((d) => {
      if (d.error) throw d.error;
      return d.result;
    }), { ...o, __executeServer: async (s, d) => {
      const l = s instanceof FormData ? T(s) : s;
      l.type = typeof r.type == "function" ? r.type(l) : r.type;
      const f = { ...o, ...l, signal: d }, h = () => w(i, "server", f).then((c) => ({ result: c.result, error: c.error, context: c.sendContext }));
      if (f.type === "static") {
        let c;
        if ((u == null ? void 0 : u.getItem) && (c = await u.getItem(f)), c || (c = await h().then((y) => ({ ctx: y, error: null })).catch((y) => ({ ctx: void 0, error: y })), (u == null ? void 0 : u.setItem) && await u.setItem(f, c)), invariant(c, "No response from both server and static cache!"), c.error) throw c.error;
        return c.ctx;
      }
      return h();
    } });
  } };
}
function T(e) {
  const n = e.get("__TSR_CONTEXT");
  if (e.delete("__TSR_CONTEXT"), typeof n != "string") return { context: {}, data: e };
  try {
    return { context: c.parse(n), data: e };
  } catch {
    return { data: e };
  }
}
function k(e) {
  const n = /* @__PURE__ */ new Set(), r = [], t = (o) => {
    o.forEach((a) => {
      a.options.middleware && t(a.options.middleware), n.has(a) || (n.add(a), r.push(a));
    });
  };
  return t(e), r;
}
const E = async (e, n, r) => e({ ...n, next: async (t = {}) => {
  var _a, _b;
  return r({ ...n, ...t, context: { ...n.context, ...t.context }, sendContext: { ...n.sendContext, ...(_a = t.sendContext) != null ? _a : {} }, headers: j(n.headers, t.headers), result: t.result !== void 0 ? t.result : n.result, error: (_b = t.error) != null ? _b : n.error });
} });
function N(e, n) {
  if (e == null) return {};
  if ("~standard" in e) {
    const r = e["~standard"].validate(n);
    if (r instanceof Promise) throw new Error("Async validation not supported");
    if (r.issues) throw new Error(JSON.stringify(r.issues, void 0, 2));
    return r.value;
  }
  if ("parse" in e) return e.parse(n);
  if (typeof e == "function") return e(n);
  throw new Error("Invalid validator type!");
}
async function w(e, n, r) {
  const t = k([...O, ...e]), o = async (a) => {
    const i = t.shift();
    if (!i) return a;
    i.options.validator && (n !== "client" || i.options.validateClient) && (a.data = await N(i.options.validator, a.data));
    const s = n === "client" ? i.options.client : i.options.server;
    return s ? E(s, a, async (d) => o(d).catch((l) => {
      if (isRedirect(l) || isNotFound(l)) return { ...d, error: l };
      throw l;
    })) : o(a);
  };
  return o({ ...r, headers: r.headers || {}, sendContext: r.sendContext || {}, context: r.context || {} });
}
function M(e) {
  return { _types: void 0, options: { validator: e.validator, validateClient: e.validateClient, client: async ({ next: n, sendContext: r, ...t }) => {
    var o;
    const a = { ...t, context: r, type: typeof t.type == "function" ? t.type(t) : t.type };
    if (t.type === "static" && typeof document < "u") {
      invariant(u, "serverFnStaticCache.fetchItem is not available!");
      const s = await u.fetchItem(a);
      if (s) {
        if (s.error) throw s.error;
        return n(s.ctx);
      }
      warning(s, `No static cache item found for ${a.functionId}__${JSON.stringify(a.data)}, falling back to server function...`);
    }
    const i = await ((o = e.extractedFn) == null ? void 0 : o.call(e, a));
    return n(i);
  }, server: async ({ next: n, ...r }) => {
    var t;
    const o = await ((t = e.serverFn) == null ? void 0 : t.call(e, r));
    return n({ ...r, result: o });
  } } };
}
function x(e) {
  return e.replace(/^\/|\/$/g, "");
}
const A = (e, n, r) => {
  j$1(r, "\u{1F6A8}splitImportFn required for the server functions server runtime, but was not provided.");
  const t = `/${x(n)}/${e}`;
  return Object.assign(r, { url: t, functionId: e });
};

export { A, v };
//# sourceMappingURL=index-DhMiq7bA.mjs.map
