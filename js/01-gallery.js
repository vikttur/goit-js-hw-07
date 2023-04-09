import { galleryItems } from './gallery-items.js';

const listGalleryRef = document.querySelector('.gallery');
const newImages = creatingNewImages(galleryItems);

listGalleryRef.innerHTML = newImages;
listGalleryRef.addEventListener('click', onClickImage);

function creatingNewImages(items) {
	return items.map(({ original, preview, description }) =>
		`<li class='gallery__item'>
			<a class='gallery__link' href='${original}'>
				<img 
					class='gallery__image'
					src='${preview}'
					data-source='${original}'
					alt='${description}'
				/>
			</a>
		</li>`
	).join('');
};

function onClickImage(event) {
	event.preventDefault();

	if (!event.target.classList.contains('gallery__image')) {
		return;
	};

	showModalWindow(event.target.dataset.source);
	window.addEventListener('keydown', OnKeyPress);
};

function showModalWindow(source) {
	basicLightbox.create(`<img width="1400" height="900" src="${source}">`).show();
};

function OnKeyPress(event) {
	if (event.code !== 'Escape') {
		return;
	};

	if (!document.querySelector('.basicLightbox')) {
		return;
	};

	window.removeEventListener('keydown', OnKeyPress);
	document.querySelector('.basicLightbox').remove();
}
