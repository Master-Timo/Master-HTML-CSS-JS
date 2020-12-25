window.alert(); //prints alert message

let name = window.prompt("Enter Name"); //takes input from user
console.log(name);

let answer = confirm("Open Google ?"); //takes your opinion and stores true or false with which we can carry out operations
if (answer == false) {
  console.log("ok stay here");
} else {
  window.location = "https://www.google.co.in/"; //redirects you to the specified page
}
