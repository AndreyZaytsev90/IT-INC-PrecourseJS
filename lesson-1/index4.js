const currentName = document.querySelector(".currentName"); // ищем span по класс .currentName
const card1Type = document.querySelector(".card1Type")
const currentBalanceValue1 = document.querySelector(".card1Type")

let currentUser = {
name: 'Andrey'
}

let card1 = {
    type: 'Debit',
    networkType: 'masterCard',
    currencyType: 'RUS',
    currentBalance: 7634.9,
    number: 5484380014556260,
    expirationYear: 2025,
    expirationMonth: 7,
    isActive: true
}

let card2 = {
    type: 'Debit',
    networkType: 'masterCard',
    currencyType: 'RUS',
    currentBalance: 18343.2,
    number: 5536913788494546,
    expirationYear: 2023,
    expirationMonth: 10,
    isActive: true
}

currentName.textContent = currentUser.name
card1Type.textContent = card1.type
currentBalanceValue1.textContent = card1.currentBalance