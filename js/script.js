var hotelSearchButton = document.querySelector('.hotel-search-button');
var popup = document.querySelector('.offering-search-form');

popup.classList.add('offering-form-invisible');
hotelSearchButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.toggle('offering-form-visible');
});