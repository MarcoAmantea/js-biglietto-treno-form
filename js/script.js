const formElem = document.getElementById("user-form");
const nameElem = document.getElementById("name")
const chilometriElem = document.getElementById("chilometri")
const etàElem = document.getElementById("età")
const userElem = document.getElementById("name-user")
const offerElem = document.getElementById("offer")
const trainElem = document.getElementById("train")
const codeElem = document.getElementById("code")
const priceElem = document.getElementById("price")


formElem.addEventListener("submit",function(event){
console.log(event);
event.preventDefault();
const name = nameElem.value.trim();
const chilometri = chilometriElem.value.trim();
const età = etàElem.value.trim();

//calcolo del prezzo del biglietto
const ticketPrice = 0.21 * chilometri;
console.log(ticketPrice);

//Calcolo dello sconto del 20%
const discountTwenty = ticketPrice / 100 * 20;


//Calcolo del prezzo finale del biglietto con lo sconto del 20%
const finalPriceTwenty = ticketPrice - discountTwenty
console.log(finalPriceTwenty.toFixed (2))

//Calcolo dello sconto del 40%
const discountForty = ticketPrice / 100 * 40;
console.log(discountForty);

//Calcolo del prezzo finale del biglietto con lo sconto del 40%
const finalPriceForty = ticketPrice - discountForty
console.log(finalPriceForty.toFixed (2))

//Condizioni
if(età < 18) {
    priceElem.innerHTML = `${finalPriceTwenty.toFixed(2)} €`;
}else if (età > 65){
    priceElem.innerHTML = `${finalPriceForty.toFixed(2)} €`;
}else{
    priceElem.innerHTML = `${ticketPrice.toFixed(2)} €`
}

codeElem.innerHTML = Math.floor(Math.random () * 10000) +1;
trainElem.innerHTML = Math.floor(Math.random () * 10) +1;
offerElem.innerHTML = "Standard"
userElem.innerHTML = name

})