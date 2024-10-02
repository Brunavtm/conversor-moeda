// Cotação das moedas
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


// Obtendo elementos do form
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando input para receber apenas números usando regex
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, '$')
            break
        
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break

        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }

}

function convertCurrency(amount, price, symbol) {
    try{
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        
        let total = amount * price
        total = formatCurrencyBRL(total)
        result.textContent = `${total}`

        footer.classList.add("show-result")
    }
    catch(error){
        console.log(error)
        footer.classList.remove("")
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

