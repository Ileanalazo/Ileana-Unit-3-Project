/* Declare variables below to save the different sections (divs) of your story*/

let storypart2Yes = document.querySelector(".option-one-screen");
let storypart2No = document.querySelector(".option-two-screen");
let storypart3Yes = document.querySelector(".option-one-end");
let storypart3No = document.querySelector(".option-two-end");

let YesButton=document.querySelector(".option-one");
let noButton=document.querySelector(".option-two");


/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
*/

YesButton.onclick=function(){
storypart2Yes.style.display="block";
 
};
noButton.onclick=function(){
storypart2No.style.display="block";
    
};
YesButton.onclick=function(){
storypart3Yes.style.display="block";
 
};

