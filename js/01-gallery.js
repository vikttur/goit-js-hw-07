import { galleryItems } from './gallery-items.js';

const listGalleryRef = document.querySelector('.gallery');
const newImages = creatingNewImages(galleryItems);

listGalleryRef.innerHTML = newImages;
listGalleryRef.addEventListener('click', onClickImage);

function creatingNewImages(items) {
	return items.map((item) =>
		`<li class='gallery__item'>
			<a class='gallery__link' href='${item.original}'>
				<img 
					class='gallery__image'
					src='${item.preview}'
					data-source='${item.original}'
					alt='${item.description}'
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
};

function showModalWindow(source) {
	basicLightbox.create(`<img width="1400" height="900" src="${source}">`).show();
};
