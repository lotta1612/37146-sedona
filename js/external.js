var link = document.querySelector(".search-header");
var popup = document.querySelector(".modal-form");
var form = document.querySelector(".modal-form");
var arrival = form.querySelector("[name=hotel-arrival]");
var departure = form.querySelector("[name=hotel-departure]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-form-hidden");
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  }
});
