// globala variabler
const varukorg_div = document.querySelector("#varukorg_div");
const kundvagn = document.querySelector("#visa_varukorg");
const varukorg_ul = document.querySelector("#varukorg_ul");
const summa_pris_element = document.querySelector("#summa_pris");
const varukorg_nyckel = "NyckelFörAttSparaVarukorg";
let summa_pris = 0;

// Skapa en array
let varukorg = [];


// Funktioner för att gömma/visa varukorg
function visaVarukorg(){
    varukorg_div.style.visibility = "visible";
    kundvagn.style.visibility = "hidden";
}

function gömVarukorg(){
    varukorg_div.style.visibility = "hidden";
    kundvagn.style.visibility = "visible";
}




// Funktion för att lägga in i varukorg
function läggTillIVarukorg(namn, pris) {
    // Skapa element för varje produkt i en lista
    let li = document.createElement("li");
    li.textContent = namn + ", " + pris + " kr";
    varukorg_ul.appendChild(li);
    
/*     // Skapa en array
    let varukorg = []; */
    
    let jsonVarukorg = window.localStorage.getItem(varukorg_nyckel);
    if(jsonVarukorg){
        varukorg = JSON.parse(jsonVarukorg);
    }

    // Ändra totala priset
    summa_pris += pris;
    summa_pris_element.textContent = "Total pris: " + summa_pris + " kr";

    // Spara pris i localstorage

    
    // Skapa objekt
    let produkt = {
        namn: namn, 
        pris: pris
    }

    // Spara produkten i arrayn och local storage
    varukorg.push(produkt);
    jsonVarukorg = JSON.stringify(varukorg);
    window.localStorage.setItem(varukorg_nyckel, jsonVarukorg);
}

function laddatSidan(){

    // Ifall det finns sparat i localStorage -> ladda in det till array
    let jsonVarukorg = window.localStorage.getItem(varukorg_nyckel);
    if(jsonVarukorg){
    varukorg = JSON.parse(jsonVarukorg);
    }
    for (let i = 0; i < varukorg.length; i++) {
        let produkt = varukorg[i];
        let li = document.createElement("li");
        li.textContent = produkt.namn + ", " + produkt.pris + " kr";
        varukorg_ul.appendChild(li);
        summa_pris += produkt.pris;
    }
    summa_pris_element.textContent = "Total pris: " + summa_pris + " kr";
}