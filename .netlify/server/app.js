var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  App: () => App,
  override: () => override
});
var import_index_2492c888 = require("./chunks/index-2492c888.js");
var import_index_9f63d981 = require("./chunks/index-9f63d981.js");
function afterUpdate() {
}
const Root = (0, import_index_2492c888.c)(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  (0, import_index_2492c888.s)("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  {
    stores.page.set(page);
  }
  return `


${components[1] ? `${(0, import_index_2492c888.v)(components[0] || import_index_2492c888.m, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => {
      return `${components[2] ? `${(0, import_index_2492c888.v)(components[1] || import_index_2492c888.m, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
        default: () => {
          return `${(0, import_index_2492c888.v)(components[2] || import_index_2492c888.m, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}`;
        }
      })}` : `${(0, import_index_2492c888.v)(components[1] || import_index_2492c888.m, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {})}`}`;
    }
  })}` : `${(0, import_index_2492c888.v)(components[0] || import_index_2492c888.m, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {})}`}

${``}`;
});
let base = "";
let assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n	<meta charset="utf-8" />\r\n	<meta name="description" content="" />\r\n	<link rel="icon" href="' + assets2 + '/captain-Favicon.png" />\r\n	<meta name="viewport" content="width=device-width, initial-scale=1" />\r\n	' + head + "\r\n</head>\r\n\r\n<body>\r\n	<div>" + body + "</div>\r\n</body>\r\n\r\n</html>";
let read = null;
set_paths({ "base": "", "assets": "" });
const get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ event, resolve }) => resolve(event)),
  handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
  externalFetch: hooks.externalFetch || fetch
});
let default_protocol = "https";
function override(settings) {
  default_protocol = settings.protocol || default_protocol;
  set_paths(settings.paths);
  set_prerendering(settings.prerendering);
  read = settings.read;
}
class App {
  constructor(manifest) {
    const hooks = get_hooks(user_hooks);
    this.options = {
      amp: false,
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      dev: false,
      floc: false,
      get_stack: (error) => String(error),
      handle_error: (error, event) => {
        hooks.handleError({
          error,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        });
        error.stack = this.options.get_stack(error);
      },
      hooks,
      hydrate: true,
      manifest,
      method_override: { "parameter": "_method", "allowed": [] },
      paths: { base, assets },
      prefix: assets + "/_app/",
      prerender: true,
      read,
      root: Root,
      service_worker: null,
      router: true,
      template,
      template_contains_nonce: false,
      trailing_slash: "never"
    };
  }
  render(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to app.render must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return (0, import_index_9f63d981.r)(request, this.options, options);
  }
}
module.exports = __toCommonJS(stdin_exports);
