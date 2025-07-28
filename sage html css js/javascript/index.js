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