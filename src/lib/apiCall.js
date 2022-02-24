import { writable } from 'svelte/store';
import { get } from '../routes/api/marvel/index.js';

export const apiDATA = writable([]);

const genAPIEndpoint = () => {
	get().then((data) => {
		// console.log(data.body.data.results);
		apiDATA.set(data.body.data.results);
	});
};
genAPIEndpoint();


