let buttonOne = document.querySelector(".button-one");
let captionOne = document.querySelector(".caption-one");

buttonOne.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-one".

    let spidyCaption;

    // 2. Display the variable spidyCaption to captionOne.
    spidyCaption = document.querySelector(".comment-one").value;
    captionOne.innerHTML =spidyCaption;

});

// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the button and caption.

let buttonTwo = document.querySelector(".button-two");
let captionTwo = document.querySelector(".caption-two");

let ;