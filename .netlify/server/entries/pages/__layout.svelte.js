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
  default: () => _layout
});
var import_index_be7e25b7 = require("../../chunks/index-be7e25b7.js");
var nav_svelte_svelte_type_style_lang = "";
const css = {
  code: ".navbar-menu.svelte-9ngp5c{position:absolute;width:100%;z-index:1}",
  map: null
};
const Nav = (0, import_index_be7e25b7.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

<nav class="${"navbar"}" aria-label="${"main navigation"}"><div class="${"navbar-brand"}"><a class="${"navbar-item"}" href="${"/"}"><h1>Marvel API Project</h1></a>

		
		<a role="${"button"}" class="${"navbar-burger"}" aria-label="${"menu"}" aria-expanded="${"false"}" data-target="${"navbarBasicExample"}" href="${"#"}"><span aria-hidden="${"true"}"></span>
			<span aria-hidden="${"true"}"></span>
			<span aria-hidden="${"true"}"></span></a></div>

	<div id="${"navbarBasicExample"}" class="${"navbar-menu svelte-9ngp5c"}"><div class="${"navbar-start"}"><a class="${"navbar-item"}" href="${"/"}">Home </a>
			<a class="${"navbar-item"}" href="${"/about"}">About </a></div></div>
</nav>`;
});
const _layout = (0, import_index_be7e25b7.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_be7e25b7.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
module.exports = __toCommonJS(stdin_exports);
