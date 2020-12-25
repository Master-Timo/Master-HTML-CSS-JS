var arr = ["alpha","beta","gamma","delta","theta"];

var search = arr.indexOf("thta"); 
if (search >= 0) {
  console.log("character exists at : " + (search+1));
  
} else {
  console.log("search failed");
}
