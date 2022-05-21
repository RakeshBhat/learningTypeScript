// #ForLoop
//------------------------------------------------------------------------------------------------------------------------------
//1. I need to get all the voter ids in the list of Persons, How do I loop through a custom Object array and get back list of ids?
//Sample Code:

//Create a Person object
interface Person {
  firstName: string;
  lastName:  string;
  voterId: number
}

// let's populate some data
persons = [{
	firstName: "jai",
  lastName:  "om",
  voterId: 5678
},
{
	firstName: "hari",
  lastName:  "om",
  voterId: 9012
},
{
	firstName: "sham",
  lastName:  "om",
  voterId: 3456
},
{
	firstName: "ram",
  lastName:  "om",
  voterId: 7890
}];

//Create an array to hold all the Ids
let voterIds = new Array();

//Loop through the Person array and push only ids to previously created array.
// Using for..of loop
for(var p of persons){
    voterIds.push(p.voterId);
}

console.log("full list of voter Ids: ", voterIds);

// BONUS TIP: we can use for..in loop as well, that uses the array index

for(var idx in persons){
  voterIds.push(persons[idx].voterId)
}

// Output: "full list of ids: ", [5678, 9012, 3456, 7890]
// ------------------------------------------------------------------------------------------------------------------------------

//2. How to find if two arrays contain any common items
interface ThisInventory{
    code: number;
    name: string;
    quantity: number;
}

let inventory1: ThisInventory[] = [];
inventory1 = [
    {code: 61, name: 'apples', quantity: 2},
    {code: 81, name: 'bananas', quantity: 0},
    {code: 31, name: 'cherries', quantity: 5}
];

let inventory2: ThisInventory[] = [];
inventory2 = [
    {code: 71, name: 'apples', quantity: 2},
    {code: 81, name: 'bananas', quantity: 0},
    {code: 91, name: 'cherries', quantity: 5}
];

const result1 = inventory1.filter(o => inventory2.some(({code,name}) => o.code === code 
&& o.name === name));
console.log(result1);

// Output:
/*
// [{
//   "code": 81,
//   "name": "bananas",
//   "quantity": 0
// }]
*/

//------------------------------------------------------------------------------------------------------------------------------

