var str = window.prompt("Enter the STRING: ");
var ch = window.prompt("Enter the character to search for: ");

var search = str.indexOf(ch);
console.log(ch);
console.log(str);
if (search >= 0) {
  console.log("character exists at : " + (search+1));
  
} else {
  console.log("search failed");
}
