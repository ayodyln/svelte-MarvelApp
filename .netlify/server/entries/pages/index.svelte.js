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
var import_index_2492c888 = require("../../chunks/index-2492c888.js");
var import_md5 = require("crypto-js/md5.js");
var import_comic = require("../endpoints/api/comic/index.js");
var import_index_9f63d981 = require("../../chunks/index-9f63d981.js");
const subscriber_queue = [];
function writable(value, start = import_index_2492c888.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_2492c888.a)(value, new_value)) {
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
  function subscribe2(run, invalidate = import_index_2492c888.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_2492c888.n;
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
  return { set, update, subscribe: subscribe2 };
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
var comicsSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div#comicDiv.svelte-x5e1lk.svelte-x5e1lk{background:no-repeat right/40%;border-radius:1rem}div#comicDiv.svelte-x5e1lk div.comicChild.svelte-x5e1lk{display:flex;flex-direction:column;justify-content:space-between;width:100%;height:100%;background:linear-gradient(to right, #1a1a1a 60%, rgba(0, 0, 0, 0) 100%);padding:1rem;color:white;border-radius:1rem}div#comicDiv.svelte-x5e1lk div.comicChild.svelte-x5e1lk:hover{box-shadow:#db3a34 0px 0px 10px}",
  map: null
};
const ComicsSection = (0, import_index_2492c888.c)(($$result, $$props, $$bindings, slots) => {
  let { comicImage: comicImage2 } = $$props;
  if ($$props.comicImage === void 0 && $$bindings.comicImage && comicImage2 !== void 0)
    $$bindings.comicImage(comicImage2);
  $$result.css.add(css$1);
  return `<a href="${"/comics"}"><div id="${"comicDiv"}" style="${"background-image: url(" + (0, import_index_2492c888.e)(comicImage2) + ".jpg);"}" class="${"svelte-x5e1lk"}"><div class="${"comicChild svelte-x5e1lk"}"><p class="${"is-size-2"}">Comics</p>
			<p>Marvel comics are plentiful, pick one to start reading!</p></div></div>
</a>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "#body.svelte-iv473q{background-color:#323031}.hero.svelte-iv473q{margin-top:52px}",
  map: null
};
const Routes = (0, import_index_2492c888.c)(($$result, $$props, $$bindings, slots) => {
  let $comicImage, $$unsubscribe_comicImage;
  $$unsubscribe_comicImage = (0, import_index_2492c888.b)(comicImage, (value) => $comicImage = value);
  $$result.css.add(css);
  $$unsubscribe_comicImage();
  return `

${$$result.head += `${$$result.title = `<title>Sveltekit Marvel App</title>`, ""}<meta name="${"viewport"}" content="${"width=device-width, initial-scale=1"}" data-svelte="svelte-oenljx">`, ""}

<section class="${"hero svelte-iv473q"}"><div class="${"hero-body"}"><p class="${"title"}">Marvel Web App</p>
		<p class="${"subtitle"}">Student-Research Project</p></div></section>

<section class="${"section svelte-iv473q"}" id="${"body"}">${(0, import_index_2492c888.v)(ComicsSection, "ComicsSection").$$render($$result, { comicImage: $comicImage }, {}, {})}

	<div><div><div><h2>Characters</h2>
				<p>Explore the characters of the Marvel Multiverse!</p></div>
			<a href="${"/"}" class="${"button"}">See Characters</a></div></div>

	<div><div><div><h2>Authors</h2>
				<p>The creators of the Marvel Comics and their stores.</p></div>
			<a href="${"/"}" class="${"button"}">See Authors</a></div></div>
</section>`;
});
module.exports = __toCommonJS(stdin_exports);
