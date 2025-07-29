let bulb="off";
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