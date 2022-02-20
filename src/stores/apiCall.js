import { writable } from 'svelte/store';
import { get } from '../routes/api/marvel/index';

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

// const genAPIEndpoint = () => {
// 	getAPIData(`https://swapi.dev/api/`).then((data) => {
// 		let i = data;
// 		console.log(i);
// 		apiDATA.set(i);
// 		return i;
// 	});
// };
// genAPIEndpoint();

export const loader = () => {
	get().then((data) => {
		console.log(data)
	});
};
loader();


