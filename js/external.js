var link = document.querySelector(".search-header");
var popup = document.querySelector(".modal-form");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-form-hidden");
});
