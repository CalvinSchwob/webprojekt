//image Array erstellen
const images = ["18", "28", "32", "36", "55"];

// Element-IDs holen
const slider = document.getElementById("slider");
const image = document.getElementById("image");

// Eventlistener erstellen um auf Änderung funktion setter() aufzurufen
slider.addEventListener("input", function() {
    setter(image, "src", "./photos/zoom/brennw_" + images[slider.value - 1] + "mm.webp");
});