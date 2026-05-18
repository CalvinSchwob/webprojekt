function setter(className, attribute, value) {
    console.log("Setter called with:", className, attribute, value);
    var element = document.getElementsByClassName(className)[0];
    element.setAttribute(attribute, value);
}