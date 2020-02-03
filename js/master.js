// Module Assignment 2 JavaScript 1
// Level 1.1
// Console logging my name using an anonymous function
const myFunctionExpression = function() {
    console.log("Fredrik");
};
myFunctionExpression();

// Level 1.2
// Adding and event listener to the button
const button = document.querySelector(".btn");

function logButtonClicks() {
    console.log("I was clicked");
};

button.addEventListener("click", logButtonClicks);

// Level 1.3
// Logging key values that are entered into the input box
const input = document.getElementById("#firstName");

document.addEventListener('keydown', function(logKey) {
    console.log("event", logKey);
});

// Level 1.4
// Logging a message whenever you hover over the button
let hoverButton = document.querySelector("button");

function callOnHover() {
    console.log("The cursor moved over the button");
    hoverButton.classList.add("hover");
};


hoverButton.addEventListener("mouseover", callOnHover);

// Level 1.5
// Logging a message whenever the cursor is removed from the button
let leaveButton = document.querySelector("[data-animal='dog']");

function mouseOut() {
    console.log("The cursor moved away from the button");
    leaveButton.classList.remove("hover");
};


leaveButton.addEventListener("mouseout", mouseOut);

// Level 1.6
// Selecting every list item and logging the data attribute value when the list item is hovered over
let listItems = document.querySelectorAll("li");

for(let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", function(event) {
        console.log(event.target.dataset);
    });

};

// Level 1.7
// Converting this if else statement to a switch statement
const animal = "cow";

switch(animal) {
    case "cat":
        console.log("Meow");;
        break;

    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
};

// Level 1.8
// Converting for loop to a forEach loop
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
    console.log(sheep);
});

// Level 1.9
// Creating an interval that logs the word hello every half a second, but stops after the word has been logged six times
function logHello() {
    console.log("Hello");
    if(counter === 5) {
        clearInterval(intervalId);
    };
    counter++;
};
let counter = 0;
const intervalId = setInterval(logHello, 500);

// Level 1.10
// Updating div text to say "Text updated" after waiting two seconds using innerHTML
const updatingText = document.querySelector(".container");

function updateDiv() {
    updatingText.innerHTML = "Text updated";
};

// 2000 milliseconds = 2 seconds
setTimeout(updateDiv, 2000);
