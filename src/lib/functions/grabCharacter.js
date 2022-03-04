import { getRandomInt } from './random';

export function grabCharacterImage(x, writable) {
	let data = x;
	let f = data.map((el) => ({
		id: el.id,
		image: el.thumbnail
	}));

	let ranNum = getRandomInt(1, 25);

	writable.set(f[ranNum].image.path);
}
