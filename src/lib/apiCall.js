/* eslint-disable no-unused-vars */
import { getCharacters } from '../routes/api/character/index.js';
import { writable } from 'svelte/store';
import { getRandomComic } from '../routes/api/randomComic/index.js';
import { grabCharacterImage } from './functions/grabCharacter.js';

export const apiDATAChar = writable([]);
export const apiDATAComic = writable([]);
export const apiDATAAuthor = writable([]);

export const charData = writable([]);
export const myArr = writable([]);

export const comicImage = writable([]);

export const charImage = writable([]);

export const genAPIEndpoint = (endPoint, writable, limit) => {
	endPoint(limit).then((data) => {
		console.log(data.body.data.results);
		writable.set(data.body.data.results);
	});
};
// genAPIEndpoint(getCharacters, apiDATAChar);
// genAPIEndpoint(getComics, apiDATAComic);
// genAPIEndpoint(getAuthor, apiDATAAuthor);

function indexComicSection(endPoint, writable) {
	endPoint().then((data) => {
		writable.set(data.body.data.results[0].thumbnail.path);
	});
}
indexComicSection(getRandomComic, comicImage);

(function indexCharacterSection() {
	getCharacters().then((data) => grabCharacterImage(data.body.data.results, myArr));
})();
