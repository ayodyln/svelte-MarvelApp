const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["captain-Favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-9ff3cc60.js","js":["start-9ff3cc60.js","chunks/vendor-7df2a94c.js","chunks/preload-helper-ec9aa979.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/project\/?$/,
				params: null,
				path: "/project",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/comics\/?$/,
				params: null,
				path: "/comics",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/characters\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/characters/index.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/authors\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/authors/index.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/comics\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/comics/index.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/comic\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/comic/index.js'))
			},
			{
				type: 'page',
				pattern: /^\/doc\/?$/,
				params: null,
				path: "/doc",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		]
	}
});
