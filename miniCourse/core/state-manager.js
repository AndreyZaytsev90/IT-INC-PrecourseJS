let _observers = []

export function subscribe(observer) {
    _observers.push(observer)
}

export function unsubscribe(observer) { // функция удаления наблюдателя в массив наблюдателей
    _observers = _observers.filter((obs) => obs !== observer)
}

function _notifyObserver(name, payload = {}) {
    const event = {
        name,
        payload
    }
    _observers.forEach((obs) => {
        try {
            obs(event)
        } catch (error) {
            console.error(error)
        }
    })
}

// ***INTERFACE / ADAPTER***

export async function startGame() {
   fetch("http://localhost:3000/startGame")
}

export async function playAgain() {
    fetch("http://localhost:3000/playAgain")
}

export async function movePlayer(playerNumber, direction) {
    fetch(`http://localhost:3000/movePlayer?playerNumber=${playerNumber}&direction=${direction}` )
}

// ***GETTERS / SELECTORS***

export async function getGameStatus() {
    const response = await fetch("http://localhost:3000/getGameStatus")
    const responsePayload = await response.json()
    return responsePayload.data
}

export async function getGooglePoints() {
    const response = await fetch("http://localhost:3000/getGooglePoints")
    const responsePayload = await response.json()
    return responsePayload.data
}

export async function getPlayersPoints(playerNumber) {
    const response = await fetch(`http://localhost:3000/getPlayersPoints?playerNumber=` + playerNumber)
    const responsePayload = await response.json()
    return responsePayload.data
}

export async function getGridSize() {
    const response = await fetch("http://localhost:3000/getGridSize")
    const responsePayload = await response.json()
    return responsePayload.data
}

export async function getGooglePosition() {
    const response = await fetch("http://localhost:3000/getGooglePosition")
    const responsePayload = await response.json()
    return responsePayload.data
}

export async function getPlayerPosition(playerNumber) {
    const response = await fetch(`http://localhost:3000/getPlayerPosition?playerNumber=` + playerNumber)
    const responsePayload = await response.json()
    return responsePayload.data
}
