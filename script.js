const upperDisplay = document.getElementById("upperDisplay");
const lowerDisplay = document.getElementById("lowerDisplay");
var exp = '';

function press(num){
    exp += num;
    lowerDisplay.value = exp;
}

function equal(){
    upperDisplay.style.display = "block";
    upperDisplay.style.marginBottom = "0px";
    upperDisplay.value = eval(exp);
    lowerDisplay.style.fontSize = "12px";
    // lowerDisplay.style.background = "none";
    lowerDisplay.value = exp;
    exp = '';
    
}

function erase(){
    exp = '';
    upperDisplay.style.display = "none";
    lowerDisplay.style.fontSize = "40px";
    lowerDisplay.value = '';
}

function deleteCharacter() {
    exp = exp.slice(0, -1); 
    // Remove the last character
    lowerDisplay.value = exp;
}


//expression=exp