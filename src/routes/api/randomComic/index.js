import md5 from 'crypto-js/md5.js';
import { getRandomInt } from '../../../lib/functions/random.js';

export const getRandomComic = async () => {
	const ts = new Date().getTime();
	const privateKEY = import.meta.env.VITE_PRIVATE_KEY;
	const key = import.meta.env.VITE_PUBLIC_KEY;
	const ranComic = getRandomInt(1, 500);

	const hash = md5(ts + privateKEY + key);

	const url = `https://gateway.marvel.com/v1/public/comics/${ranComic}?ts=${ts}&apikey=${key}&hash=${hash}`;
	const res = await fetch(url);
	const data = await res.json();

	return {
		status: 200,
		body: data
	};
};
