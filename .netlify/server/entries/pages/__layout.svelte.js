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
var import_index_2492c888 = require("../../chunks/index-2492c888.js");
var footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-b2viq5{background-color:#db3a34;color:white;padding:1.5rem;margin-top:5rem}a.svelte-b2viq5{color:white;text-decoration:underline}",
  map: null
};
const Footer = (0, import_index_2492c888.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="${"footer svelte-b2viq5"}"><div class="${"content has-text-centered"}"><p>Student Research Project by
			<a href="${"https://www.dylnsworks.com"}" class="${"svelte-b2viq5"}">Dylan Smith</a> \u2022 The source code is on
			<a href="${"https://github.com/ayodyln/svelte-MarvelApp"}" class="${"svelte-b2viq5"}">Github</a> \u2022 The project is
			powered by the
			<a href="${"https://marvel.com/"}" class="${"svelte-b2viq5"}">Data provided by Marvel. \xA9 2022 MARVEL</a> and
			<a href="${"https://kit.svelte.dev/"}" class="${"svelte-b2viq5"}">Sveltekit</a>.
		</p></div>
</footer>`;
});
var nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-1w4tpfu.svelte-1w4tpfu{background-color:#db3a34}.navbar-burger.svelte-1w4tpfu.svelte-1w4tpfu:hover{color:#b4b3b3}.navbar-menu.svelte-1w4tpfu.svelte-1w4tpfu{background-color:#db3a34}a.svelte-1w4tpfu.svelte-1w4tpfu{color:white}a.navbar-item.svelte-1w4tpfu.svelte-1w4tpfu:hover{color:#db3a34}a.logo.svelte-1w4tpfu:hover h1.svelte-1w4tpfu{color:white}",
  map: null
};
const Nav = (0, import_index_2492c888.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"navbar is-fixed-top svelte-1w4tpfu"}" aria-label="${"main navigation"}"><div class="${"navbar-brand"}"><a class="${"navbar-item logo svelte-1w4tpfu"}" href="${"/"}"><h1 class="${"is-size-5 svelte-1w4tpfu"}">Marvel API Project</h1></a>

		
		<a role="${"button"}" class="${"navbar-burger svelte-1w4tpfu"}" aria-label="${"menu"}" aria-expanded="${"false"}" data-target="${"navbarBasicExample"}" href="${"#"}"><span aria-hidden="${"true"}"></span>
			<span aria-hidden="${"true"}"></span>
			<span aria-hidden="${"true"}"></span></a></div>

	<div id="${"navbarBasicExample"}" class="${"navbar-menu svelte-1w4tpfu"}"><div class="${"navbar-start"}"><a class="${"navbar-item svelte-1w4tpfu"}" href="${"/"}">Home </a>
			<a class="${"navbar-item svelte-1w4tpfu"}" href="${"/project"}">Project </a>
			<a class="${"navbar-item svelte-1w4tpfu"}" href="${"/doc"}">Doc </a></div></div>
</nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'bulma/css/bulma.css';",
  map: null
};
const _layout = (0, import_index_2492c888.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_2492c888.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${(0, import_index_2492c888.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
