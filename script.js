let BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_Ud3GCkckKGv1Yxx92WbovBzZnzT3RDF2Ez4sQ2yR&currencies=EUR%2CUSD%2CCAD"
let dropdown = document.querySelectorAll(".dropDown select")


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
}
