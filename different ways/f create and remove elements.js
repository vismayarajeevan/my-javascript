var a=document.createElement("h1");

// add content
function create(){
    a.innerHTML="Hello";
    document.body.appendChild(a);
}

//remove content

function remove(){
    a.remove();
}