let written = "";
let r = "";

function Write(){

    var p = document.createElement("p");
    p.setAttribute("id", "theanswer");
    document.getElementById("respostas").appendChild(p); 
    written = document.getElementById('awnserquestion').value;
    document.getElementById('theanswer').innerHTML = written;
    p.textContent = document.getElementById('theanswer').innerHTML;
}