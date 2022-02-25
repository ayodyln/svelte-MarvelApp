import md5 from 'crypto-js/md5.js';

export const getComics = async (limit) => {
	const ts = new Date().getTime();
	const privateKEY = import.meta.env.VITE_PRIVATE_KEY;
	const key = import.meta.env.VITE_PUBLIC_KEY;

	const hash = md5(ts + privateKEY + key);

	const url = `https://gateway.marvel.com/v1/public/comics?limit=${limit}&ts=${ts}&apikey=${key}&hash=${hash}`;
	const res = await fetch(url);
	const data = await res.json();

	return {
		status: 200,
		body: data
	};
};
