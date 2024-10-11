var a=document.getElementById("head");
var b=document.getElementById("btn");

b.addEventListener("click",changecolor )

function changecolor(){
    a.style.color="red";
}


a.addEventListener("mouseover",background)

function background(){
    a.style.background="yellow";
}