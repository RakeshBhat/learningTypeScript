#ForLoop
#------------------------------------------------------------------------------------------------------------------------------
#1. I need to get all the voter ids in the list of Persons, How do I loop through a custom Object array and get back list of ids?
#Sample Code:
#Create a Person object
interface Person {
  firstName: string;
  lastName:  string;
  voterId: number
}

#let's populate some data
persons = [{
	firstName: "jai",
  lastName:  "om",
  voterId: 12345
},
{
	firstName: "hari",
  lastName:  "om",
  voterId: 12345
},
{
	firstName: "shree",
  lastName:  "om",
  voterId: 12345
},
{
	firstName: "ram",
  lastName:  "om",
  voterId: 4435
}];
#create an array to hold all the Ids
let voterIds = new Array();
#loop through the Person and push only ids to an array
for(var p of persons){
ids.push(person.voterId);
}
console.log("full list of voter Ids: ", voterIds);

### Output: "full list of ids: ", [12345, 12345, 12345, 12345]
#------------------------------------------------------------------------------------------------------------------------------
