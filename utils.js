
// setter funktion:
function setter(element, attribute, value) {
    if (element === undefined) {
        alert("Element is undefined");
        remturn;
    }

    if (attribute === undefined) {
        alert("Attribute is undefined");
        return
    }

    if (value === undefined) {
        alert("Value is undefined");
        return;
    }

    image.setAttribute(attribute, value);
    console.log("Setter function set " + element + "`s" + " "+ attribute + " to " + value);
    console.log("Current image: " + image.src);
}
    

