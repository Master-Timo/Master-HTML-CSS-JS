// Fetching elements
//Manipulate the text
//Manipulate the html
//Work with attributes
//Work with inputs

// Fetching elements 
    //by tagname
const paragraph = document.getElementsByTagName('p'); //returns an array 
console.log(paragraph[0]);


// Fetching elements
    // by class
const para = document.getElementsByClassName('english');  //returns an array 
console.log(para);

// Fetching elements
    // by id
const parag = document.getElementById("#spanish");  //returns the unique element
console.log(parag);


// Fetching elements
    // by quering 

const paragr = document.querySelector(".english"); //returns only 1 element (usually the 1st one)
    console.log(paragr);


const paraa = document.querySelectorAll(".english");//returns an array 
 console.log(paraa);

 //=============feching done=============

 //Manipulate the text


 const paara = document.getElementsByClassName('english');
 console.log(paara[0].innerText);//getting the text value of the element denoted by getelement function

 let text = paara[0].innerText;

 paara[0].innerText = "Anything";
 //setting a new text value to the element denoted by getelement function

 //N.B. the function 'innertext' is both a getter and a setter.... i.e. we can both get the text from the html element as well as set a new value to the particular html element 
console.log(paara[0].innerText);

//Manipulate the html
function doSomething(){
    const para = document.getElementById("hello");
    para.innerHTML = "<h1>I AM JS DEVELOPER</h1>"

}
