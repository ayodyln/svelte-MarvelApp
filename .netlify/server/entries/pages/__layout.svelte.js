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
const Footer = (0, import_index_be7e25b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"footer"}"><div class="${"content has-text-centered"}"><p><strong>Marvel API Research Project</strong> by
			<a href="${"https://www.dylnsworks.com"}">Dylan Smith</a>. The source code is on
			<a href="${"https://github.com/ayodyln/svelte-MarvelApp"}">Github</a>. The project is powered by
			the
			<a href="${"https://developer.marvel.com/"}">Marvel API</a> and
			<a href="${"https://kit.svelte.dev/"}">Sveltekit</a>.
		</p></div>
</footer>`;
});
var nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@media only screen and (min-width: 560px){}@media only screen and (min-width: 1024px){}",
  map: null
};
const Nav = (0, import_index_be7e25b7.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"navbar is-fixed-top"}" aria-label="${"main navigation"}"><div class="${"navbar-brand"}"><a class="${"navbar-item"}" href="${"/"}"><h1 class="${"is-size-5"}">Marvel API Project</h1></a>

		
		<a role="${"button"}" class="${"navbar-burger"}" aria-label="${"menu"}" aria-expanded="${"false"}" data-target="${"navbarBasicExample"}" href="${"#"}"><span aria-hidden="${"true"}"></span>
			<span aria-hidden="${"true"}"></span>
			<span aria-hidden="${"true"}"></span></a></div>

	<div id="${"navbarBasicExample"}" class="${"navbar-menu"}"><div class="${"navbar-start"}"><a class="${"navbar-item"}" href="${"/"}">Home </a>
			<a class="${"navbar-item"}" href="${"/project"}">Project </a>
			<a class="${"navbar-item"}" href="${"/doc"}">Doc </a></div></div>
</nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'bulma/css/bulma.css';",
  map: null
};
const _layout = (0, import_index_be7e25b7.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_be7e25b7.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${(0, import_index_be7e25b7.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
