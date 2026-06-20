const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_Ud3GCkckKGv1Yxx92WbovBzZnzT3RDF2Ez4sQ2yR"
const dropdown = document.querySelectorAll(".dropDown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".To select");
const msg = document.querySelector(".msg");


for (let select of dropdown){
    for(let currCode in countryList){
        let opn = document.createElement("option");
        opn.innerText = currCode;
        opn.value = currCode;
        select.append(opn)
        if(select.name === "From" && currCode === "USD"){
            opn.selected = "selected"
        }
        if(select.name === "To" && currCode === "INR"){
            opn.selected = "selected"
        }
    }
    select.addEventListener("change",(evt)=>{
        flag(evt.target)
    })
}

const flag = (element)=>{
    let currCode = element.value
    let countryCode = countryList[currCode];
    // console.log(countryCode)
    let img = element.parentElement.querySelector("img");
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    img.src = newSrc;
}


btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let input = document.querySelector("input");
    inputVal = input.value;
    // console.log(inputVal);
    if(inputVal === "" || inputVal<1){
        inputVal = 1;
        input.value = 1;
    }

    const URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_Ud3GCkckKGv1Yxx92WbovBzZnzT3RDF2Ez4sQ2yR&base_currency=${fromCurr.value}&currencies=${toCurr.value}`
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.data[toCurr.value].value;
    
    let finalAmt = inputVal * rate;

    msg.innerText = `${inputVal}${fromCurr.value} = ${finalAmt}${toCurr.value}`;

    msg.classList.remove("hide");
    
})


