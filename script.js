//image Array erstellen
const images = ["./img/beach.jpg", "./img/flower.jpg", "./img/flower2.jpg", "./img/flower3.jpg", "./img/road.jpg"];

// Element-IDs holen
const slider = document.getElementById("slider");
const image = document.getElementById("image");

// Eventlistener erstellen um auf Änderung funktion setter() aufzurufen
slider.addEventListener("input", function() {
    setter(image, "src", images[slider.value]);
});