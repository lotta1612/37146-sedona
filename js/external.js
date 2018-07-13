var link = document.querySelector(".search-header");
var popup = document.querySelector(".modal-form");
var form = document.querySelector(".modal-form");
var arrival = form.querySelector("[name=hotel-arrival]");
var departure = form.querySelector("[name=hotel-departure]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-form-hidden");
  popup.classList.toggle("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    if (popup.classList.contains("modal-error")) {
      popup.classList.remove("modal-error");
    }
    setTimeout(function () {
      popup.classList.add("modal-error");
    });
  }
});
