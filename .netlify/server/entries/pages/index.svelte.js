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
  default: () => Routes
});
var import_index_be7e25b7 = require("../../chunks/index-be7e25b7.js");
var import_marvel = require("../endpoints/api/marvel/index.js");
var import_md5 = require("crypto-js/md5.js");
const subscriber_queue = [];
function writable(value, start = import_index_be7e25b7.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_be7e25b7.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = import_index_be7e25b7.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_be7e25b7.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const apiDATA = writable([]);
const genAPIEndpoint = () => {
  (0, import_marvel.get)().then((data) => {
    apiDATA.set(data.body.data.results);
  });
};
genAPIEndpoint();
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'bulma/css/bulma.css';",
  map: null
};
const Routes = (0, import_index_be7e25b7.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

${$$result.head += `${$$result.title = `<title>Sveltekit Marvel App</title>`, ""}<meta name="${"viewport"}" content="${"width=device-width, initial-scale=1"}" data-svelte="svelte-oenljx">`, ""}

`;
});
module.exports = __toCommonJS(stdin_exports);
