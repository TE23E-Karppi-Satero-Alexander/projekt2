let varukorg = document.querySelector("#varukorg_div");
let kundvagn = document.querySelector("#visa_varukorg")

function visaVarukorg(){
    varukorg.style.visibility = "visible";
    kundvagn.style.visibility = "hidden";
}

function gömVarukorg(){
    varukorg.style.visibility = "hidden";
    kundvagn.style.visibility = "visible";
}