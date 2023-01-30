let usersName = prompt("What is your name")
//console.log("Hi " +usersName + " welcome to my page!");
//document.write = prompt("Hi " + usersName + " welcome to my page!");

if (usersName == "kassie" ||usersName == "Kassie") {
    alert("We love code fellows!");
} else {
    alert("We love JavaScript");
}
function userAge() {
    prompt("How old are you?")
}
userAge();

function Name() {
    let name = prompt("what is your name?").trim();
    if (name === "") {

        prompt("What is really your name?")
    }
}
Name();

let userNum = prompt("Pick a Number!) (Between 1 & 5 Please") 
for(let i = 0; i <userNum; i++){
    document.write ( '<img src="joker.jpg" />');
}


