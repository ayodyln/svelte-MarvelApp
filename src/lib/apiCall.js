/* eslint-disable no-unused-vars */
import { getAuthor } from '../routes/api/authors/index.js';
import { writable } from 'svelte/store';
import { getCharacters } from '../routes/api/characters/index.js';
import { getComics } from '../routes/api/comics';
import { getComic } from '../routes/api/comic/index.js';

export const apiDATAChar = writable([]);
export const apiDATAComic = writable([]);
export const apiDATAAuthor = writable([]);

export const comicImage = writable([]);
export const comicImageTitle = writable([]);
export const comicLink = writable([]);

export const genAPIEndpoint = (endPoint, writable, limit) => {
	endPoint(limit).then((data) => {
		console.log(data.body.data.results);
		writable.set(data.body.data.results);
	});
};
// genAPIEndpoint(getCharacters, apiDATAChar);
// genAPIEndpoint(getComics, apiDATAComic);
// genAPIEndpoint(getAuthor, apiDATAAuthor);

(function comicSectionIMAGE(endPoint, writable, secondWritable, link) {
	endPoint().then((data) => {
		console.log(data.body.data.results[0]);
		writable.set(data.body.data.results[0].thumbnail.path);
		secondWritable.set(data.body.data.results[0].title);
		link.set(data.body.data.results[0].urls[0].url);
	});
})(getComic, comicImage, comicImageTitle, comicLink);
