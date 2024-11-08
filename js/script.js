//Prelevo tutti gli elementi che mi servono dall'HTML
const formElem = document.getElementById("user-form");
const nameElem = document.getElementById("name");
const chilometriElem = document.getElementById("chilometri");
const etàElem = document.getElementById("età");
const userElem = document.getElementById("name-user");
const offerElem = document.getElementById("offer");
const trainElem = document.getElementById("train");
const codeElem = document.getElementById("code");
const priceElem = document.getElementById("price");
const resultElem = document.getElementById("result");
const titleElem = document.getElementById("title-result");

//AddEventListener
formElem.addEventListener("submit",function(event){

    event.preventDefault();

    const name = nameElem.value.trim();
    const chilometri = chilometriElem.value.trim();
    const età = etàElem.value.trim();

//calcolo del prezzo del biglietto
    const ticketPrice = 0.21 * chilometri;

//Calcolo dello sconto del 20%
    const discountTwenty = ticketPrice / 100 * 20;


//Calcolo del prezzo finale del biglietto con lo sconto del 20%
    const finalPriceTwenty = ticketPrice - discountTwenty

//Calcolo dello sconto del 40%
   const discountForty = ticketPrice / 100 * 40;


//Calcolo del prezzo finale del biglietto con lo sconto del 40%
    const finalPriceForty = ticketPrice - discountForty;


//Condizioni
    if(età < 18) {

        priceElem.innerHTML = `${finalPriceTwenty.toFixed(2)} €`;
    }else if (età > 65){

        priceElem.innerHTML = `${finalPriceForty.toFixed(2)} €`;
    }else{

        priceElem.innerHTML = `${ticketPrice.toFixed(2)} €`;
    }


    if(resultElem.classList.contains("d-none")){

        resultElem.classList.remove("d-none")                       
    }


    if(titleElem.classList.contains("d-none")){

        titleElem.classList.remove("d-none")
    }
    codeElem.innerHTML = Math.floor(Math.random () * 10000) +1;
    trainElem.innerHTML = Math.floor(Math.random () * 10) +1;
    offerElem.innerHTML = "Standard";
    userElem.innerHTML = name;
})
