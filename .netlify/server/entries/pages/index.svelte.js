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
var import_md5 = require("crypto-js/md5.js");
var import_comic = require("../endpoints/api/comic/index.js");
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
const comicImage = writable([]);
const comicImageTitle = writable([]);
const comicLink = writable([]);
(function comicSectionIMAGE(endPoint, writable2, secondWritable, link) {
  endPoint().then((data) => {
    console.log(data.body.data.results[0]);
    writable2.set(data.body.data.results[0].thumbnail.path);
    secondWritable.set(data.body.data.results[0].title);
    link.set(data.body.data.results[0].urls[0].url);
  });
})(import_comic.getComic, comicImage, comicImageTitle, comicLink);
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "#body.svelte-j5qfr4.svelte-j5qfr4.svelte-j5qfr4{background-color:#323031}.hero.svelte-j5qfr4.svelte-j5qfr4.svelte-j5qfr4{margin-top:52px}#comicDiv.svelte-j5qfr4.svelte-j5qfr4.svelte-j5qfr4{display:flex;justify-content:space-between;background-color:#4c494b}#comicDiv.svelte-j5qfr4 div.comicDiv__childOne.svelte-j5qfr4.svelte-j5qfr4{display:flex;flex-direction:column;justify-content:space-between}#comicDiv.svelte-j5qfr4 div.comicDiv__childOne div.svelte-j5qfr4.svelte-j5qfr4{color:white}#comicDiv.svelte-j5qfr4 div.comicDiv__childOne div.svelte-j5qfr4 .svelte-j5qfr4:nth-child(1){font-size:2.5rem}#comicDiv.svelte-j5qfr4 div.comicDiv__childOne a.button.svelte-j5qfr4.svelte-j5qfr4{max-width:10rem}#comicDiv.svelte-j5qfr4 div.comicDiv__childTwo.svelte-j5qfr4.svelte-j5qfr4{height:185px}",
  map: null
};
const Routes = (0, import_index_be7e25b7.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

${$$result.head += `${$$result.title = `<title>Sveltekit Marvel App</title>`, ""}<meta name="${"viewport"}" content="${"width=device-width, initial-scale=1"}" data-svelte="svelte-oenljx">`, ""}

<section class="${"hero svelte-j5qfr4"}"><div class="${"hero-body svelte-j5qfr4"}"><p class="${"title svelte-j5qfr4"}">Marvel Web App</p>
		<p class="${"subtitle svelte-j5qfr4"}">Student-Research Project</p></div></section>

<section class="${"section svelte-j5qfr4"}" id="${"body"}"><div id="${"comicDiv"}" class="${"svelte-j5qfr4"}"><div class="${"comicDiv__childOne svelte-j5qfr4"}"><div class="${"svelte-j5qfr4"}"><p class="${"svelte-j5qfr4"}">Comics</p>
				<p class="${"svelte-j5qfr4"}">Marvel comics are plentiful, pick one to start reading!</p></div>
			<a class="${"button svelte-j5qfr4"}" href="${"/comics"}">See Comics</a></div>
		<div class="${"comicDiv__childTwo svelte-j5qfr4"}"></div></div>

	<div class="${"svelte-j5qfr4"}"><div class="${"svelte-j5qfr4"}"><div class="${"svelte-j5qfr4"}"><h2 class="${"svelte-j5qfr4"}">Characters</h2>
				<p class="${"svelte-j5qfr4"}">Explore the characters of the Marvel Multiverse!</p></div>
			<a href="${"/"}" class="${"button svelte-j5qfr4"}">See Characters</a></div></div>

	<div class="${"svelte-j5qfr4"}"><div class="${"svelte-j5qfr4"}"><div class="${"svelte-j5qfr4"}"><h2 class="${"svelte-j5qfr4"}">Authors</h2>
				<p class="${"svelte-j5qfr4"}">The creators of the Marvel Comics and their stores.</p></div>
			<a href="${"/"}" class="${"button svelte-j5qfr4"}">See Authors</a></div></div>
</section>`;
});
module.exports = __toCommonJS(stdin_exports);
