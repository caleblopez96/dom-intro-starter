// For this section, use JS to select the element here by its ID and
// add to the innerHTML a span with a class of "tan" and text inside
// that span that says "This is new tan text"

document.getElementById("firstPara").innerHTML +=
  "<span class ='tan'>This is new tan text</span>";

// For this section, select all of these images and change their width from its current setting to 250 pixels
const images = document.getElementsByTagName("img");
for (let img of images) {
  img.width = "250";
}

// For the elements below, there are two class names. You will need to select the groups of elements separately, and for the elements with the class "med-blue", add inline styles to change the text color to #3C5E73. For the elements with the class "light-blue" change the text color to #7C9EA6. You can access the inline styles for an element with the dot operator (.) and the attribute name "style" followed by another dot and the style you want to set (in this case, element.style.color).

// This is just some placeholder text , but it's full of spans . We're going to access those spans using JavaScript and the classes in each span to add some styles to make them stand out on the page. Later in this module we'll learn more about using JS to add and remove classes (which is a better practice than using inline styles) but for today this will be fine.
const lightBlue = document.getElementsByClassName("light-blue");
const medBlue = document.getElementsByClassName("med-blue");

for (let element of lightBlue) {
  element.style.color = "#7C9EA6";
}

for (let element of medBlue) {
  element.style.color = "#3C5E73";
}
