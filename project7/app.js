function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min + 1)+ min)
}
var num1 = getRandomInt(1, 6);
var num2 = getRandomInt(1, 6);
var str1 = "images/dice"+ num1 + ".png"
var str2 = "images/dice"+ num2 + ".png"
function addIcon(x){
    var tag = document.createElement(i);
    var icon = documet.create
}

if(num1>num2){
    
    document.querySelector("h1").textContent="🚩Player 1 Win"
}
else if (num1<num2){
    document.querySelector("h1").textContent="Player 2 Win🚩"
}
else{
    document.querySelector("h1").textContent="We have a tide"
}


document.querySelectorAll("img")[0].setAttribute("src", str1)
document.querySelectorAll("img")[1].setAttribute("src", str2)

