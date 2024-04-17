// KM DA PERCORRERE
let km = prompt("Chilometri da percorrere")
// let km = getElementById("kms").innerText;
console.log(`km da percorrere: ${km}`)

// ETA
let age = prompt("Eta del passeggero")
// let age = getElementById("eta").innerText;
console.log(`eta: ${age}`)

// CALCOLO PREZZO PER KM
let price = km * 0.21 
console.log(`prezzo senza sconto: ${price}\$`)
document.getElementById("costo").innerText = (`Prezzo per il viaggio: ${price.toFixed(2)}\$`)


// PREZZO u18
if(age < 18){
    price = (km * 0.21) - (price * 0.2)
    document.getElementById("costo").innerText = (`Prezzo per il viaggio(-20%): ${price.toFixed(2)}\$`)
    console.log(`prezzo u18 ${price}\$`)
}

// PREZZO o65
if(age > 65){
    price = (km * 0.21) - (price * 0.4)
    document.getElementById("costo").innerText = (`Prezzo per il viaggio(-40%): ${price.toFixed(2)}\$`)
    console.log(`prezzo o65 ${price}\$`)
}


