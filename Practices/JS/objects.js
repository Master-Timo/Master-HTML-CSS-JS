// OBJECTS

// Collection od properties (features that it has)
// & methods (work that it does)

//properties --- variables
//methods --- functions


//we can create objects even without classes in JS

let avenger = {     //object name = avenger
    name: "Thor",   
    age: 1500,
    weapons: ["Mjolnir","Stormbreaker","Thunder"],
    //defining object within an object
    address: {
        planet:"Asgard",
        home: "Apartment",
    }
};

let dynamickey = "name"; // accessing dynamically

console.log(`The name is ${avenger.name} and age is ${avenger.age}`);
console.log(avenger["name"]);
console.log(avenger.dynamickey); //will give error // tries to find "dynamic key within the object"
console.log(avenger[dynamickey]);

console.log(avenger.weapons);  //prints the entire weapon array 

console.log(avenger.weapons[0]); //prints the 1st weapon from the array

//prints the entire weapon array elements one by one
avenger.weapons.forEach(function(weapons) {
    console.log(weapons);
})
//printing object of an object
console.log(avenger.address.planet);
