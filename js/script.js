var hotelSearchButton = document.querySelector('.hotel-search-button');
var form = document.querySelector('.offering-form-container');
var arrivalField = document.querySelector('#arrival-date-field');
var departureField = document.querySelector('#departure-date-field');
var adultsNumber = document.querySelector('#adults');
var childrenNumber = document.querySelector('#children');
var storedAdults = localStorage.getItem('adults');
var storedChildren = localStorage.getItem('children');

if (storedAdults) {
	adultsNumber.value = storedAdults;
}
if (storedChildren) {
	childrenNumber.value = storedChildren;
}

form.classList.add('offering-form-invisible');
hotelSearchButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	form.classList.toggle('offering-form-visible');
});

form.addEventListener('submit', function (evt) {
	if (!arrivalField.value || !departureField.value || !adultsNumber.value || !childrenNumber.value) {
		alert('Заполните необходимые поля');
		evt.preventDefault();
	}
	else {
		localStorage.setItem('adults', adultsNumber.value);
		localStorage.setItem('children', childrenNumber.value);
	}
});
