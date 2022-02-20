import md5 from 'crypto-js/md5.js';

import { config } from './marvelConfig';

// import variables from '$lib/env';
// console.log(variables);

export const get = async () => {
	const ts = new Date().getTime();
	const privateKEY = config.marvelKEYSecret;
	const key = config.marvelKey;
	// const privateKEY = import.meta.env.PRIVATE_KEY;
	// const key = import.meta.env.PUBLIC_KEY;
	// const privateKEY = import.meta.env.VITE_PRIVATE_KEY;
	// const key = import.meta.env.VITE_PUBLIC_KEY;

	const hash = md5(ts + privateKEY + key);

	const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=8a51610a0e82d6d4414b79e79a8bf29a&hash=${hash}`;
	const res = await fetch(url);
	const data = await res.json();
	return {
		status: 200,
		body: data
	};
};
