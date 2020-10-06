var text = document.querySelector("#text");
var btn = document.querySelector("#btn");
var list = document.querySelector("#list");
var ol = document.querySelector("#ol");
var chooseBtn = document.querySelector("#chooseBtn");
var easyBtn = document.querySelector("#easyBtn");
var result = document.querySelector("#result");

var food = [];

btn.addEventListener("click", show);

function show(){
    food.push(text.value);

    var newLi = document.createElement("li");
    newLi.setAttribute("class", "newLi")
    var newText = document.createTextNode(text.value);

    ol.appendChild(newLi);
    newLi.appendChild(newText);

    text.value = ""
    text.focus();
}

chooseBtn.addEventListener("click", choose);

function choose(){
alert("당신의 선택은");

alert("두구두구두구두구두구~");

alert("바로오오오오오오오오오오오오오오옹");

result.innerHTML = food[Math.round(Math.random() * (food.length - 1))] + "입니다! 좋은 선택이네요!";

result.setAttribute("style", "padding: 10px;");
}

easyBtn.addEventListener("click", easyChoose);

function easyChoose(){
result.innerHTML = "당신의 선택은 바로 " + "'" + food[Math.round(Math.random() * (food.length - 1))] + "'" + "입니다! 좋은 선택이네요!";

result.setAttribute("style", "padding: 10px;");
}
