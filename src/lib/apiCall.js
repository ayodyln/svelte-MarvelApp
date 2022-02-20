import { writable } from 'svelte/store';
import { get } from '../routes/api/marvel/index.js';

export const apiDATA = writable([]);
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

//? Great for code journal; better than current.
// const getAPIData = async function (url) {
// 	try {
// 		const res = await fetch(url);
// 		return await res.json();
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

const genAPIEndpoint = () => {
	get('8a51610a0e82d6d4414b79e79a8bf29a').then((data) => {
		console.log(data.body.data.results);
		apiDATA.set(data.body.data.results);
	});
};
genAPIEndpoint();

// export const loader = () => {
// 	get().then((data) => {
// 		console.log(data)
// 	});
// };
// loader();
