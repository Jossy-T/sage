// bulb on/off

let bulb="off";
const newDiv= document.createElement("h1")

function turnon(){
    document.getElementById("bulb").src=""
    bulb="on";
}

function turnoff(){
    document .getElementById("bulb").src=""
    bulb="off"
}

function toggle(){
    if (bulb==on){
        document .getElementById("bulb").src=""
        bulb="off"
    }
    else{
        document .getElementById("bulb").src=""
        bulb="on"
    }
}

// upto this

// document.getElementById("btClick").addEventListener("click",insertHtml)
$("#btClick").click(insertHtml)
function insertHtml(){
    const el = document.getElementById("hello")
    el.style.fontSize="50px"
    el.style.color="red"

    newDiv.innerText="added element"
}
// jquery
$("#box")
.css("color","white")
.css("background-color","black")
.css("display","flex")
.css("justify-content","center")
.css("margin","30px")
.css("width","200px")
.slideUp(2000)
.slideDown(3000)
.css("hight","auto");

$("#heading")
.css("font-weight","bold")
.css("font-size","30px")
const person={
    firstName:"Yosef",
    lastName:"Tanu",
    age:21,
    adress:{
        country:"Ethiopia",
        city:"A.A",
        subCity:"Lemikura",
        woreda:"13",
    },

    fullName: function(){
        return this.firstName+" "+this.lastName
    }

}

array=[
    {name:"jossy", lastName:".T", age:23,},
    {carname:"Ford Mustang", model:"560", color:"mat black"},
]

console.log(array[1].carname);

console.log(person.adress.subCity);
console.log(person.fullName());

const date= new Date();
const update= new Date(2025,14,32);
console.log(update);

// conditional statement in short hand nullish in short hand.
let name;
(45>5)?value=true:value=false

console.log("the statement is"+" "+value);

console.log(name??"73772828");


let names=[ "henok", "beza", "markos"];

for(let name of names){
    console.log(name);
}

let car={
    name: "porch 911(The most selled car)",
    model:600,
    horsePower:1200,
    color:"Dark Black",
    interiorColor:"pure white",
    tireLength:500,
}

for(let cars in car){
    console.log(cars + " =",car[cars]);
}

