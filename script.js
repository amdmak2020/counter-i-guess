var x = document.getElementById("a").addEventListener("click", incre)
var x = document.getElementById("b").addEventListener("click", re)
var x = document.getElementById("c").addEventListener("click", decre)

var x = 0 
document.getElementById('n').innerHTML = x;

function incre(){
    x += 1;
    document.getElementById('n').innerHTML = x;
}

function re(){
    x = 0;
    document.getElementById('n').innerHTML = x;
}

function decre(){
    x -= 1;
    document.getElementById('n').innerHTML = x;
}