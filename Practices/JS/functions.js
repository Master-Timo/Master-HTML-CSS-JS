//function declaration
function add(){
let num1 = 20;
let num2 = 40;
let result = num1 + num2;
console.log(result); }


add();add();add();add();add();

//function declaration with parameters
function addd(num1, num2)
{
let result = num1 + num2;
console.log(result); 
}


addd(80,60);
addd(180, 20);


//function expression

const sum = function (num1,num2){
    let result = num1 + num2;
    console.log(result);
};

sum(480, 20);


//function returns
function addd(num1, num2) {
  let result = num1 + num2;
  return result;
}

let res = addd(30,50);
console.log(res)

//default parameter
function addd(num1, num2=100) {
  let result = num1 + num2;  // num2 gets default value of parameter 100
  return result;
}

let res = addd(30); // assigns 30 to num1
console.log(res)
