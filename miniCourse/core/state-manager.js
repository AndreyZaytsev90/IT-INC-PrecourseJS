const _state = {
    settings: {
        gridSize: {
            rowsCount: 4,
            columnCount: 4
        }
    },
    positions: {
        google: {
            x: 1,
            y: 1
        },
        players: [{
            x: 2,
            y: 2
        }, {
            x: 3,
            y: 3
        }]
    },
    points: {
        google: 12,
        players: [10, 11]
    }
}

//Шаблон "Наблюдатель" (Observer pattern)

/*let _observer = () => {} // 1) Заглушка, что бы subscribe был необязательным
export  function subscribe(observer){  // 2) observer - функция наблюдатель
    _observer = observer // 3) Присваиваем заглушке ту функцию, которая стала наблюдателем 
}*/
let _observers = []

export function subscribe(observer) {  // функция добавления наблюдателя в массив наблюдателей
    _observers.push(observer)
}

export function unsubscribe(observer) { // функция удаления наблюдателя в массив наблюдателей
    _observers = _observers.filter((obs) => obs !== observer)
}

function _notifyObserver() {
    _observers.forEach((obs) => {
        try {
            obs()
        } catch (error) {
            console.error(error)
        }
    })
}

function _generateNewNumber(min, max) {
    return Math.random() * (max - min) + min
}

function _jumpGoogleToNewPosition() {
    const newPosition = {..._state.positions.google}

    do {
        newPosition.x = _generateNewNumber(0, _state.settings.gridSize.columnCount)
        newPosition.y = _generateNewNumber(0, _state.settings.gridSize.rowsCount)

        var isPositionMatchingGoogle = newPosition.x === _state.positions.google.x && newPosition.y === _state.positions.google.y
        var isPositionMatchingPlayer1 = newPosition.x === _state.positions.players[0].x && newPosition.y === _state.positions.players[0].y
        var isPositionMatchingPlayer2 = newPosition.x === _state.positions.players[1].x && newPosition.y === _state.positions.players[1].y

    } while (isPositionMatchingGoogle || isPositionMatchingPlayer1 || isPositionMatchingPlayer2)
}


// Архитектурное решение - геттер (функция, которая позволяет достать из стейта данные.
// Далее получить их в другом месте, путем вызова этой функции)
function _getPlayerIndexByNumber(playerNumber) {
    const playerIndex = playerNumber - 1
    if (playerIndex < 0 || playerIndex > _state.points.players.length - 1) {
        throw new Error("Incorrect player number")
    }
    return playerIndex;
}

setInterval(() => {
    _state.positions.google = {x: 2, y: 1}
    _state.points.google++
    /*  _observer() //4) Вызываем */
    _notifyObserver()
}, 1000)


//Interface
/**
 * @returns {number}- number of points
 */
export async function getGooglePoints() {
    return _state.points.google
}

/**
 * @param {number} playerNumber - one-based index of player
 * @returns {Promise<number>} - number of points
 */
export async function getPlayersPoints(playerNumber) {
    const playerIndex = _getPlayerIndexByNumber(playerNumber);
    return _state.points.players[playerIndex]
}

export async function getGridSize() {
    return {..._state.settings.gridSize}
}

export async function getGooglePosition() {
    return {..._state.positions.google}
}

export async function getPlayerPosition(playerNumber) {
    const playerIndex = _getPlayerIndexByNumber(playerNumber);
    return {..._state.positions.players[playerIndex]}
}