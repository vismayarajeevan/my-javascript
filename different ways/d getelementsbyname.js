var a=document.getElementsByName("text");
var b=document.getElementById("head");

function message(){
    b.innerHTML="Hello "+ a[0].value;
}