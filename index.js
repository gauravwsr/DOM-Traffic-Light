let stopbtn = document.getElementById("stopbtn");
let readybtn = document.getElementById("readybtn");
let gobtn = document.getElementById("gobtn");

let redlg = document.getElementById("redlg");
let greenlg = document.getElementById("greenlg");
let yellowlg = document.getElementById("yellowlg");


function stop(){
    redlg.style.background = "red";
    stopbtn.style.background = "red";

    greenlg.style.background = "grey";
    readybtn.style.background = "grey";

    yellowlg.style.background = "grey";
    gobtn.style.background = "grey";
}

function Ready(){
    greenlg.style.background = "green";
    readybtn.style.background = "green";

    redlg.style.background = "grey";
    stopbtn.style.background = "grey";

    yellowlg.style.background = "grey";
    gobtn.style.background = "grey";
}

function go(){
    yellowlg.style.background = "yellow";
    gobtn.style.background = "yellow";

    redlg.style.background = "grey";
    stopbtn.style.background = "grey";

    greenlg.style.background = "grey";
    readybtn.style.background = "grey";
}
